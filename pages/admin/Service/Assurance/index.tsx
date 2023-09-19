import React, { useContext, useState } from "react";
import { Button } from "../../../../utils/Button";
import {Input} from "../../../../utils/Input";
import toast from "react-hot-toast";
import { LoaderContext } from "../../../context/LoaderContext";
import { ImageOverlay } from "../../../../utils/Admin/ImageOverlay";
import pageData from "../../../../data/serviceAssurance.json";
import PrivateLayout from "../../../../components/Layout/privateLayout";

interface ServiceInterface {
    icon: string;
    title: string;
    subtitle: string;
}

interface paramsInterface {
    title:string;
    image:string;
    buttonLink:string;
    buttonName:string;
    sideImage:string;
}

interface pageDataInterface {
    bannerData:paramsInterface,
    header:ServiceInterface[];
}

const Assurance = () => {
    const { setIsLoading } = useContext(LoaderContext);

    const [params1, setParams1] = useState<paramsInterface>({
        title: pageData.bannerData.title,
        image:pageData.bannerData.image,
        buttonLink:pageData.bannerData.buttonLink,
        buttonName:pageData.bannerData.buttonName,
        sideImage:pageData.bannerData.sideImage
    });

    const save = async (pageData:pageDataInterface, companies:ServiceInterface[], params1:paramsInterface) => {
        setIsLoading(true);
        const dataToSave = {
            fileUrl: '/serviceAssurance.json',
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
            icon: "",
            title: "",
            subtitle: "",
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

    return <PrivateLayout title="Zuca - Assurance">
        <div className="flex flex-col gap-[16px]">
            <div className="flex items-center gap-[16px]">
                <h3 className="flex-1 text-[21px] tracking-[1.2px] font-semibold text-[#101D2C]">
                    Service Assurance
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
            <div className="flex flex-col gap-[16px]">
                <div className="rounded border bg-white overflow-hidden md:h-[450px]">
                    <ImageOverlay
                        url={params1.image}
                        onUploadSuccess={(url) => setBannerParams('image', url)}
                        className="object-cover h-full"
                        wrapperHeightClass="h-full"
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
                        label="Button Name"
                        placeholder="Button Name"
                        value={params1.buttonName}
                        onChange={e => setBannerParams('buttonName', e.target.value)}
                        className="rounded admin-input"
                    />
                </div>
                <div className="p-[10px]">
                    <Input
                        label="Button Link"
                        placeholder="Button Link"
                        value={params1.buttonLink}
                        onChange={e => setBannerParams('buttonLink', e.target.value)}
                        className="rounded admin-input"
                    />
                </div>
            </div>
                <div className="font-bold">
                    Left Side Image
                </div>
                <div className="rounded border bg-white overflow-hidden md:h-[450px]">
                    <ImageOverlay
                        url={params1.sideImage}
                        onUploadSuccess={(url) => setBannerParams('sideImage', url)}
                        className="object-cover h-full"
                        wrapperHeightClass="h-full"
                    />
                </div>
            </div>
            <div className="font-bold">
                Right Side Content
            </div>
            <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-[16px]">
                {companies.map((item:ServiceInterface, index) => {
                    return <div key={index} className="rounded border overflow-hidden bg-white">
                        <ImageOverlay
                            withOverlay
                            url={item.icon}
                            id={`image-${index}`}
                            onUploadSuccess={(url) => setParams(index, "icon", url)}
                            className="h-[120px]"
                            remove={() => removeCompany(index)}
                        />
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
                            <Input
                                label="Sub Title"
                                placeholder="Sub Title"
                                value={item.subtitle}
                                onChange={e => setParams(index, "subtitle", e.target.value)}
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

export default Assurance;