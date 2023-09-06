import React, { useContext, useState } from "react";
import { Button } from "../../../utils/Button";
import toast from "react-hot-toast";
import { LoaderContext } from "../../../context/LoaderContext";
import pageData from "../../../data/common/CaseStudy.json";
import { ImageOverlay } from "../../../utils/Admin/ImageOverlay";
import { Input, TextArea } from "../../../utils/Input";
import PrivateLayout from "../../../components/Layout/privateLayout";
import {CaseStudyInterface} from "../../../types";
const CaseStudyPage = () => {
    const { setIsLoading } = useContext(LoaderContext);
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

    const save = async () => {
        setIsLoading(true);
        const response = await fetch('http://localhost:3000/api/save', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                fileUrl: 'common/CaseStudy.json',
                updatedContent: JSON.stringify({
                    ...pageData,
                    caseStudies: headerData
                })
            }),
        });

        const data = await response.json();

        if (data.success) {
            toast.success("Changes saved successfully!");
        } else {
            toast.error(`Error saving changes: ${data.message}`);
        }
        setIsLoading(false);
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
                    onClick={save}
                />
                <Button
                    label="Add New"
                    type="button"
                    className="px-[24px] py-[4px] rounded"
                    onClick={addLinks}
                />
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
                                        placeholder="Label"
                                        value={item.org}
                                        onChange={e => setParams(index, "org", e.target.value)}
                                        className="rounded admin-input"
                                    />
                                </div>
                                <div className="p-[5px]">
                                    <Input
                                        label="Heading"
                                        placeholder="Label"
                                        value={item.heading}
                                        onChange={e => setParams(index, "heading", e.target.value)}
                                        className="rounded admin-input"
                                    />
                                </div>
                                <div className="p-[5px]">
                                    <TextArea
                                        label="Description"
                                        placeholder="Label"
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