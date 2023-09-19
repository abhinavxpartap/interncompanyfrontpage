import React, {useContext, useEffect, useState} from "react";
import {Input} from "../../../../utils/Input";
import pageData from "../../../../data/productOverview.json";
import {ImageOverlay} from "../../../../utils/Admin/ImageOverlay";
import {Button} from "../../../../utils/Button";
import toast from "react-hot-toast";
import {LoaderContext} from "../../../context/LoaderContext";
import PrivateLayout from "../../../../components/Layout/privateLayout";
import {ProductOverviewInterface} from "../../../../types";

const ProductPage = () => {
    const {setIsLoading} = useContext(LoaderContext);
    const [params, setParams] = useState<ProductOverviewInterface>({
        _id: "",
        Data: {
            title: "",
            backgroundImage: "",
            Q1: "",
            Q2: "",
            Q3: "",
            A1: "",
            A2: "",
            A3: "",
            leftImage: "",
            productCount: "",
            productText: "",
            softwareText: "",
            webText: "",
            softwareDevelopedCount: "",
            webDesignCount: "",
        }
    });


    useEffect(() => {
        fetch("/api/landing/GET/productOverview")
            .then((response) => response.json())
            .then((data) => {
                setParams({
                    ...params,
                    _id: data._id,
                    Data: {
                        title: data.Data.title,
                        backgroundImage: data.Data.backgroundImage,
                        Q1: data.Data.Q1,
                        Q2: data.Data.Q2,
                        Q3: data.Data.Q3,
                        A1: data.Data.A1,
                        A2: data.Data.A2,
                        A3: data.Data.A3,
                        leftImage: data.Data.leftImage,
                        productCount: data.Data.productCount,
                        productText: data.Data.productText,
                        softwareText: data.Data.softwareText,
                        webText: data.Data.webText,
                        softwareDevelopedCount: data.Data.softwareDevelopedCount,
                        webDesignCount: data.Data.webDesignCount,
                    },
                });
                console.log(data);
            })
            .catch((error) => {
                console.error("Error fetching banner data:", error);
            });
    }, []);



    const save = async () => {
        try {
            setIsLoading(true);
            const response = await fetch('/api/landing/PUT/productOverveiw', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    _id: params._id,
                    Data: params.Data,
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


    return <PrivateLayout title="Zuca - Product Overview">
        <div className="flex flex-col gap-[16px] w-[100%]">
            <div className="flex items-center gap-[16px]">
                <h3 className="flex-1 text-[21px] tracking-[1.2px] font-semibold text-[#101D2C]">
                    Landing Product Overview
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
                        url={params.Data.backgroundImage}
                        onUploadSuccess={(url) =>
                            setParams({
                                ...params,
                                Data: {
                                    ...params.Data,
                                    backgroundImage: url,
                                },
                            })
                        }
                        className="object-cover h-full"
                        wrapperHeightClass="h-full"
                    />
                </div>

                <div className="rounded border w-[100%] flex flex-col bg-white p-[10px]">
                    <div>
                        <ImageOverlay
                            url={params.Data.leftImage}
                            onUploadSuccess={(url) =>
                                setParams({
                                    ...params,
                                    Data: {
                                        ...params.Data,
                                        leftImage: url,
                                    },
                                })
                            }
                            className="object-contain h-[400px] bg-slate-500 rounded-md"
                            wrapperHeightClass="h-full"
                        />
                    </div>
                    <div>
                        <div className="px-[10px] py-[4px]">
                            <Input
                                label="Title"
                                placeholder="Title"
                                value={params.Data.title}
                                onChange={(e) =>
                                    setParams({
                                        ...params,
                                        Data: {
                                            ...params.Data,
                                            title: e.target.value,
                                        },
                                    })
                                }
                                className="rounded admin-input"
                            />
                        </div>
                        <div className="grid grid-cols-3 gap-[10px] px-[10px] py-[4px] w-[100%]">
                            <div className="flex flex-col gap-[5px]">
                                <Input
                                    label="Question 1"
                                    placeholder="Question 1"
                                    value={params.Data.Q1}
                                    onChange={(e) =>
                                        setParams({
                                            ...params,
                                            Data: {
                                                ...params.Data,
                                                Q1: e.target.value,
                                            },
                                        })
                                    }
                                    className="rounded admin-input"
                                />
                                <Input
                                    label="Answer 1"
                                    placeholder="Answer 1"
                                    value={params.Data.A1}
                                    onChange={(e) =>
                                        setParams({
                                            ...params,
                                            Data: {
                                                ...params.Data,
                                                A1: e.target.value,
                                            },
                                        })
                                    }
                                    className="rounded admin-input"
                                />
                            </div>
                            <div className="flex flex-col gap-[5px]">
                                <Input
                                    label="Question 2"
                                    placeholder="Question 2"
                                    value={params.Data.Q2}
                                    onChange={(e) =>
                                        setParams({
                                            ...params,
                                            Data: {
                                                ...params.Data,
                                                Q2: e.target.value,
                                            },
                                        })
                                    }
                                    className="rounded admin-input"
                                />
                                <Input
                                    label="Answer 2"
                                    placeholder="Answer 2"
                                    value={params.Data.A2}
                                    onChange={(e) =>
                                        setParams({
                                            ...params,
                                            Data: {
                                                ...params.Data,
                                                A2: e.target.value,
                                            },
                                        })
                                    }
                                    className="rounded admin-input"
                                />
                            </div>
                            <div className="flex flex-col gap-[5px]">
                                <Input
                                    label="Question 3"
                                    placeholder="Question 3"
                                    value={params.Data.Q3}
                                    onChange={(e) =>
                                        setParams({
                                            ...params,
                                            Data: {
                                                ...params.Data,
                                                Q3: e.target.value,
                                            },
                                        })
                                    }
                                    className="rounded admin-input"
                                />
                                <Input
                                    label="Answer 3"
                                    placeholder="Answer 3"
                                    value={params.Data.A3}
                                    onChange={(e) =>
                                        setParams({
                                            ...params,
                                            Data: {
                                                ...params.Data,
                                                A3: e.target.value,
                                            },
                                        })
                                    }
                                    className="rounded admin-input"
                                />
                            </div>
                        </div>
                        <div className="grid grid-cols-3 gap-[10px] px-[10px] py-[4px] w-[100%]">
                            <div className="flex flex-col gap-[5px]">
                                <Input
                                    label="Product Counts"
                                    placeholder="Product Counts"
                                    value={params.Data.productCount}
                                    onChange={(e) =>
                                        setParams({
                                            ...params,
                                            Data: {
                                                ...params.Data,
                                                productCount: e.target.value,
                                            },
                                        })
                                    }
                                    className="rounded admin-input"
                                />
                                <Input
                                    label="Product Text"
                                    placeholder="Product Text"
                                    value={params.Data.productText}
                                    onChange={(e) =>
                                        setParams({
                                            ...params,
                                            Data: {
                                                ...params.Data,
                                                productText: e.target.value,
                                            },
                                        })
                                    }
                                    className="rounded admin-input"
                                />
                            </div>
                            <div className="flex flex-col gap-[5px]">
                                <Input
                                    label="Software Developed Counts"
                                    placeholder="Software Developed Counts"
                                    value={params.Data.softwareDevelopedCount}
                                    onChange={(e) =>
                                        setParams({
                                            ...params,
                                            Data: {
                                                ...params.Data,
                                                softwareDevelopedCount: e.target.value,
                                            },
                                        })
                                    }
                                    className="rounded admin-input"
                                />
                                <Input
                                    label="Software Developed Text"
                                    placeholder="Software Developed Text"
                                    value={params.Data.softwareText}
                                    onChange={(e) =>
                                        setParams({
                                            ...params,
                                            Data: {
                                                ...params.Data,
                                                softwareText: e.target.value,
                                            },
                                        })
                                    }
                                    className="rounded admin-input"
                                />
                            </div>
                            <div className="flex flex-col gap-[5px]">
                                <Input
                                    label="Web Design Counts"
                                    placeholder="Web Design Counts"
                                    value={params.Data.webDesignCount}
                                    onChange={(e) =>
                                        setParams({
                                            ...params,
                                            Data: {
                                                ...params.Data,
                                                webDesignCount: e.target.value,
                                            },
                                        })
                                    }
                                    className="rounded admin-input"
                                />

                                <Input
                                    label="Web Design Text"
                                    placeholder="Web Design Text"
                                    value={params.Data.webText}
                                    onChange={(e) =>
                                        setParams({
                                            ...params,
                                            Data: {
                                                ...params.Data,
                                                webText: e.target.value,
                                            },
                                        })
                                    }
                                    className="rounded admin-input"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </PrivateLayout>
}

export default ProductPage;