import React, { useContext, useState } from "react";
import { Button } from "../../../../utils/Button";
import toast from "react-hot-toast";
import { LoaderContext } from "../../../../context/LoaderContext";
import pageData from "../../../../data/indsutreisDevelopment.json";
import { ImageOverlay } from "../../../../utils/Admin/ImageOverlay";
import { Input } from "../../../../utils/Input";
import PrivateLayout from "../../../../components/Layout/privateLayout";
import { Img } from "../../../../utils/Img";

interface ParamsInterface {
    title: string;
    subtitle: string;
    image: string;
}

interface HeaderDataInterface {
    title: string;
    id: number;
}

interface PageDataInterface {
    bannerData: ParamsInterface;
    header:HeaderDataInterface[]
}

const DevelopmentPage = () => {
    const { setIsLoading } = useContext(LoaderContext);

    const [params1, setParams1] = useState<ParamsInterface>({
        title:pageData.bannerData.title,
        subtitle: pageData.bannerData.subtitle,
        image: pageData.bannerData.image,
    });

    const save = async (
        pageData: PageDataInterface,
        services: HeaderDataInterface[],
        params1: ParamsInterface
    ) => {
        setIsLoading(true);
        const dataToSave = {
            fileUrl: "/indsutreisDevelopment.json",
            updatedContent: JSON.stringify({
                ...pageData,
                header: services,
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
        pageData.header
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

    const [lastIdService, setLastIdService] = useState<number>(
        Math.max(...pageData.header.map((item) => item.id), 0)
    );

    const addServices = () => {
        const newCompanyService = [...services];
        const newIdService = lastIdService + 1;
        newCompanyService.push({
            id: newIdService,
            title: ""
        });
        setServices(newCompanyService);
        setLastIdService(newIdService);
    };

    const removeServices = (index: number) => {
        const newCompanyService = [...services];
        const removedItem = newCompanyService.splice(index, 1)[0];

        newCompanyService.forEach((item, idx) => {
            item.id = idx + 1;
        });

        setServices(newCompanyService);

        if (removedItem.id === lastIdService) {
            setLastIdService(
                Math.max(0, ...newCompanyService.map((item) => item.id))
            );
        }
    };

    const handleSaveClick = () => {
        save(pageData,services,params1);
    };

    return <PrivateLayout title="Zuca - Industries Compliances">
        <div className="flex flex-col gap-[16px]">
            <div className="flex items-center gap-[16px]">
                <h3 className="flex-1 text-[21px] tracking-[1.2px] font-semibold text-[#101D2C]">
                    Industries Compliances
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
            <ImageOverlay
                url={params1.image}
                onUploadSuccess={(url) => setBannerParams('image', url)}
                className="object-cover h-full"
                wrapperHeightClass="h-full"
            />
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
                            <div className="flex justify-end p-2">
                                <div className="cursor-pointer" onClick={() => removeServices(index)}>
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
                            <div className="p-[5px]">
                                <div className="p-[5px]">
                                    <Input
                                        label="Title"
                                        placeholder="Title"
                                        value={item.title}
                                        onChange={e => setParamsServices( index,"title", e.target.value)}
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

export default DevelopmentPage;