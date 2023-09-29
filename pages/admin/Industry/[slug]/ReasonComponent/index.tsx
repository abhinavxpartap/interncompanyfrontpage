import React, {FC, useContext, useState} from "react";
import { Button } from "../../../../../utils/Button";
import { LoaderContext } from "../../../../../context/LoaderContext";
import { ImageOverlay } from "../../../../../utils/Admin/ImageOverlay";
import { Input } from "../../../../../utils/Input";
import PrivateLayout from "../../../../../components/Layout/privateLayout";
import {GetServerSideProps} from "next";
import {Img} from "../../../../../utils/Img";

interface Header{
    title:string,
    [key:string]:string
}

interface AboutBanner{
    title:string,
    backgroundImage:string,
    leftImage:string,
    productCount:string,
    productText:string,
    softwareDevelopedCount:string,
    softwareText:string,
    webDesignCount:string,
    webText:string,
}
interface PageInterface{
    _id:string,
    ReasonBanner:AboutBanner,
    ReasonData:Header[]
}
interface CloneInnerPageInterface {
    slug: any,
    pageContent: any
}

const ReasonPage: FC<CloneInnerPageInterface> = ({ slug, pageContent }) => {
    const { setIsLoading } = useContext(LoaderContext);
    const _id = pageContent.filter((dd:any) => dd.name === slug)[0]._id;
    const data = pageContent.filter((dd: any) => dd.name === slug)[0].data;
    const [params, setParams] = useState<PageInterface>({
        _id:_id,
        ReasonBanner:{
            title:data.ReasonBanner.title,
            backgroundImage:data.ReasonBanner.backgroundImage,
            leftImage:data.ReasonBanner.leftImage,
            productCount:data.ReasonBanner.productCount,
            productText:data.ReasonBanner.productText,
            softwareDevelopedCount:data.ReasonBanner.softwareDevelopedCount,
            softwareText:data.ReasonBanner.softwareText,
            webDesignCount:data.ReasonBanner.webDesignCount,
            webText:data.ReasonBanner.webText,
        },
        ReasonData:data.ReasonData
    })

    const updateCaseStudies = (index: number, field: string, value: string) => {
        setParams((prevParams) => {
            const updatedHeader = [...prevParams.ReasonData];
            updatedHeader[index][field] = value;
            return {
                ...prevParams,
                ReasonData: updatedHeader,
            };
        });
    };


    const addCaseStudies = () => {
        setParams((prevState) => ({
            ...prevState,
            ReasonData: [...prevState.ReasonData, {
                title:"",
            }],
        }));
    };

    const removeHeaderItem = (indexToRemove:number) => {
        setParams((prevState) => ({
            ...prevState,
            ReasonData: prevState.ReasonData.filter((_:any, index:number) => index !== indexToRemove),
        }));
    };

    const save = async () => {
        try {
            setIsLoading(true);
            const response = await fetch('/api/industry/PUT/ReasonComponent', {
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


    return <PrivateLayout title="Zuca - Reason Component">
        <div className="flex flex-col gap-[16px]">
            <div className="flex items-center gap-[16px]">
                <h3 className="flex-1 text-[21px] tracking-[1.2px] font-semibold text-[#101D2C]">
                    Reason Banner
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
                    onClick={addCaseStudies}
                />
            </div>
            <div className="rounded border bg-white mt-[10px] p-[10px]">
                <div className="rounded border bg-white overflow-hidden md:h-[450px]">
                    <ImageOverlay
                        url={params.ReasonBanner.backgroundImage}
                        onUploadSuccess={(url) =>
                            setParams({
                                ...params,
                                ReasonBanner: {
                                    ...params.ReasonBanner,
                                    backgroundImage: url,
                                },
                            })
                        }
                        className="object-cover h-full"
                        wrapperHeightClass="h-full"
                    />
                </div>
                <div className="flex flex-row mt-[40px] gap-[20px]">
                    <div>
                        <ImageOverlay
                            url={params.ReasonBanner.leftImage}
                            onUploadSuccess={(url) =>
                                setParams({
                                    ...params,
                                    ReasonBanner: {
                                        ...params.ReasonBanner,
                                        leftImage: url,
                                    },
                                })
                            }
                            className="object-contain rounded-[15px] h-full bg-gray-500 p-[10px]"
                            wrapperHeightClass="h-full"
                        />
                    </div>
                    <div>
                <div className="p-[10px]">
                    <Input
                        label="Title"
                        placeholder="Title"
                        value={params.ReasonBanner.title}
                        onChange={(e) =>
                            setParams({
                                ...params,
                                ReasonBanner: {
                                    ...params.ReasonBanner,
                                    title: e.target.value,
                                },
                            })
                        }
                        className="rounded admin-input"
                    />
                </div>
                        <div className="grid grid-cols-2">
                            <div>
                <div className="p-[10px]">
                    <Input
                        label="Product Count"
                        placeholder="Product Count"
                        value={params.ReasonBanner.productCount}
                        onChange={(e) =>
                            setParams({
                                ...params,
                                ReasonBanner: {
                                    ...params.ReasonBanner,
                                    productCount: e.target.value,
                                },
                            })
                        }
                        className="rounded admin-input"
                    />
                </div>
                <div className="p-[10px]">
                    <Input
                        label="Product Text"
                        placeholder="Product Text"
                        value={params.ReasonBanner.productText}
                        onChange={(e) =>
                            setParams({
                                ...params,
                                ReasonBanner: {
                                    ...params.ReasonBanner,
                                    productText: e.target.value,
                                },
                            })
                        }
                        className="rounded admin-input"
                    />
                </div>
                            </div>
                            <div>
                <div className="p-[10px]">
                    <Input
                        label="Software Developed Count"
                        placeholder="Software Developed Count"
                        value={params.ReasonBanner.softwareDevelopedCount}
                        onChange={(e) =>
                            setParams({
                                ...params,
                                ReasonBanner: {
                                    ...params.ReasonBanner,
                                    softwareDevelopedCount: e.target.value,
                                },
                            })
                        }
                        className="rounded admin-input"
                    />
                </div>
                <div className="p-[10px]">
                    <Input
                        label="Software Text"
                        placeholder="Software Text"
                        value={params.ReasonBanner.softwareText}
                        onChange={(e) =>
                            setParams({
                                ...params,
                                ReasonBanner: {
                                    ...params.ReasonBanner,
                                    softwareText: e.target.value,
                                },
                            })
                        }
                        className="rounded admin-input"
                    />
                </div>
                            </div>
                            <div>
                <div className="p-[10px]">
                    <Input
                        label="Web Design Count"
                        placeholder="Web Design Count"
                        value={params.ReasonBanner.webDesignCount}
                        onChange={(e) =>
                            setParams({
                                ...params,
                                ReasonBanner: {
                                    ...params.ReasonBanner,
                                    webDesignCount: e.target.value,
                                },
                            })
                        }
                        className="rounded admin-input"
                    />
                </div>
                <div className="p-[10px]">
                    <Input
                        label="Web Text"
                        placeholder="Web Text"
                        value={params.ReasonBanner.webText}
                        onChange={(e) =>
                            setParams({
                                ...params,
                                ReasonBanner: {
                                    ...params.ReasonBanner,
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
            <h1 className="font-semibold text-[20px]">Reason List Data</h1>
            <div className="grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 gap-[16px]">
                {params.ReasonData && params.ReasonData.length>0 && params.ReasonData.map((item:Header, index: number) => {
                    return <div key={index} className="rounded border overflow-hidden bg-white">
                        <div className="p-[5px] relative">
                            <div className="p-2 absolute top-0 right-0">
                                <div className="cursor-pointer" onClick={() => removeHeaderItem(index)}>
                                    <Img
                                        src="/images/remove.svg"
                                        alt="upload"
                                        className="w-[35px] h-[35px] bg-white rounded-full p-2"
                                    />
                                </div>
                            </div>
                            <div className="p-[5px]">
                                <Input
                                    label="Title"
                                    placeholder="Title"
                                    value={item.title}
                                    onChange={e => updateCaseStudies(index, "title", e.target.value)}
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

export default ReasonPage;

export const getServerSideProps: GetServerSideProps = async (context) => {
    const slug: any = context.query.slug;
    const response: any = await fetch(`http://localhost:3000/api/industry/GET/indsutries`)
        .then((response) => response.json())

    return {
        props: {
            slug: slug,
            pageContent: response || null
        }
    }
}