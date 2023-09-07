import React, { useContext, useState } from "react";
import { Button } from "../../../../utils/Button";
import {Input, TextArea} from "../../../../utils/Input";
import toast from "react-hot-toast";
import { LoaderContext } from "../../../../context/LoaderContext";
import pageData from "../../../../data/serviceFaq.json";
import PrivateLayout from "../../../../components/Layout/privateLayout";
import {Img} from "../../../../utils/Img";

interface ServiceInterface {
    id:number;
    title: string;
    content: string;
}

interface paramsInterface {
    title:string;
    subtitle:string;
    buttonName:string;
    buttonLink:string;
}

interface pageDataInterface {
    bannerData:paramsInterface,
    header:ServiceInterface[];
}

const Process = () => {
    const { setIsLoading } = useContext(LoaderContext);

    const [params1, setParams1] = useState<paramsInterface>({
        title: pageData.bannerData.title,
        subtitle: pageData.bannerData.subtitle,
        buttonName:pageData.bannerData.buttonName,
        buttonLink:pageData.bannerData.buttonLink
    });

    const save = async (pageData:pageDataInterface, companies:ServiceInterface[], params1:paramsInterface) => {
        setIsLoading(true);
        const dataToSave = {
            fileUrl: '/serviceFaq.json',
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

    const [lastId, setLastId] = useState<number>(
        Math.max(...pageData.header.map((item) => item.id), 0)
    );

    const addCompany = () => {
        const newCompany = [...companies];
        const newId = lastId + 1;
        newCompany.push({
            id: newId,
            title: "",
            content: "",
        });
        setCompanies(newCompany);
        setLastId(newId);
    };

    const removeCompany = (index: number) => {
        const newCompany = [...companies];
        const removedItem = newCompany.splice(index, 1)[0];

        newCompany.forEach((item, idx) => {
            item.id = idx + 1;
        });

        setCompanies(newCompany);

        if (removedItem.id === lastId) {
            setLastId(Math.max(0, ...newCompany.map((item) => item.id)));
        }
    };


    const handleSaveClick = () => {
        save(pageData, companies, params1);
    };

    return <PrivateLayout title="Zuca - Service Faq">
        <div className="flex flex-col gap-[16px]">
            <div className="flex items-center gap-[16px]">
                <h3 className="flex-1 text-[21px] tracking-[1.2px] font-semibold text-[#101D2C]">
                    Service Faq
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
            <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-[16px]">
                {companies.map((item:ServiceInterface, index) => {
                    return <div key={index} className="rounded border overflow-hidden bg-white">
                        <div className="flex justify-end p-2">
                            <div className="cursor-pointer" onClick={() => removeCompany(index)}>
                                <Img
                                    src="/images/remove.svg"
                                    alt="upload"
                                    className="w-[35px] h-[35px] bg-white rounded-full p-2"
                                />
                            </div>
                        </div>
                        <div className="font-bold pl-[10px]">
                            {item.id}
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
                                label="Content"
                                placeholder="Content"
                                value={item.content}
                                onChange={e => setParams(index, "content", e.target.value)}
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

export default Process;