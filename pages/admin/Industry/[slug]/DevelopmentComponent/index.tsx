import React, {FC, useContext, useState} from "react";
import { Button } from "../../../../../utils/Button";
import { LoaderContext } from "../../../../../context/LoaderContext";
import { ImageOverlay } from "../../../../../utils/Admin/ImageOverlay";
import { Input } from "../../../../../utils/Input";
import PrivateLayout from "../../../../../components/Layout/privateLayout";
import {GetServerSideProps} from "next";

interface Header{
    title:string,
    image:string,
    [key:string]:string
}

interface DevelopmentBanner{
    title:string,
    subtitle:string,
    centerContent:string,
    buttonName:string,
    buttonLink:string
}

interface PageInterface{
    _id:string,
    DevelopmentBanner:DevelopmentBanner,
    DevelopmentHeaderLeft:Header[],
    DevelopmentHeaderRight:Header[]
}
interface CloneInnerPageInterface {
    slug: any,
    pageContent: any
}

const DevelopmentPage: FC<CloneInnerPageInterface> = ({ slug, pageContent }) => {
    const { setIsLoading } = useContext(LoaderContext);
    const _id = pageContent.filter((dd:any) => dd.name === slug)[0]._id;
    const data = pageContent.filter((dd: any) => dd.name === slug)[0].data;
    const [params, setParams] = useState<PageInterface>({
        _id:_id,
        DevelopmentBanner:{
            title: data.DevelopmentBanner.title,
            subtitle: data.DevelopmentBanner.subtitle,
            centerContent:data.DevelopmentBanner.centerContent,
            buttonName:data.DevelopmentBanner.buttonName,
            buttonLink:data.DevelopmentBanner.buttonLink
        },
        DevelopmentHeaderLeft:data.DevelopmentHeaderLeft,
        DevelopmentHeaderRight:data.DevelopmentHeaderRight
    })

    const updateLeft = (index: number, field: string, value: string) => {
        setParams((prevParams) => {
            const updatedHeader = [...prevParams.DevelopmentHeaderLeft];
            updatedHeader[index][field] = value;
            return {
                ...prevParams,
                DevelopmentHeaderLeft: updatedHeader,
            };
        });
    };


    const addLeft = () => {
        setParams((prevState) => ({
            ...prevState,
            DevelopmentHeaderLeft: [...prevState.DevelopmentHeaderLeft, {
                title:"",
                image:"",
            }],
        }));
    };

    const removeLeft = (indexToRemove:number) => {
        setParams((prevState) => ({
            ...prevState,
            DevelopmentHeaderLeft: prevState.DevelopmentHeaderLeft.filter((_:any, index:number) => index !== indexToRemove),
        }));
    };

    const updateRight = (index: number, field: string, value: string) => {
        setParams((prevParams) => {
            const updatedHeader = [...prevParams.DevelopmentHeaderRight];
            updatedHeader[index][field] = value;
            return {
                ...prevParams,
                DevelopmentHeaderRight: updatedHeader,
            };
        });
    };


    const addRight = () => {
        setParams((prevState) => ({
            ...prevState,
            DevelopmentHeaderRight: [...prevState.DevelopmentHeaderRight, {
                title:"",
                image:"",
            }],
        }));
    };

    const removeRight = (indexToRemove:number) => {
        setParams((prevState) => ({
            ...prevState,
            DevelopmentHeaderRight: prevState.DevelopmentHeaderRight.filter((_:any, index:number) => index !== indexToRemove),
        }));
    };

    const save = async () => {
        try {
            setIsLoading(true);
            const response = await fetch('/api/industry/PUT/DevelopmentComponent', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(params),
            });

            if (response.ok) {
                const data = await response.json();
                if (data.message) {
                    console.log('Update successful:', data.message);
                } else {
                    console.error('Update operation failed');
                }
            } else {
                console.error('Server error while updating banner data');
            }
            setIsLoading(false);
        } catch (error) {
            console.error('Error updating banner data:', error);
        }
    };


    return <PrivateLayout title="Zuca - Development Component">
        <div className="flex flex-col gap-[16px]">
            <div className="flex items-center gap-[16px]">
                <h3 className="flex-1 text-[21px] tracking-[1.2px] font-semibold text-[#101D2C]">
                    Development Banner
                </h3>
                <Button
                    label="Save"
                    type="button"
                    className="px-[24px] py-[4px] rounded"
                    onClick={save}
                />
            </div>
            <div className="rounded border bg-white mt-[10px] p-[10px]">
                <div className="p-[10px]">
                    <Input
                        label="Title"
                        placeholder="Title"
                        value={params.DevelopmentBanner.title}
                        onChange={(e) =>
                            setParams({
                                ...params,
                                DevelopmentBanner: {
                                    ...params.DevelopmentBanner,
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
                        value={params.DevelopmentBanner.subtitle}
                        onChange={(e) =>
                            setParams({
                                ...params,
                                DevelopmentBanner: {
                                    ...params.DevelopmentBanner,
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
                        value={params.DevelopmentBanner.buttonName}
                        onChange={(e) =>
                            setParams({
                                ...params,
                                DevelopmentBanner: {
                                    ...params.DevelopmentBanner,
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
                        value={params.DevelopmentBanner.buttonLink}
                        onChange={(e) =>
                            setParams({
                                ...params,
                                DevelopmentBanner: {
                                    ...params.DevelopmentBanner,
                                    buttonLink: e.target.value,
                                },
                            })
                        }
                        className="rounded admin-input"
                    />
                </div>
            </div>
            <div className="flex flex-row justify-between">
            <h1 className="font-semibold text-[20px]">Development Left Data</h1>
                <div className="flex flex-row gap-[20px]">
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
                        onClick={addLeft}
                    /></div>
            </div>
            <div className="grid xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 gap-[16px]">
                {params.DevelopmentHeaderLeft && params.DevelopmentHeaderLeft.length>0 && params.DevelopmentHeaderLeft.map((item:Header, index: number) => {
                    return <div key={index} className="rounded border overflow-hidden bg-white">
                        <ImageOverlay
                            withOverlay
                            url={item.image}
                            id={`icon-${index}`}
                            className="h-[220px]"
                            remove={() => removeLeft(index)}
                            onUploadSuccess={(url) => updateLeft(index, "image", url)}
                        />
                        <div className="p-[5px] relative">
                            <div className="p-[5px]">
                                <Input
                                    label="Title"
                                    placeholder="Title"
                                    value={item.title}
                                    onChange={e => updateLeft(index, "title", e.target.value)}
                                    className="rounded admin-input"
                                />
                            </div>
                        </div>
                    </div>
                })}
            </div>
            <div className="flex flex-row mt-[40px] justify-between">
                <h1 className="font-semibold  text-[20px]">Development Right Data</h1>
                <div className="flex flex-row gap-[20px]">
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
                        onClick={addRight}
                    /></div>
            </div>
            <div className="grid xl:grid-cols-4  lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 gap-[16px]">
                {params.DevelopmentHeaderRight && params.DevelopmentHeaderRight.length>0 && params.DevelopmentHeaderRight.map((item:Header, index: number) => {
                    return <div key={index} className="rounded border overflow-hidden bg-white">
                        <ImageOverlay
                            withOverlay
                            url={item.image}
                            id={`icon-${index}`}
                            className="h-[220px]"
                            remove={() => removeRight(index)}
                            onUploadSuccess={(url) => updateRight(index, "image", url)}
                        />
                        <div className="p-[5px] relative">
                            <div className="p-[5px]">
                                <Input
                                    label="Title"
                                    placeholder="Title"
                                    value={item.title}
                                    onChange={e => updateRight(index, "title", e.target.value)}
                                    className="rounded admin-input"
                                />
                            </div>
                        </div>
                    </div>
                })}
            </div>
        </div>
    </PrivateLayout>
}

export default DevelopmentPage;

export const getServerSideProps: GetServerSideProps = async (context) => {
    const slug: any = context.query.slug;
    const timestamp = Date.now();
    const response: any = await fetch(`http://localhost:3000/api/industry/GET/indsutries`)
        .then((response) => response.json())

    return {
        props: {
            slug: slug,
            pageContent: response || null
        }
    }
}