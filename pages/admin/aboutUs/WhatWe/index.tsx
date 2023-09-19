import React, {useContext, useEffect, useState} from "react";
import {Input} from "../../../../utils/Input";
import pageData from "../../../../data/aboutUs.json";
import {Button} from "../../../../utils/Button";
import toast from "react-hot-toast";
import {LoaderContext} from "../../../context/LoaderContext";
import PrivateLayout from "../../../../components/Layout/privateLayout";
import { WhatWeInterface} from "../../../../types";

const WhatWePage = () => {
    const {setIsLoading} = useContext(LoaderContext);
    const [params, setParams] = useState<WhatWeInterface>({
        _id:"",
        WhatWe: {
            title1: "",
            subtitle1: "",
            title2: "",
            subtitle2: "",
        }
    });

    useEffect(() => {
        fetch("/api/aboutUs/GET/WhatWe")
            .then((response) => response.json())
            .then((data) => {
                setParams({
                    ...params,
                    _id:data._id,
                    WhatWe: {
                        title1: data.WhatWe.title1,
                        subtitle1: data.WhatWe.subtitle1,
                        title2: data.WhatWe.title2,
                        subtitle2: data.WhatWe.subtitle2,
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
            const response = await fetch('/api/aboutUs/PUT/WhatWe', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    _id: params._id,
                    WhatWe: params.WhatWe,
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

    return <PrivateLayout title="Zuca - About What We">
        <div className="flex flex-col gap-[16px]">
            <div className="flex items-center gap-[16px]">
                <h3 className="flex-1 text-[21px] tracking-[1.2px] font-semibold text-[#101D2C]">
                    About What We
                </h3>
                <Button
                    label="Save"
                    type="button"
                    className="px-[24px] py-[4px] rounded"
                    onClick={save}
                />
            </div>
            <div className="flex flex-col gap-[16px]">
                <div className="rounded border bg-white p-[10px]">
                    <div className="p-[10px]">
                        <Input
                            label="Title 1"
                            placeholder="Title 1"
                            value={params.WhatWe.title1}
                            onChange={(e) =>
                                setParams({
                                    ...params,
                                    WhatWe: {
                                        ...params.WhatWe,
                                        title1: e.target.value,
                                    },
                                })
                            }
                            className="rounded admin-input"
                        />
                    </div>
                    <div className="p-[10px]">
                        <Input
                            label="Sub Title 1"
                            placeholder="Sub Title 1"
                            value={params.WhatWe.subtitle1}
                            onChange={(e) =>
                                setParams({
                                    ...params,
                                    WhatWe: {
                                        ...params.WhatWe,
                                        subtitle1: e.target.value,
                                    },
                                })
                            }
                            className="rounded admin-input"
                        />
                    </div>
                    <div className="p-[10px]">
                        <Input
                            label="Title 2"
                            placeholder="Title 2"
                            value={params.WhatWe.title2}
                            onChange={(e) =>
                                setParams({
                                    ...params,
                                    WhatWe: {
                                        ...params.WhatWe,
                                        title2: e.target.value,
                                    },
                                })
                            }
                            className="rounded admin-input"
                        />
                    </div>
                    <div className="p-[10px]">
                        <Input
                            label="Sub Title 2"
                            placeholder="Sub Title 2"
                            value={params.WhatWe.subtitle2}
                            onChange={(e) =>
                                setParams({
                                    ...params,
                                    WhatWe: {
                                        ...params.WhatWe,
                                        subtitle2: e.target.value,
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

export default WhatWePage;