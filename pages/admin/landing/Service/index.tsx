import React, {useContext, useEffect, useState} from "react";
import { Button } from "../../../../utils/Button";
import {Input, TextArea} from "../../../../utils/Input";
import { LoaderContext } from "../../../../context/LoaderContext";
import { ImageOverlay } from "../../../../utils/Admin/ImageOverlay";
import PrivateLayout from "../../../../components/Layout/privateLayout";

interface ServiceInterface {
    imageSrc:string;
    imageAlt:string;
    title: string;
    description: string;
    [key: string]: string;
}

interface paramsInterface {
    title:string;
    subtitle:string;
    tagButtonName:string;
}

interface pageDataInterface {
    _id:string
    bannerData:paramsInterface,
    header:ServiceInterface[];
}

const Service = () => {
    const { setIsLoading } = useContext(LoaderContext);

    const [params, setParams] = useState<pageDataInterface>({
        _id:"",
        bannerData:{
            title:"",
            subtitle:"",
            tagButtonName:""
        },
        header: [],
    });


    useEffect(() => {
        fetch("/api/landing/GET/services")
            .then((response) => response.json())
            .then((data) => {
                setParams({
                    ...params,
                    _id:data._id,
                    bannerData: {
                        title: data.bannerData.title,
                        subtitle: data.bannerData.subtitle,
                        tagButtonName: data.bannerData.tagButtonName,
                    },
                    header: data.header.map((headerItem:ServiceInterface) => {
                        return ({
                            imageSrc:headerItem.imageSrc,
                            imageAlt:headerItem.imageAlt,
                            title: headerItem.title,
                            description: headerItem.description,
                        });
                    }),
                });
            })
            .catch((error) => {
                console.error("Error fetching banner data:", error);
            });
    }, []);


    const addHeaderItem = () => {
        setParams((prevState) => ({
            ...prevState,
            header: [...prevState.header, {
                imageSrc:'',
                imageAlt:'',
                title: '',
                description: '',
            }],
        }));
    };

    const removeHeaderItem = (indexToRemove:number) => {
        setParams((prevState) => ({
            ...prevState,
            header: prevState.header.filter((_, index) => index !== indexToRemove),
        }));
    };

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

    const save = async () => {
        try {
            setIsLoading(true);
            const response = await fetch('/api/landing/PUT/services', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    _id: params._id,
                    bannerData: params.bannerData,
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

    return <PrivateLayout title="Zuca - Landing Services">
        <div className="flex flex-col gap-[16px]">
            <div className="flex items-center gap-[16px]">
                <h3 className="flex-1 text-[21px] tracking-[1.2px] font-semibold text-[#101D2C]">
                    Zuca Services
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
            <div className="rounded border bg-white mt-[10px] p-[10px]">
                <div className="p-[10px]">
                    <Input
                        label="Title"
                        placeholder="Title"
                        value={params.bannerData.title}
                        onChange={(e) =>
                            setParams({
                                ...params,
                                bannerData: {
                                    ...params.bannerData,
                                    title: e.target.value,
                                },
                            })
                        }
                        className="rounded admin-input"
                    />
                </div>
                <div className="p-[10px]">
                    <Input
                        label="Sub Title"
                        placeholder="Sub Title"
                        value={params.bannerData.title}
                        onChange={(e) =>
                            setParams({
                                ...params,
                                bannerData: {
                                    ...params.bannerData,
                                    subtitle: e.target.value,
                                },
                            })
                        }
                        className="rounded admin-input"
                    />
                </div>
                <div className="p-[10px]">
                    <Input
                        label="Tag Button Name"
                        placeholder="Tag Button Name"
                        value={params.bannerData.tagButtonName}
                        onChange={(e) =>
                            setParams({
                                ...params,
                                bannerData: {
                                    ...params.bannerData,
                                    tagButtonName: e.target.value,
                                },
                            })
                        }
                        className="rounded admin-input"
                    />
                </div>
            </div>
            <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-[16px]">
                {params.header.map((item:ServiceInterface, index) => {
                        return <div key={index} className="rounded border overflow-hidden bg-white">
                            <ImageOverlay
                                withOverlay
                                url={item.imageSrc}
                                id={`image-${index}`}
                                onUploadSuccess={(url) => updateHeaderField(index, "imageSrc", url)}
                                className="h-[120px]"
                                remove={() => removeHeaderItem(index)}
                            />
                            <div className="p-[10px]">
                                <Input
                                    label="Alt Text"
                                    placeholder="Alt Text"
                                    value={item.imageAlt}
                                    onChange={e => updateHeaderField(index, "imageAlt", e.target.value)}
                                    className="rounded admin-input"
                                />
                            </div>
                            <div className="p-[10px]">
                                <Input
                                    label="Title"
                                    placeholder="Title"
                                    value={item.title}
                                    onChange={e => updateHeaderField(index, "title", e.target.value)}
                                    className="rounded admin-input"
                                />
                            </div>
                            <div className="p-[10px]">
                                <TextArea
                                    label="Description"
                                    placeholder="Description"
                                    value={item.description}
                                    onChange={e => updateHeaderField(index, "description", e.target.value)}
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

export default Service;