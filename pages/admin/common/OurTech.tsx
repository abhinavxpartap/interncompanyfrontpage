import React, { useContext, useState } from "react";
import { Button } from "../../../utils/Button";
import toast from "react-hot-toast";
import { LoaderContext } from "../../../context/LoaderContext";
import pageData from "../../../data/OurTech.json";
import { ImageOverlay } from "../../../utils/Admin/ImageOverlay";
import { Input } from "../../../utils/Input";
import PrivateLayout from "../../../components/Layout/privateLayout";

interface paramsInterface {
    title:string;
    subtitle1:string;
    subtitle2:string;
    buttonName:string;
    buttonLink:string;
}

interface HeaderDataInterface {
    image:string,
    alt:string,
}

interface pageDataInterface {
    bannerData:paramsInterface,
    header:HeaderDataInterface[];
}
const OurTech = () => {
    const { setIsLoading } = useContext(LoaderContext);

    const [params1, setParams1] = useState<paramsInterface>({
        title:pageData.bannerData.title,
        subtitle1:pageData.bannerData.subtitle1,
        subtitle2:pageData.bannerData.subtitle2,
        buttonName:pageData.bannerData.buttonName,
        buttonLink:pageData.bannerData.buttonLink
    });
    const save = async (pageData:pageDataInterface, headerData:HeaderDataInterface[], params1:paramsInterface) => {
        setIsLoading(true);
        const dataToSave = {
            fileUrl: '/OurTech.json',
            updatedContent: JSON.stringify({
                ...pageData,
                header: headerData,
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



    const [headerData, setHeaderData] = useState<HeaderDataInterface[]>(pageData.header);

    const setParams = (index: number, key: string, value: string): void => {
        const updatedItems = [...headerData];
        updatedItems[index] = {
            ...updatedItems[index],
            [key]: value
        };
        setHeaderData(updatedItems);
    }

    const addLinks = () => {
        const newLinks = [...headerData];
        newLinks.push({
            image:"",
            alt:""
        });
        setHeaderData(newLinks);
    }

    const removeLink = (index: number) => {
        const newLinks = [...headerData];
        newLinks.splice(index, 1);
        setHeaderData(newLinks);
    }

    const handleSaveClick = () => {
        save(pageData, headerData, params1);
    };


    return <PrivateLayout title="Zuca - Our Tech">
        <div className="flex flex-col gap-[16px]">
            <div className="flex items-center gap-[16px]">
                <h3 className="flex-1 text-[21px] tracking-[1.2px] font-semibold text-[#101D2C]">
                    Our Tech
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
                    onClick={addLinks}
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
                        label="Upper Sub Title"
                        placeholder="Upper Sub Title"
                        value={params1.subtitle1}
                        onChange={e => setBannerParams('subtitle1', e.target.value)}
                        className="rounded admin-input"
                    />
                </div>
                <div className="p-[10px]">
                    <Input
                        label="Down Sub Title"
                        placeholder="Down Sub Title"
                        value={params1.subtitle2}
                        onChange={e => setBannerParams('subtitle2', e.target.value)}
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
            <div className="grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 gap-[16px]">
                {
                    headerData.map((item: HeaderDataInterface, index: number) => {
                        return <div key={index} className="rounded border overflow-hidden bg-white">
                            <ImageOverlay
                                withOverlay
                                url={item.image}
                                id={`icon-${index}`}
                                className="h-[120px]"
                                remove={() => removeLink(index)}
                                onUploadSuccess={(url) => setParams(index, "image", url)}
                            />
                            <div className="p-[5px]">
                                <div className="p-[5px]">
                                    <Input
                                        label="Name"
                                        placeholder="Name"
                                        value={item.alt}
                                        onChange={e => setParams(index, "alt", e.target.value)}
                                        className="rounded admin-input"
                                    />
                                </div>
                            </div>
                        </div>
                    })
                }
            </div>
        </div>
    </PrivateLayout>
}

export default OurTech;