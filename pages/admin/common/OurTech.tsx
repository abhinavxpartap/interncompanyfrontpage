import React, {useContext, useEffect, useState} from "react";
import { Button } from "../../../utils/Button";
import { LoaderContext } from "../../context/LoaderContext";
import { ImageOverlay } from "../../../utils/Admin/ImageOverlay";
import { Input } from "../../../utils/Input";
import PrivateLayout from "../../../components/Layout/privateLayout";

interface paramsInterface {
    title:string;
    subtitle1:string;
    subtitle2:string;
    buttonName:string;
    buttonLink:string;
}

interface HeaderDataInterface {
    image:string,
    alt:string,
    [key:string]:string
}

interface pageDataInterface {
    _id:string,
    bannerData:paramsInterface,
    header:HeaderDataInterface[];
}
const OurTech = () => {
    const { setIsLoading } = useContext(LoaderContext);

    const [params, setParams] = useState<pageDataInterface>({
        _id:"",
        bannerData:{
            title:"",
            subtitle1:"",
            subtitle2:"",
            buttonName:"",
            buttonLink:"",
        },
        header:[]
    });

    useEffect(() => {
        fetch("/api/common/GET/tech")
            .then((response) => response.json())
            .then((data) => {
                setParams({
                    ...params,
                    _id:data._id,
                    bannerData: {
                        title:data.bannerData.title,
                        subtitle1:data.bannerData.subtitle1,
                        subtitle2:data.bannerData.subtitle2,
                        buttonName:data.bannerData.buttonName,
                        buttonLink:data.bannerData.buttonLink
                    },
                    header: data.header.map((headerItem:HeaderDataInterface) => {
                        return ({
                            image:headerItem.image,
                            alt:headerItem.alt,
                        });
                    }),
                });
            })
            .catch((error) => {
                console.error("Error fetching banner data:", error);
            });
    }, []);

    const updateTech = (index: number, field: string, value: string) => {
        setParams((prevParams) => {
            const updatedHeader = [...prevParams.header];
            updatedHeader[index][field] = value;
            return {
                ...prevParams,
                header: updatedHeader,
            };
        });
    };


    const addTech = () => {
        setParams((prevState) => ({
            ...prevState,
            header: [...prevState.header, {
                image:"",
                alt:"",
            }],
        }));
    };

    const removeTech = (indexToRemove:number) => {
        setParams((prevState) => ({
            ...prevState,
            header: prevState.header.filter((_, index) => index !== indexToRemove),
        }));
    };

    const save = async () => {
        try {
            setIsLoading(true);
            const response = await fetch('/api/common/PUT/tech', {
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


    return <PrivateLayout title="Zuca - Our Tech">
        <div className="flex flex-col gap-[16px]">
            <div className="flex items-center gap-[16px]">
                <h3 className="flex-1 text-[21px] tracking-[1.2px] font-semibold text-[#101D2C]">
                    Our Tech
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
                    onClick={addTech}
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
                        label="Upper Sub Title"
                        placeholder="Upper Sub Title"
                        value={params.bannerData.subtitle1}
                        onChange={(e) =>
                            setParams({
                                ...params,
                                bannerData: {
                                    ...params.bannerData,
                                    subtitle1: e.target.value,
                                },
                            })
                        }
                        className="rounded admin-input"
                    />
                </div>
                <div className="p-[10px]">
                    <Input
                        label="Down Sub Title"
                        placeholder="Down Sub Title"
                        value={params.bannerData.subtitle2}
                        onChange={(e) =>
                            setParams({
                                ...params,
                                bannerData: {
                                    ...params.bannerData,
                                    subtitle2: e.target.value,
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
                        value={params.bannerData.buttonName}
                        onChange={(e) =>
                            setParams({
                                ...params,
                                bannerData: {
                                    ...params.bannerData,
                                    buttonName: e.target.value,
                                },
                            })
                        }
                        className="rounded admin-input"
                    />
                </div>
                <div className="p-[10px]">
                    <Input
                        label="Button Link"
                        placeholder="Button Link"
                        value={params.bannerData.buttonLink}
                        onChange={(e) =>
                            setParams({
                                ...params,
                                bannerData: {
                                    ...params.bannerData,
                                    buttonLink: e.target.value,
                                },
                            })
                        }
                        className="rounded admin-input"
                    />
                </div>
            </div>
            <div className="grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 gap-[16px]">
                {
                    params.header.map((item: HeaderDataInterface, index: number) => {
                        return <div key={index} className="rounded border overflow-hidden bg-white">
                            <ImageOverlay
                                withOverlay
                                url={item.image}
                                id={`icon-${index}`}
                                className="h-[120px]"
                                remove={() => removeTech(index)}
                                onUploadSuccess={(url) => updateTech(index, "image", url)}
                            />
                            <div className="p-[5px]">
                                <div className="p-[5px]">
                                    <Input
                                        label="Name"
                                        placeholder="Name"
                                        value={item.alt}
                                        onChange={e => updateTech(index, "alt", e.target.value)}
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

export default OurTech;