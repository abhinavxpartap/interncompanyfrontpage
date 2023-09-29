import React, { FC, useContext, useState } from "react";
import { Button } from "../../../utils/Button";
import { Input } from "../../../utils/Input";
import toast from "react-hot-toast";
import { LoaderContext } from "../../../context/LoaderContext";
import PrivateLayout from "../../../components/Layout/privateLayout";
import { GetServerSideProps } from "next";
import { Img } from "../../../utils/Img";

interface CloneConfigInterface {
    data: any;
}
const CloneConfig: FC<CloneConfigInterface> = ({ data }) => {
    const {setIsLoading} = useContext(LoaderContext);
    const [pages, setPages] = useState<any[]>(data);

    const setParams = (index: number, key: string, value: string): void => {
        const updatedItems = [...pages];
        updatedItems[index] = {
            ...updatedItems[index],
            [key]: value
        };
        setPages(updatedItems);
    }
    const addPage = async () => {
        setIsLoading(true);
        try {
            // Fetch the data for the new page from your API endpoint
            const response = await fetch('/api/industry/POST', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({pages}), // Send the current pages data
            });

            if (response.ok) {
                window.location.reload();
            } else {
                console.error('Failed to add a new page');
            }
            setIsLoading(false);
        } catch (error) {
            console.error('Error adding page:', error);
        }
    };
    const deleteService = async (serviceId: string) => {
        setIsLoading(true);
        try {
            const response = await fetch(`/api/industry/DELETE?serviceId=${serviceId}`, {
                method: 'DELETE',
            });
            if (response.status === 200) {
                window.location.reload();
                toast.success("Service deleted successfully!");
            } else {
                const data = await response.json();
                toast.error(`Error deleting service: ${data.error}`);
            }
            setIsLoading(false);
        } catch (error) {
            console.error("Error deleting service:", error);
        }
    };

    const save = async () => {
        setIsLoading(true);
        const response = await fetch('/api/industry/PUT/services', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({pages}),
        });
        const data = await response.json();

        if (data.success) {
            toast.success("Changes saved successfully!");
        } else {
            toast.error(`Error saving changes: ${data.message}`);
        }
        setIsLoading(false);
    };

    return <PrivateLayout title="Zuca - Clone">
        <div className="flex flex-col gap-[16px]">
            <div className="flex items-center gap-[16px]">
                <h3 className="flex-1 text-[21px] tracking-[1.2px] font-semibold text-[#101D2C]">
                    Clone Dashboard
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
                    onClick={addPage}
                />
            </div>
            <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-[16px]">
                {pages.map((item: any, index) => {
                    return <div key={index} className="rounded border overflow-hidden bg-white">
                        <div className="flex relative">
                            <div className="p-[10px] flex-1">
                                <Input
                                    label="Page Name"
                                    placeholder="Page Name"
                                    value={item.name}
                                    onChange={e => setParams(index, "name", e.target.value)}
                                    className="rounded admin-input"
                                />
                            </div>
                            <div className="cursor-pointer absolute top-0 right-0"
                                 onClick={() => deleteService(item._id)}>
                                <Img
                                    src="/images/remove.svg"
                                    alt="upload"
                                    className="w-[35px] h-[35px] bg-white rounded-full p-2"
                                />
                            </div>
                        </div>
                        <div className="p-[10px]">
                            <Input
                                label="Page Title"
                                placeholder="Page Title"
                                value={item.page_title}
                                onChange={e => setParams(index, "page_title", e.target.value)}
                                className="rounded admin-input"
                            />
                        </div>
                        <div className="p-[10px]">
                            <Input
                                label="Meta Title"
                                placeholder="Meta Title"
                                value={item.meta_title}
                                onChange={e => setParams(index, "meta_title", e.target.value)}
                                className="rounded admin-input"
                            />
                        </div>
                        <div className="p-[10px]">
                            <Input
                                label="Meta Description"
                                placeholder="Meta Description"
                                value={item.meta_description}
                                onChange={e => setParams(index, "meta_description", e.target.value)}
                                className="rounded admin-input"
                            />
                        </div>
                        <div className="p-[10px]">
                            <Input
                                label="Meta Keywords"
                                placeholder="Meta Keywords"
                                value={item.meta_keywords}
                                onChange={e => setParams(index, "meta_keywords", e.target.value)}
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
export default CloneConfig;

export const getServerSideProps: GetServerSideProps = async (context) => {
    const response: any = await fetch(`http://localhost:3000/api/industry/GET/indsutries`)
        .then((response) => response.json())
    return {
        props: {
            data: response || null
        }
    }
}