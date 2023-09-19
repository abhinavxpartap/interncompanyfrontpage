import React, {useContext, useEffect, useState} from "react";
import { Button } from "../../../../utils/Button";
import { LoaderContext } from "../../../../context/LoaderContext";
import { ImageOverlay } from "../../../../utils/Admin/ImageOverlay";
import { Input } from "../../../../utils/Input";
import PrivateLayout from "../../../../components/Layout/privateLayout";

interface AppState {
    _id: string;
    bannerData: {
        title: string;
        subtitle: string;
        tagButtonName: string;
        buttonName: string;
    };
    header:HeaderDataInterface[];
}


interface HeaderDataInterface {
    src: string;
    alt: string;
    icon: string;
    icontitle: string;
    iconsubtitle: string;
    [key: string]: string;
}

const ExpertTeamPage = () => {
    const { setIsLoading } = useContext(LoaderContext);

    const [params, setParams] = useState<AppState>({
        _id: "",
        bannerData: {
            title: "",
            subtitle: "",
            tagButtonName: "",
            buttonName: "",
        },
        header: [],
    });

    useEffect(() => {
        fetch("/api/landing/GET/ExpertTeam")
            .then((response) => response.json())
            .then((data) => {
                setParams({
                    ...params,
                    _id:data._id,
                    bannerData: {
                        title: data.bannerData.title,
                        subtitle: data.bannerData.subtitle,
                        tagButtonName: data.bannerData.tagButtonName,
                        buttonName: data.bannerData.buttonName,
                    },
                    header: data.header.map((headerItem:HeaderDataInterface) => {
                        return ({
                            src: headerItem.src,
                            alt: headerItem.alt,
                            icon: headerItem.icon,
                            icontitle: headerItem.icontitle,
                            iconsubtitle: headerItem.iconsubtitle,
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
                icon: "",
                icontitle: "",
                iconsubtitle: "",
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
            const response = await fetch('/api/landing/PUT/ExpertTeam', {
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



    return <PrivateLayout title="Zuca - Expert Team">
        <div className="flex flex-col gap-[16px]">
            <div className="flex items-center gap-[16px]">
                <h3 className="flex-1 text-[21px] tracking-[1.2px] font-semibold text-[#101D2C]">
                    Expert Team
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
                <div className="p-[10px]">
                    <Input
                        label="Upper Tag Name"
                        placeholder="Upper Tag Name"
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
            </div>
            <div className="grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 gap-[16px]">
                {
                    params.header.map((item: HeaderDataInterface, index: number) => {
                        return <div key={index} className="rounded border overflow-hidden bg-white">
                            <ImageOverlay
                                withOverlay
                                url={item.src}
                                id={`icon-${index}`}
                                className="h-[220px]"
                                remove={() => removeHeaderItem(index)}
                                onUploadSuccess={(url) => updateHeaderField(index, "src", url)}
                            />
                            <div className="p-[5px]">
                                <div className="p-[5px]">
                                    <ImageOverlay
                                        withOverlay
                                        url={item.icon}
                                        id={`icon-${index}`}
                                        className="h-[50px]"
                                        onUploadSuccess={(url) => updateHeaderField(index, "icon", url)}
                                    />
                                </div>
                                <div className="p-[5px]">
                                    <Input
                                        label="alt"
                                        placeholder="alt"
                                        value={item.alt}
                                        onChange={(e) => updateHeaderField(index, "alt", e.target.value)}
                                        className="rounded admin-input"
                                    />
                                </div>
                                <div className="p-[5px]">
                                    <Input
                                        label="Icon Title"
                                        placeholder="Icon Title"
                                        value={item.icontitle}
                                        onChange={e => updateHeaderField(index, "icontitle", e.target.value)}
                                        className="rounded admin-input"
                                    />
                                </div>
                                <div className="p-[5px]">
                                    <Input
                                        label="Icon Sub Title"
                                        placeholder="Label"
                                        value={item.iconsubtitle}
                                        onChange={e => updateHeaderField(index, "iconsubtitle", e.target.value)}
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

export default ExpertTeamPage;