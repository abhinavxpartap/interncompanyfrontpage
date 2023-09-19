import React, {useContext, useEffect, useState} from "react";
import { Button } from "../../../../utils/Button";
import { Input } from "../../../../utils/Input";
import { LoaderContext } from "../../../context/LoaderContext";
import { ImageOverlay } from "../../../../utils/Admin/ImageOverlay";
import PrivateLayout from "../../../../components/Layout/privateLayout";
import {ImageListInterface,ImageListMainInterface} from "../../../../types";

const ImageListPage = () => {
    const { setIsLoading } = useContext(LoaderContext);

    const [params, setParams] = useState<ImageListMainInterface>({
        _id:"",
        ImageList:[]
    });

    useEffect(() => {
        fetch("/api/aboutUs/GET/ImageList")
            .then((response) => response.json())
            .then((data) => {
                setParams({
                    ...params,
                    _id:data._id,
                    ImageList: data.ImageList.map((headerItem:ImageListInterface) => {
                        return ({
                            img: headerItem.img,
                            title: headerItem.title,
                        });
                    }),
                });
            })
            .catch((error) => {
                console.error("Error fetching banner data:", error);
            });
    }, []);



    const updateImageList = (index: number, field: string, value: string) => {
        setParams((prevParams) => {
            const updatedHeader = [...prevParams.ImageList];
            updatedHeader[index][field] = value;
            return {
                ...prevParams,
                ImageList: updatedHeader,
            };
        });
    };

    const addImageList = () => {
        setParams((prevState) => ({
            ...prevState,
            ImageList: [...prevState.ImageList, {
                img:'',
                title:''
            }],
        }));
    };

    const removeHeaderItem = (indexToRemove:number) => {
        setParams((prevState) => ({
            ...prevState,
            ImageList: prevState.ImageList.filter((_, index) => index !== indexToRemove),
        }));
    };

    const save = async () => {
        try {
            setIsLoading(true);
            const response = await fetch('/api/aboutUs/PUT/ImageList', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    _id: params._id,
                    ImageList: params.ImageList,
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

    return <PrivateLayout title="Zuca - About Image List">
        <div className="flex flex-col gap-[16px]">
            <div className="flex items-center gap-[16px]">
                <h3 className="flex-1 text-[21px] tracking-[1.2px] font-semibold text-[#101D2C]">
                    About Image List
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
                    onClick={addImageList}
                />
            </div>
            <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-[16px]">
                {params.ImageList.map((item:ImageListInterface, index) => {
                        return <div key={index} className="rounded border overflow-hidden bg-white">
                            <ImageOverlay
                                withOverlay
                                url={item.img}
                                id={`image-${index}`}
                                onUploadSuccess={(url) => updateImageList(index, "img", url)}
                                className="h-[120px]"
                                remove={() => removeHeaderItem(index)}
                            />
                            <div className="p-[10px]">
                                <Input
                                    label="Title"
                                    placeholder="Title"
                                    value={item.title}
                                    onChange={e => updateImageList(index, "title", e.target.value)}
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

export default ImageListPage;