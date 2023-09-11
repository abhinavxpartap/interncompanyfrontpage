import React, { useContext, useState } from "react";
import { Button } from "../../../../utils/Button";
import {Input, TextArea} from "../../../../utils/Input";
import toast from "react-hot-toast";
import { LoaderContext } from "../../../../context/LoaderContext";
import { ImageOverlay } from "../../../../utils/Admin/ImageOverlay";
import pageData from "../../../../data/HomePageService.json";
import PrivateLayout from "../../../../components/Layout/privateLayout";

interface ServiceInterface {
    image: {
        src: string;
        alt: string;
    };
    title: string;
    description: string;
}

interface paramsInterface {
    title:string;
    subtitle:string;
}

interface pageDataInterface {
    bannerData:paramsInterface,
    header:ServiceInterface[];
}

const Service = () => {
    const { setIsLoading } = useContext(LoaderContext);

    const [params1, setParams1] = useState<paramsInterface>({
        title: pageData.bannerData.title,
        subtitle: pageData.bannerData.subtitle,
    });

    const save = async (pageData:pageDataInterface, companies:ServiceInterface[], params1:paramsInterface) => {
        setIsLoading(true);
        const dataToSave = {
            fileUrl: '/HomePageService.json',
            updatedContent: JSON.stringify({
                ...pageData,
                header: companies,
                bannerData: params1
            })
        };

        const response = await fetch('/api/save', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(dataToSave),
        });

        const data = await response.json();

        if (data.success) {
            toast.success("Changes saved successfully!");
        } else {
            toast.error(`Error saving changes: ${data.message}`);
        }
        setIsLoading(false);
    };

    const setBannerParams = (key: keyof paramsInterface, value: string) => {
        const newParams = {...params1};
        newParams[key] = value;
        setParams1(newParams);
    }


    const [companies, setCompanies] = useState<ServiceInterface[]>(pageData.header);

    const setParams = (index: number, key: string, value: string): void => {
        const newCompany = [...companies];
        newCompany[index] = {
            ...newCompany[index],
            [key]: value
        };
        setCompanies(newCompany);
    }

    const addCompany = () => {
        const newCompany = [...companies];
        newCompany.push({
            image: {
                src: "",
                alt: "",
            },
            title: "",
            description: "",
        });
        setCompanies(newCompany);
    };

    const removeCompany = (index: number) => {
        const newCompany = [...companies];
        newCompany.splice(index, 1);
        setCompanies(newCompany);
    }

    const handleSaveClick = () => {
        save(pageData, companies, params1);
    };

    return <PrivateLayout title="Zuca - Landing Services">
        <div className="flex flex-col gap-[16px]">
            <div className="flex items-center gap-[16px]">
                <h3 className="flex-1 text-[21px] tracking-[1.2px] font-semibold text-[#101D2C]">
                    Zuca Services
                </h3>
                <Button
                    label="Save"
                    type="button"
                    className="px-[24px] py-[4px] rounded"
                    onClick={handleSaveClick}
                />
                <Button
                    label="Add New"
                    type="button"
                    className="px-[24px] py-[4px] rounded"
                    onClick={addCompany}
                />
            </div>
            <div className="rounded border bg-white mt-[10px] p-[10px]">
                <div className="p-[10px]">
                    <Input
                        label="Title"
                        placeholder="Title"
                        value={params1.title}
                        onChange={e => setBannerParams('title', e.target.value)}
                        className="rounded admin-input"
                    />
                </div>
                <div className="p-[10px]">
                    <Input
                        label="Sub Title"
                        placeholder="Sub Title"
                        value={params1.subtitle}
                        onChange={e => setBannerParams('subtitle', e.target.value)}
                        className="rounded admin-input"
                    />
                </div>
            </div>
            <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-[16px]">
                {companies.map((item:ServiceInterface, index) => {
                        return <div key={index} className="rounded border overflow-hidden bg-white">
                            <ImageOverlay
                                withOverlay
                                url={item.image.src}
                                id={`image-${index}`}
                                onUploadSuccess={(url) => setParams(index, "image.src", url)}
                                className="h-[120px]"
                                remove={() => removeCompany(index)}
                            />
                            <div className="p-[10px]">
                                <Input
                                    label="Alt Text"
                                    placeholder="Alt Text"
                                    value={item.image.alt}
                                    onChange={e => setParams(index, "image.alt", e.target.value)}
                                    className="rounded admin-input"
                                />
                            </div>
                            <div className="p-[10px]">
                                <Input
                                    label="Title"
                                    placeholder="Title"
                                    value={item.title}
                                    onChange={e => setParams(index, "title", e.target.value)}
                                    className="rounded admin-input"
                                />
                            </div>
                            <div className="p-[10px]">
                                <TextArea
                                    label="Description"
                                    placeholder="Description"
                                    value={item.description}
                                    onChange={e => setParams(index, "description", e.target.value)}
                                    className="rounded admin-input"
                                />
                            </div>
                        </div>
                    })
                }
            </div>
        </div>
    </PrivateLayout>
}

export default Service;