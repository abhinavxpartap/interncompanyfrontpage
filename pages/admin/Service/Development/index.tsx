import React, { useContext, useState } from "react";
import { Button } from "../../../../utils/Button";
import {Input} from "../../../../utils/Input";
import toast from "react-hot-toast";
import { LoaderContext } from "../../../../context/LoaderContext";
import { ImageOverlay } from "../../../../utils/Admin/ImageOverlay";
import pageData from "../../../../data/serviceDevelopment.json";
import PrivateLayout from "../../../../components/Layout/privateLayout";

interface ServiceInterface {
    image: string,
    title: string,
}

interface paramsInterface {
    title:string;
    subtitle:string;
    centerContent:string,
    buttonName:string,
    buttonLink:string,
}

interface pageDataInterface {
    bannerData:paramsInterface,
    headerLeft:ServiceInterface[];
    headerRight:ServiceInterface[];
}

const Development = () => {
    const { setIsLoading } = useContext(LoaderContext);

    const [params1, setParams1] = useState<paramsInterface>({
        title:pageData.bannerData.title,
        subtitle:pageData.bannerData.subtitle,
        centerContent:pageData.bannerData.centerContent,
        buttonName:pageData.bannerData.buttonName,
        buttonLink:pageData.bannerData.buttonLink,
    });

    const save = async (pageData:pageDataInterface,companies1:ServiceInterface[], companies:ServiceInterface[], params1:paramsInterface) => {
        setIsLoading(true);
        const dataToSave = {
            fileUrl: '/serviceDevelopment.json',
            updatedContent: JSON.stringify({
                ...pageData,
                headerLeft:companies,
                headerRight:companies1,
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


    const [companies, setCompanies] = useState<ServiceInterface[]>(pageData.headerLeft);

    const [companies1, setCompanies1] = useState<ServiceInterface[]>(pageData.headerRight);

    const setParams = (index: number, key: string, value: string): void => {
        const newCompany = [...companies];
        newCompany[index] = {
            ...newCompany[index],
            [key]: value
        };
        setCompanies(newCompany);
    }

    const setParams2 = (index: number, key: string, value: string): void => {
        const newCompany = [...companies];
        newCompany[index] = {
            ...newCompany[index],
            [key]: value
        };
        setCompanies1(newCompany);
    }

    const handleSaveClick = () => {
        save(pageData, companies1, companies, params1);
    };

    return <PrivateLayout title="Zuca - Service Development">
        <div className="flex flex-col gap-[16px]">
            <div className="flex items-center gap-[16px]">
                <h3 className="flex-1 text-[21px] tracking-[1.2px] font-semibold text-[#101D2C]">
                    Service Development
                </h3>
                <Button
                    label="Save"
                    type="button"
                    className="px-[24px] py-[4px] rounded"
                    onClick={handleSaveClick}
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
                        label="Center Content"
                        placeholder="Center Content"
                        value={params1.centerContent}
                        onChange={e => setBannerParams('centerContent', e.target.value)}
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
            <h1 className="font-bold">Left Side Components</h1>
            <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-[16px]">
                {companies.map((item:ServiceInterface, index) => {
                    return <div key={index} className="rounded border overflow-hidden bg-white">
                        <ImageOverlay
                            withOverlay
                            url={item.image}
                            id={`image-${index}`}
                            onUploadSuccess={(url) => setParams(index, "image", url)}
                            className="h-[120px]"
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
                    </div>
                })
                }
            </div>
            <h1 className="font-bold">Right Side Components</h1>
            <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-[16px]">
                {companies1.map((item:ServiceInterface, index) => {
                    return <div key={index} className="rounded border overflow-hidden bg-white">
                        <ImageOverlay
                            withOverlay
                            url={item.image}
                            id={`image-${index}`}
                            onUploadSuccess={(url) => setParams2(index, "image", url)}
                            className="h-[120px]"
                        />
                        <div className="p-[10px]">
                            <Input
                                label="Title"
                                placeholder="Title"
                                value={item.title}
                                onChange={e => setParams2(index, "title", e.target.value)}
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

export default Development;