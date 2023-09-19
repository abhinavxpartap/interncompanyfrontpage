import React, {useContext, useEffect, useState} from "react";
import { Button } from "../../../utils/Button";
import { LoaderContext } from "../../../context/LoaderContext";
import { ImageOverlay } from "../../../utils/Admin/ImageOverlay";
import { Input } from "../../../utils/Input";
import PrivateLayout from "../../../components/Layout/privateLayout";

interface paramsInterface {
    title:string;
    subtitle:string;
}

interface HeaderDataInterface {
    name: string,
    role: string,
    imageSrc: string,
    [key:string]:string
}

interface pageDataInterface {
    _id:string,
    bannerData:paramsInterface,
    header:HeaderDataInterface[];
}
const CaseStudyPage = () => {
    const { setIsLoading } = useContext(LoaderContext);
    const [params, setParams] = useState<pageDataInterface>({
        _id:"",
        bannerData:{
            title:"",
            subtitle:"",
        },
        header:[]
    });

    useEffect(() => {
        fetch("/api/common/GET/team")
            .then((response) => response.json())
            .then((data) => {
                setParams({
                    ...params,
                    _id:data._id,
                    bannerData: {
                        title:data.bannerData.title,
                        subtitle:data.bannerData.subtitle,
                    },
                    header: data.header.map((headerItem:HeaderDataInterface) => {
                        return ({
                            name: headerItem.name,
                            role: headerItem.role,
                            imageSrc: headerItem.imageSrc,
                        });
                    }),
                });
            })
            .catch((error) => {
                console.error("Error fetching banner data:", error);
            });
    }, []);

    const updateTeam = (index: number, field: string, value: string) => {
        setParams((prevParams) => {
            const updatedHeader = [...prevParams.header];
            updatedHeader[index][field] = value;
            return {
                ...prevParams,
                header: updatedHeader,
            };
        });
    };


    const addTeam = () => {
        setParams((prevState) => ({
            ...prevState,
            header: [...prevState.header, {
                name: "",
                role: "",
                imageSrc: ""
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
            const response = await fetch('/api/common/PUT/team', {
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


    return <PrivateLayout title="Zuca - Our Team">
        <div className="flex flex-col gap-[16px]">
            <div className="flex items-center gap-[16px]">
                <h3 className="flex-1 text-[21px] tracking-[1.2px] font-semibold text-[#101D2C]">
                    Our Team
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
                    onClick={addTeam}
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
                    params.header.map((item: HeaderDataInterface, index: number) => {
                        return <div key={index} className="rounded border overflow-hidden bg-white">
                            <ImageOverlay
                                withOverlay
                                url={item.imageSrc}
                                id={`icon-${index}`}
                                className="h-[220px]"
                                remove={() => removeHeaderItem(index)}
                                onUploadSuccess={(url) => updateTeam(index, "imageSrc", url)}
                            />
                            <div className="p-[5px]">
                                <div className="p-[5px]">
                                    <Input
                                        label="Name"
                                        placeholder="Name"
                                        value={item.name}
                                        onChange={e => updateTeam(index, "name", e.target.value)}
                                        className="rounded admin-input"
                                    />
                                </div>
                                <div className="p-[5px]">
                                    <Input
                                        label="Role"
                                        placeholder="Role"
                                        value={item.role}
                                        onChange={e => updateTeam(index, "role", e.target.value)}
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

export default CaseStudyPage;