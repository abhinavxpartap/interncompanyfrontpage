import React, { useContext, useState } from "react";
import { Button } from "../../../utils/Button";
import toast from "react-hot-toast";
import { LoaderContext } from "../../../context/LoaderContext";
import pageData from "../../../data/common/layout.json";
import { ImageOverlay } from "../../../utils/Admin/ImageOverlay";
import { Input } from "../../../utils/Input";
import PrivateLayout from "../../../components/Layout/privateLayout";

const HeaderPage = () => {
    const { setIsLoading } = useContext(LoaderContext);
    const [headerData, setHeaderData] = useState<any>(pageData.header);

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
            image: "",
            alt: ""
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
        const response = await fetch('/api/save', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                fileUrl: '/comman/layout.json',
                updatedContent: JSON.stringify({
                    ...pageData,
                    header: headerData
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
    return <PrivateLayout title="Zuca - Headers">
        <div className="flex flex-col gap-[16px]">
            <div className="flex items-center gap-[16px]">
                <h3 className="flex-1 text-[21px] tracking-[1.2px] font-semibold text-[#101D2C]">
                    Header
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
            <div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-[16px]">
                {
                    headerData.map((item: any, index: number) => {
                        return <div key={index} className="rounded border overflow-hidden bg-white">
                            <ImageOverlay
                                withOverlay
                                url={item.icon}
                                id={`icon-${index}`}
                                className="h-[120px]"
                                remove={() => removeLink(index)}
                                onUploadSuccess={(url) => setParams(index, "icon", url)}
                            />
                            <div className="p-[5px]">
                                <div className="p-[5px]">
                                    <Input
                                        label="Label"
                                        placeholder="Label"
                                        value={item.title}
                                        onChange={e => setParams(index, "title", e.target.value)}
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

export default HeaderPage;