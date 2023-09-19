import React, {useContext, useEffect, useState} from "react";
import { Button } from "../../../utils/Button";
import { LoaderContext } from "../../context/LoaderContext";
import { ImageOverlay } from "../../../utils/Admin/ImageOverlay";
import { Input, TextArea } from "../../../utils/Input";
import PrivateLayout from "../../../components/Layout/privateLayout";
import {SuccessStoryInterface} from "../../../types";

interface ParamsInterface {
    title: string;
    subtitle: string;
}
interface PageDataInterface {
    _id:string,
    bannerData: ParamsInterface,
    SuccessStory:SuccessStoryInterface[]
}
const OurSuccessStoryPage = () => {
    const { setIsLoading } = useContext(LoaderContext);
    const [params, setParams] = useState<PageDataInterface>({
        _id:"",
        bannerData:{
            title:"",
            subtitle:"",
        },
        SuccessStory:[]
    });

    useEffect(() => {
        fetch("/api/common/GET/successStory")
            .then((response) => response.json())
            .then((data) => {
                setParams({
                    ...params,
                    _id:data._id,
                    bannerData: {
                        title: data.bannerData.title,
                        subtitle: data.bannerData.subtitle,
                    },
                    SuccessStory: data.SuccessStory.map((headerItem:SuccessStoryInterface) => {
                        return ({
                            heading:headerItem.heading,
                            imgUrl:headerItem.imgUrl,
                            description:headerItem.description,
                            subtitle:headerItem.subtitle,
                            href:headerItem.href,
                            country:headerItem.country,
                        });
                    }),
                });
            })
            .catch((error) => {
                console.error("Error fetching banner data:", error);
            });
    }, []);

    const updateSuccessStory = (index: number, field: string, value: string) => {
        setParams((prevParams) => {
            const updatedHeader = [...prevParams.SuccessStory];
            updatedHeader[index][field] = value;
            return {
                ...prevParams,
                SuccessStory: updatedHeader,
            };
        });
    };


    const addSuccesStory = () => {
        setParams((prevState) => ({
            ...prevState,
            SuccessStory: [...prevState.SuccessStory, {
                heading:"",
                imgUrl:"",
                description:"",
                subtitle:"",
                href:"",
                country:"",
            }],
        }));
    };

    const removeSuccessStory = (indexToRemove:number) => {
        setParams((prevState) => ({
            ...prevState,
            SuccessStory: prevState.SuccessStory.filter((_, index) => index !== indexToRemove),
        }));
    };

    const save = async () => {
        try {
            setIsLoading(true);
            const response = await fetch('/api/common/PUT/successStory', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    _id: params._id,
                    bannerData: params.bannerData,
                    SuccessStory: params.SuccessStory,
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


    return <PrivateLayout title="Zuca - Our Success Story">
        <div className="flex flex-col gap-[16px]">
            <div className="flex items-center gap-[16px]">
                <h3 className="flex-1 text-[21px] tracking-[1.2px] font-semibold text-[#101D2C]">
                    Our Success Story
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
                    onClick={addSuccesStory}
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
                        label="subtitle"
                        placeholder="subtitle"
                        value={params.bannerData.subtitle}
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
            </div>
            <div className="grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 gap-[16px]">
                {
                    params.SuccessStory.map((item:SuccessStoryInterface, index: number) => {
                        return <div key={index} className="rounded border overflow-hidden bg-white">
                            <ImageOverlay
                                withOverlay
                                url={item.imgUrl}
                                id={`icon-${index}`}
                                className="h-[220px]"
                                remove={() => removeSuccessStory(index)}
                                onUploadSuccess={(url) => updateSuccessStory(index, "imgUrl", url)}
                            />
                            <div className="p-[5px]">
                                <div className="p-[5px]">
                                    <Input
                                        label="Heading"
                                        placeholder="Heading"
                                        value={item.heading}
                                        onChange={e => updateSuccessStory(index, "heading", e.target.value)}
                                        className="rounded admin-input"
                                    />
                                </div>
                                <div className="p-[5px]">
                                    <Input
                                        label="Subtitle"
                                        placeholder="subtitle"
                                        value={item.subtitle}
                                        onChange={e => updateSuccessStory(index, "subtitle", e.target.value)}
                                        className="rounded admin-input"
                                    />
                                </div>
                                <div className="p-[5px]">
                                    <Input
                                        label="Country"
                                        placeholder="Country"
                                        value={item.country}
                                        onChange={e => updateSuccessStory(index, "country", e.target.value)}
                                        className="rounded admin-input"
                                    />
                                </div>
                                <div className="p-[5px]">
                                    <Input
                                        label="Href"
                                        placeholder="href"
                                        value={item.href}
                                        onChange={e => updateSuccessStory(index, "href", e.target.value)}
                                        className="rounded admin-input"
                                    />
                                </div>
                                <div className="p-[5px]">
                                    <TextArea
                                        label="Description"
                                        placeholder="Label"
                                        value={item.description}
                                        onChange={e => updateSuccessStory(index, "description", e.target.value)}
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

export default OurSuccessStoryPage;