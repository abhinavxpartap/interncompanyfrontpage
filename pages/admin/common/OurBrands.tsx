import React, {useContext, useEffect, useState} from "react";
import { Button } from "../../../utils/Button";
import { Input } from "../../../utils/Input";
import { LoaderContext } from "../../../context/LoaderContext";
import { ImageOverlay } from "../../../utils/Admin/ImageOverlay";
import PrivateLayout from "../../../components/Layout/privateLayout";
import {BrandData} from "../../../types";

interface AppState {
    _id: string;
    header:HeaderDataInterface[];
}


interface HeaderDataInterface {
    src: string;
    alt: string;
    [key: string]: string;
}

const Companies = () => {
    const { setIsLoading } = useContext(LoaderContext);

    const [params, setParams] = useState<AppState>({
        _id: "",
        header: [],
    });

    useEffect(() => {
        fetch("/api/common/GET/ourBrands")
            .then((response) => response.json())
            .then((data) => {
                setParams({
                    ...params,
                    _id:data._id,
                    header: data.header.map((headerItem:HeaderDataInterface) => {
                        return ({
                            src: headerItem.src,
                            alt: headerItem.alt,
                        });
                    }),
                });
            })
            .catch((error) => {
                console.error("Error fetching banner data:", error);
            });
    }, []);

    const updateHeaderField = (index: number, field: string, value: string) => {
        setParams((prevParams) => {
            const updatedHeader = [...prevParams.header];
            updatedHeader[index][field] = value;
            return {
                ...prevParams,
                header: updatedHeader,
            };
        });
    };


    const addHeaderItem = () => {
        setParams((prevState) => ({
            ...prevState,
            header: [...prevState.header, {
                src: "",
                alt: "",
            }],
        }));
    };

    const removeHeaderItem = (indexToRemove:number) => {
        setParams((prevState) => ({
            ...prevState,
            header: prevState.header.filter((_, index) => index !== indexToRemove),
        }));
    };


    const save = async () => {
        try {
            setIsLoading(true);
            const response = await fetch('/api/common/PUT/ourBrands', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    _id: params._id,
                    header: params.header,
                }),
            });

            if (response.ok) {
                const data = await response.json();
                if (data.message) {
                    console.log('Update successful:', data.message);
                } else {
                    console.error('Update operation failed');
                }
            } else {
                // Handle non-200 status codes
                console.error('Server error while updating data');
            }
            setIsLoading(false);
        } catch (error) {
            console.error('Error updating data:', error);
        }
    };

    return <PrivateLayout title="Zuca - Our Brands">
        <div className="flex flex-col gap-[16px]">
            <div className="flex items-center gap-[16px]">
                <h3 className="flex-1 text-[21px] tracking-[1.2px] font-semibold text-[#101D2C]">
                    Our Brands
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
                    onClick={addHeaderItem}
                />
            </div>
            <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-[16px]">
                {
                    params.header.map((item:BrandData, index) => {
                        return <div key={index} className="rounded border overflow-hidden bg-white">
                            <ImageOverlay
                                withOverlay
                                url={item.src}
                                id={`image-${index}`}
                                onUploadSuccess={(url) => updateHeaderField(index, "src", url)}
                                className="h-[120px]"
                                remove={() => removeHeaderItem(index)}
                            />
                            <div className="p-[10px]">
                                <Input
                                    label="Alt Text"
                                    placeholder="Alt Text"
                                    value={item.alt}
                                    onChange={e => updateHeaderField(index, "alt", e.target.value)}
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

export default Companies;