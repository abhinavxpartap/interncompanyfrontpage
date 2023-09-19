import React, { useContext, useState } from "react";
import { Button } from "../../../../utils/Button";
import {Input, TextArea} from "../../../../utils/Input";
import toast from "react-hot-toast";
import { LoaderContext } from "../../../context/LoaderContext";
import { ImageOverlay } from "../../../../utils/Admin/ImageOverlay";
import pageData from "../../../../data/industriesAbout.json";
import PrivateLayout from "../../../../components/Layout/privateLayout";

interface ServiceInterface {
    title: string;
    subtitle: string;
}

interface NumberInterface {
    number:string;
    subtitle:string;
}

interface paramsInterface {
    title:string;
    buttonName:string;
    buttonLink:string;
    image:string;
}

interface pageDataInterface {
    bannerData:paramsInterface,
    header:ServiceInterface[],
    NumberData:NumberInterface[]
}

const AboutPage = () => {
    const { setIsLoading } = useContext(LoaderContext);

    const [params1, setParams1] = useState<paramsInterface>({
        title: pageData.bannerData.title,
        buttonName:pageData.bannerData.buttonName,
        buttonLink:pageData.bannerData.buttonLink,
        image:pageData.bannerData.image
    });

    const save = async (pageData:pageDataInterface, companies:ServiceInterface[],NumberData:NumberInterface[], params1:paramsInterface) => {
        setIsLoading(true);
        const dataToSave = {
            fileUrl: '/industriesAbout.json',
            updatedContent: JSON.stringify({
                ...pageData,
                header: companies,
                NumberData:NumberData,
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


    const [NumberData, setNumberData] = useState<NumberInterface[]>(pageData.NumberData);

    const setParamsNumberData = (index: number, key: string, value: string): void => {
        const newCompanyNumber = [...NumberData];
        newCompanyNumber[index] = {
            ...newCompanyNumber[index],
            [key]: value
        };
        setNumberData(newCompanyNumber);
    }


    const handleSaveClick = () => {
        save(pageData, companies,NumberData, params1);
    };

    return <PrivateLayout title="Zuca - Industries About">
        <div className="flex flex-col gap-[16px]">
            <div className="flex items-center gap-[16px]">
                <h3 className="flex-1 text-[21px] tracking-[1.2px] font-semibold text-[#101D2C]">
                    Industries About
                </h3>
                <Button
                    label="Save"
                    type="button"
                    className="px-[24px] py-[4px] rounded"
                    onClick={handleSaveClick}
                />
            </div>
            <div className="flex flex-row justify-center items-center gap-[20px] w-[100%]">
                <div className="w-[60%]">
                <ImageOverlay
                    withOverlay
                    url={params1.image}
                    onUploadSuccess={(url) => setBannerParams("image", url)}
                    className="h-[300px]"
                />
                </div>
            <div className="rounded border bg-white w-[40%]  p-[10px]">
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
            </div>
            <h1 className="font-bold mt-[10px]">About Content</h1>
            <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-[16px]">
                {companies.map((item:ServiceInterface, index) => {
                    return <div key={index} className="rounded border overflow-hidden bg-white">
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
                                label="Subtitle"
                                placeholder="Subtitle"
                                value={item.subtitle}
                                onChange={e => setParams(index, "subtitle", e.target.value)}
                                className="rounded admin-input"
                            />
                        </div>
                    </div>
                })
                }
            </div>
            <h1 className="font-bold mt-[10px]">About Numbers</h1>
            <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-[16px]">
                {NumberData.map((item:NumberInterface, index) => {
                    return <div key={index} className="rounded border overflow-hidden bg-white">
                        <div className="p-[10px]">
                            <Input
                                label="Number"
                                placeholder="Number"
                                value={item.number}
                                onChange={e => setParamsNumberData(index, "number", e.target.value)}
                                className="rounded admin-input"
                            />
                        </div>
                        <div className="p-[10px]">
                            <Input
                                label="Title"
                                placeholder="Title"
                                value={item.subtitle}
                                onChange={e => setParamsNumberData(index, "subtitle", e.target.value)}
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

export default AboutPage;