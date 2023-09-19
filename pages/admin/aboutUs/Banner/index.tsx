import React, {useContext, useEffect, useState} from "react";
import {Input} from "../../../../utils/Input";
import {ImageOverlay} from "../../../../utils/Admin/ImageOverlay";
import {Button} from "../../../../utils/Button";
import {LoaderContext} from "../../../context/LoaderContext";
import PrivateLayout from "../../../../components/Layout/privateLayout";
import {AboutBannerInterface} from "../../../../types";

const BannerPage = () => {
    const {setIsLoading} = useContext(LoaderContext);
    const [params, setParams] = useState<AboutBannerInterface>({
        _id:"",
        Banner: {
            title: "",
            subtitle: "",
            backgroundImage: "",
        }
    });

    useEffect(() => {
        fetch("/api/aboutUs/GET/banner")
            .then((response) => response.json())
            .then((data) => {
                setParams({
                    ...params,
                    _id:data._id,
                    Banner: {
                        title: data.Banner.title,
                        subtitle: data.Banner.subtitle,
                        backgroundImage: data.Banner.backgroundImage,
                    }
                });
            })
            .catch((error) => {
                console.error("Error fetching banner data:", error);
            });
    }, []);


    const save = async () => {
        try {
            setIsLoading(true);
            const response = await fetch('/api/aboutUs/PUT/banner', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    _id: params._id,
                    Banner: params.Banner,
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

    return <PrivateLayout title="Zuca - About Banner">
        <div className="flex flex-col gap-[16px]">
            <div className="flex items-center gap-[16px]">
                <h3 className="flex-1 text-[21px] tracking-[1.2px] font-semibold text-[#101D2C]">
                    About Banner
                </h3>
                <Button
                    label="Save"
                    type="button"
                    className="px-[24px] py-[4px] rounded"
                    onClick={save}
                />
            </div>
            <div className="flex flex-col gap-[16px]">
                <div className="rounded border bg-white overflow-hidden md:h-[450px]">
                    <ImageOverlay
                        url={params.Banner.backgroundImage}
                        onUploadSuccess={(url) =>
                            setParams({
                                ...params,
                                Banner: {
                                    ...params.Banner,
                                    backgroundImage: url,
                                },
                            })
                        }
                        className="object-cover h-full"
                        wrapperHeightClass="h-full"
                    />
                </div>

                <div className="rounded border bg-white p-[10px]">
                    <div className="p-[10px]">
                        <Input
                            label="Title"
                            placeholder="Title"
                            value={params.Banner.title}
                            onChange={(e) =>
                                setParams({
                                    ...params,
                                    Banner: {
                                        ...params.Banner,
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
                            value={params.Banner.subtitle}
                            onChange={(e) =>
                                setParams({
                                    ...params,
                                    Banner: {
                                        ...params.Banner,
                                        subtitle: e.target.value,
                                    },
                                })
                            }
                            className="rounded admin-input"
                        />
                    </div>
                </div>
            </div>
        </div>
    </PrivateLayout>
}

export default BannerPage;