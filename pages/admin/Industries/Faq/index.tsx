import React, { useContext, useState } from "react";
import { Button } from "../../../../utils/Button";
import toast from "react-hot-toast";
import { LoaderContext } from "../../../context/LoaderContext";
import jsonData from "../../../../data/common/industriesFAQ.json";
import {Input, TextArea} from "../../../../utils/Input";
import PrivateLayout from "../../../../components/Layout/privateLayout";
import {Img} from "../../../../utils/Img";


const FaqPage = () => {
    const { setIsLoading } = useContext(LoaderContext);

    const [headerData, setHeaderData] = useState(jsonData.header);
    const setParams = (index: number, key: string, value: string): void => {
        const updatedItems = [...headerData];
        updatedItems[index] = {
            ...updatedItems[index],
            [key]: value
        };
        setHeaderData(updatedItems);
    }

    const setDataTitle = (headerIndex: number, dataIndex: number, newValue: string) => {
        const updatedHeaderData = [...headerData];
        const dataItemToUpdate = updatedHeaderData[headerIndex].data[dataIndex];
        dataItemToUpdate.title = newValue;
        setHeaderData(updatedHeaderData);
    };

    const addItem = () => {
        const newHeaderData = [...headerData];
        newHeaderData.push({
            id: headerData.length + 1,
            title: '',
            content: '',
            data: [],
        });
        setHeaderData(newHeaderData);
    }
    const addDataTitle = (headerIndex: number) => {
        const newHeaderData = [...headerData];
        const newDataItem = { title: '' };
        newHeaderData[headerIndex].data.push(newDataItem);
        setHeaderData(newHeaderData);
    }
    const removeHeader = (headerIndex: number) => {
        const newHeaderData = [...headerData];
        newHeaderData.splice(headerIndex, 1);
        setHeaderData(newHeaderData);
    }
    const removeDataTitle = (headerIndex: number, dataIndex: number) => {
        const newHeaderData = [...headerData];
        newHeaderData[headerIndex].data.splice(dataIndex, 1);
        setHeaderData(newHeaderData);
    }

    const save = async () => {
        setIsLoading(true);
        const response = await fetch('/api/save', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                fileUrl: '/common/industriesFAQ.json',
                updatedContent: JSON.stringify({
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

    return (
        <PrivateLayout title="Zuca - Industries Faq">
            <div className="flex flex-col gap-[16px]">
                <div className="flex items-center gap-[16px]">
                    <h3 className="flex-1 text-[21px] tracking-[1.2px] font-semibold text-[#101D2C]">
                        Industries Faq
                    </h3>
                    <Button
                        label="Save"
                        type="button"
                        className="px-[24px] py-[4px] rounded"
                        onClick={save}
                    />
                    <Button
                        label="Add New Faq"
                        type="button"
                        className="px-[24px] py-[4px] rounded"
                        onClick={addItem}
                    />
                </div>
                <div className="grid xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-[16px]">
                    {headerData.map((header: any, headerIndex: number) => {
                        return (
                            <div key={headerIndex} className="relative rounded border overflow-hidden bg-white">
                                <div className="right-0 absolute top-[2px]  cursor-pointer" onClick={() => removeHeader(headerIndex)}>
                                    <Img
                                        src="/images/remove.svg"
                                        alt="upload"
                                        className="w-[35px] h-[35px] bg-white rounded-full p-2"
                                    />
                                </div>
                                <div className="p-[5px]">
                                    <div className="p-[5px]">
                                        <Input
                                            label="Faq Title"
                                            placeholder="Faq Title"
                                            value={header.title}
                                            onChange={(e) => setParams(headerIndex, "title", e.target.value)}
                                            className="rounded admin-input"
                                        />
                                    </div>
                                    <div className="p-[5px]">
                                        <TextArea
                                            label="Faq Content"
                                            placeholder="Faq Content"
                                            value={header.content}
                                            onChange={(e) => setParams(headerIndex, "content", e.target.value)}
                                            className="rounded admin-input"
                                        />
                                    </div>
                                </div>
                                <div className="flex justify-center w-[100%] mb-[5px] mt-[10px]">
                                <Button
                                    label="Add Data Title"
                                    type="button"
                                    className="px-[10px] font-bold text-[12px] py-[4px] rounded"
                                    onClick={() => addDataTitle(headerIndex)}
                                />
                                </div>
                                {header.data.map((dataTitle: any, dataIndex: number) => {
                                    return (
                                        <div key={dataIndex} className="p-[10px] relative">
                                            <div className="flex right-0 top-[1px]  absolute  cursor-pointer" onClick={() => removeDataTitle(headerIndex, dataIndex)}>
                                                <Img
                                                    src="/images/remove.svg"
                                                    alt="upload"
                                                    className="w-[35px] h-[35px] bg-white rounded-full p-2"
                                                />
                                            </div>
                                            <Input
                                                label={`Faq Data Title ${dataIndex + 1}`}
                                                placeholder="Data Title"
                                                value={dataTitle.title}
                                                onChange={(e) => setDataTitle(headerIndex, dataIndex, e.target.value)}
                                                className="rounded admin-input"
                                            />
                                        </div>
                                    );
                                })}
                            </div>
                        );
                    })}
                </div>
            </div>
        </PrivateLayout>
    );
};

export default FaqPage;
