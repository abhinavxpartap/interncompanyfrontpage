import React, {useContext, useEffect, useState} from "react";
import {Input} from "../../../../utils/Input";
import {ImageOverlay} from "../../../../utils/Admin/ImageOverlay";
import {Button} from "../../../../utils/Button";
import {LoaderContext} from "../../../../context/LoaderContext";
import PrivateLayout from "../../../../components/Layout/privateLayout";
import {AboutLetWorkTogether} from "../../../../types";

const BannerPage = () => {
    const {setIsLoading} = useContext(LoaderContext);
    const [params, setParams] = useState<AboutLetWorkTogether>({
        _id:"",
        Lets: {
            title: "",
            subtitle: "",
            backgroundImage: "",
            buttonName:""
        }
    });

    useEffect(() => {
        fetch("/api/aboutUs/GET/LetWorkTogether")
            .then((response) => response.json())
            .then((data) => {
                setParams({
                    ...params,
                    _id:data._id,
                    Lets: {
                        title: data.Lets.title,
                        subtitle: data.Lets.subtitle,
                        backgroundImage: data.Lets.backgroundImage,
                        buttonName:data.Lets.buttonName
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
            const response = await fetch('/api/aboutUs/PUT/LetWorkTogether', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    _id: params._id,
                    Lets: params.Lets,
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
    return <PrivateLayout title="Zuca - About Let Work Together">
        <div className="flex flex-col gap-[16px]">
            <div className="flex items-center gap-[16px]">
                <h3 className="flex-1 text-[21px] tracking-[1.2px] font-semibold text-[#101D2C]">
                    About Let Work Together
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
                        url={params.Lets.backgroundImage}
                        onUploadSuccess={(url) =>
                            setParams({
                                ...params,
                                Lets: {
                                    ...params.Lets,
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
                            value={params.Lets.title}
                            onChange={(e) =>
                                setParams({
                                    ...params,
                                    Lets: {
                                        ...params.Lets,
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
                            value={params.Lets.subtitle}
                            onChange={(e) =>
                                setParams({
                                    ...params,
                                    Lets: {
                                        ...params.Lets,
                                        subtitle: e.target.value,
                                    },
                                })
                            }
                            className="rounded admin-input"
                        />
                    </div>
                    <div className="p-[10px]">
                        <Input
                            label="Button Name"
                            placeholder="Button Name"
                            value={params.Lets.buttonName}
                            onChange={(e) =>
                                setParams({
                                    ...params,
                                    Lets: {
                                        ...params.Lets,
                                        buttonName: e.target.value,
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