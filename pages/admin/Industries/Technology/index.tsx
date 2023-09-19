import React, { useContext, useState } from "react";
import { Button } from "../../../../utils/Button";
import toast from "react-hot-toast";
import { LoaderContext } from "../../../context/LoaderContext";
import pageData from "../../../../data/IndustriesTech.json";
import { ImageOverlay } from "../../../../utils/Admin/ImageOverlay";
import { Input } from "../../../../utils/Input";
import PrivateLayout from "../../../../components/Layout/privateLayout";

interface ParamsInterface {
    title: string;
    subtitle: string;
}

interface HeaderDataInterface {
    title: string;
    image:string;
    subtitle:string;
}

interface PageDataInterface {
    bannerData: ParamsInterface;
    data:HeaderDataInterface[]
}

const TechnologyPage = () => {
    const { setIsLoading } = useContext(LoaderContext);

    const [params1, setParams1] = useState<ParamsInterface>({
        title:pageData.bannerData.title,
        subtitle: pageData.bannerData.subtitle,
    });

    const save = async (
        pageData: PageDataInterface,
        services: HeaderDataInterface[],
        params1: ParamsInterface
    ) => {
        setIsLoading(true);
        const dataToSave = {
            fileUrl: "/IndustriesTech.json",
            updatedContent: JSON.stringify({
                ...pageData,
                data: services,
                bannerData: params1
            }),
        };

        const response = await fetch("/api/save", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
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

    const setBannerParams = (key: keyof ParamsInterface, value: string) => {
        const newParams = { ...params1 };
        newParams[key] = value;
        setParams1(newParams);
    };

    const [services, setServices] = useState<HeaderDataInterface[]>(
        pageData.data
    );

    const setParamsServices = (
        index: number,
        key: keyof HeaderDataInterface,
        value: string
    ): void => {
        const newCompanyService = [...services];
        newCompanyService[index] = {
            ...newCompanyService[index],
            [key]: value,
        };
        setServices(newCompanyService);
    };


    const addServices = () => {
        const newCompanyService = [...services];
        newCompanyService.push({
            title: "",
            image:"",
            subtitle:""
        });
        setServices(newCompanyService);
    };

    const removeServices = (index: number) => {
        const newCompanyService = [...services];
        newCompanyService.splice(index, 1);
        setServices(newCompanyService);
    }

    const handleSaveClick = () => {
        save(pageData,services,params1);
    };

    return <PrivateLayout title="Zuca - Industries Technology">
        <div className="flex flex-col gap-[16px]">
            <div className="flex items-center gap-[16px]">
                <h3 className="flex-1 text-[21px] tracking-[1.2px] font-semibold text-[#101D2C]">
                    Industries Technology
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
                    onClick={addServices}
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
                        label="subtitle"
                        placeholder="subtitle"
                        value={params1.subtitle}
                        onChange={e => setBannerParams('subtitle', e.target.value)}
                        className="rounded admin-input"
                    />
                </div>
            </div>
            <div className="flex flex-col gap-[10px]">
                <div className="grid xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-[16px]">
                    {services.map((item: HeaderDataInterface, index: number) => {
                        return <div key={index} className="rounded border overflow-hidden bg-white">
                            <div className="p-[5px]">
                                <div className="p-[5px]">
                                    <ImageOverlay
                                        withOverlay
                                        url={item.image}
                                        id={`image-${index}`}
                                        onUploadSuccess={(url) => setParamsServices(index, "image", url)}
                                        className="h-[120px]"
                                        remove={() => removeServices(index)}
                                    />
                                </div>
                                <div className="p-[5px]">
                                    <Input
                                        label="Title"
                                        placeholder="Title"
                                        value={item.title}
                                        onChange={e => setParamsServices( index,"title", e.target.value)}
                                        className="rounded admin-input"
                                    />
                                </div>
                                <div className="p-[5px]">
                                    <Input
                                        label="Sub Title"
                                        placeholder="Sub Title"
                                        value={item.subtitle}
                                        onChange={e => setParamsServices( index,"subtitle", e.target.value)}
                                        className="rounded admin-input"
                                    />
                                </div>
                            </div>
                        </div>
                    })
                    }
                </div>
            </div>
        </div>
    </PrivateLayout>
}

export default TechnologyPage;