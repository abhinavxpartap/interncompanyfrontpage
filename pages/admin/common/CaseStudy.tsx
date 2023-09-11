import React, { useContext, useState } from "react";
import { Button } from "../../../utils/Button";
import toast from "react-hot-toast";
import { LoaderContext } from "../../../context/LoaderContext";
import pageData from "../../../data/common/CaseStudy.json";
import { ImageOverlay } from "../../../utils/Admin/ImageOverlay";
import { Input, TextArea } from "../../../utils/Input";
import PrivateLayout from "../../../components/Layout/privateLayout";
import {CaseStudyInterface} from "../../../types";

interface ParamsInterface {
    title: string;
    subtitle: string;
    tagButton: string;
}
interface PageDataInterface {
    bannerData: ParamsInterface;
    caseStudies:CaseStudyInterface[]
}
const CaseStudyPage = () => {
    const { setIsLoading } = useContext(LoaderContext);
    const [params1, setParams1] = useState<ParamsInterface>({
        title:pageData.bannerData.title,
        subtitle: pageData.bannerData.subtitle,
        tagButton: pageData.bannerData.tagButton,
    });

    const save = async (
        pageData: PageDataInterface,
        headerData: CaseStudyInterface[],
        params1: ParamsInterface
    ) => {
        setIsLoading(true);
        const dataToSave = {
            fileUrl: "/common/CaseStudy.json",
            updatedContent: JSON.stringify({
                ...pageData,
                caseStudies: headerData,
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

    const [headerData, setHeaderData] = useState<CaseStudyInterface[]>(pageData.caseStudies);
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
            heading:"",
            imgUrl: "",
            org: "",
            description: "",
            href: "",
        });
        setHeaderData(newLinks);
    }

    const removeLink = (index: number) => {
        const newLinks = [...headerData];
        newLinks.splice(index, 1);
        setHeaderData(newLinks);
    }

    const handleSaveClick = () => {
        save(pageData,headerData,params1);
    };

    return <PrivateLayout title="Zuca - Case Study">
        <div className="flex flex-col gap-[16px]">
            <div className="flex items-center gap-[16px]">
                <h3 className="flex-1 text-[21px] tracking-[1.2px] font-semibold text-[#101D2C]">
                    Case Study
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
                        label="subtitle"
                        placeholder="subtitle"
                        value={params1.subtitle}
                        onChange={e => setBannerParams('subtitle', e.target.value)}
                        className="rounded admin-input"
                    />
                </div>
                <div className="p-[10px]">
                    <Input
                        label="Tab Button Name"
                        placeholder="Tag Button Name"
                        value={params1.tagButton}
                        onChange={e => setBannerParams('tagButton', e.target.value)}
                        className="rounded admin-input"
                    />
                </div>
            </div>
            <div className="grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 gap-[16px]">
                {
                    headerData.map((item:CaseStudyInterface, index: number) => {
                        return <div key={index} className="rounded border overflow-hidden bg-white">
                            <ImageOverlay
                                withOverlay
                                url={item.imgUrl}
                                id={`icon-${index}`}
                                className="h-[220px]"
                                remove={() => removeLink(index)}
                                onUploadSuccess={(url) => setParams(index, "imgUrl", url)}
                            />
                            <div className="p-[5px]">
                                <div className="p-[5px]">
                                    <Input
                                        label="Org"
                                        placeholder="Org"
                                        value={item.org}
                                        onChange={e => setParams(index, "org", e.target.value)}
                                        className="rounded admin-input"
                                    />
                                </div>
                                <div className="p-[5px]">
                                    <Input
                                        label="Heading"
                                        placeholder="Heading"
                                        value={item.heading}
                                        onChange={e => setParams(index, "heading", e.target.value)}
                                        className="rounded admin-input"
                                    />
                                </div>
                                <div className="p-[5px]">
                                    <TextArea
                                        label="Description"
                                        placeholder="Description"
                                        value={item.description}
                                        onChange={e => setParams(index, "description", e.target.value)}
                                        className="rounded admin-input"
                                    />
                                </div>
                                <div className="p-[5px]">
                                    <Input
                                        label="Href"
                                        placeholder="href"
                                        value={item.href}
                                        onChange={e => setParams(index, "href", e.target.value)}
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

export default CaseStudyPage;