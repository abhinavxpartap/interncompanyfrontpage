import React, {FC, useContext, useState} from "react";
import { Button } from "../../../../../utils/Button";
import { LoaderContext } from "../../../../../context/LoaderContext";
import { Input } from "../../../../../utils/Input";
import PrivateLayout from "../../../../../components/Layout/privateLayout";
import {GetServerSideProps} from "next";
import {Img} from "../../../../../utils/Img";

interface Header {
    id: number;
    title: string;
    content: string;
    [key: string]: string | number;
}

interface AboutBanner{
    title:string,
    subtitle:string,
    buttonName:string,
    buttonLink:string
}

interface PageInterface{
    _id:string,
    FaqBanner:AboutBanner,
    FaqData:Header[]
}
interface CloneInnerPageInterface {
    slug: any,
    pageContent: any
}

const FaqPage: FC<CloneInnerPageInterface> = ({ slug, pageContent }) => {
    const { setIsLoading } = useContext(LoaderContext);
    const _id = pageContent.filter((dd:any) => dd.name === slug)[0]._id;
    const data = pageContent.filter((dd: any) => dd.name === slug)[0].data;
    const [params, setParams] = useState<PageInterface>({
        _id:_id,
        FaqBanner:{
            title:data.FaqBanner.title,
            subtitle:data.FaqBanner.subtitle,
            buttonName:data.FaqBanner.buttonName,
            buttonLink:data.FaqBanner.buttonLink
        },
        FaqData:data.FaqData
    })

    const updateCaseStudies = (index:number, field:string, value:string) => {
        setParams((prevParams) => {
            const updatedHeader = [...prevParams.FaqData];
            updatedHeader[index][field] = value;
            return {
                ...prevParams,
                FaqData: updatedHeader,
            };
        });
    };


    const addCaseStudies = () => {
        setParams((prevState) => {
            const newId = prevState.FaqData.length + 1; // Start from 1
            const newItem = {
                id: newId,
                title: "",
                content: ""
            };
            return {
                ...prevState,
                FaqData: [...prevState.FaqData, newItem],
            };
        });
    };
    const removeHeaderItem = (idToRemove: number) => {
        setParams((prevState) => {
            // Find the index of the item with the matching id
            const itemIndex = prevState.FaqData.findIndex(item => item.id === idToRemove);

            if (itemIndex !== -1) {
                const updatedFaqData = prevState.FaqData.filter(item => item.id !== idToRemove);

                // Reindex the remaining items based on their position
                const reindexedFaqData = updatedFaqData.map((item, index) => ({
                    ...item,
                    id: index + 1,
                }));
                return {
                    ...prevState,
                    FaqData: reindexedFaqData,
                };
            } else {
                return prevState; // Item with the specified id not found
            }
        });
    };


    const save = async () => {
        try {
            setIsLoading(true);
            const response = await fetch('/api/services/PUT/FaqComponent', {
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


    return <PrivateLayout title="Zuca - Faq Component">
        <div className="flex flex-col gap-[16px]">
            <div className="flex items-center gap-[16px]">
                <h3 className="flex-1 text-[21px] tracking-[1.2px] font-semibold text-[#101D2C]">
                    Faq Left Side
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
                <div className="p-[10px]">
                    <Input
                        label="Title"
                        placeholder="Title"
                        value={params.FaqBanner.title}
                        onChange={(e) =>
                            setParams({
                                ...params,
                                FaqBanner: {
                                    ...params.FaqBanner,
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
                        value={params.FaqBanner.subtitle}
                        onChange={(e) =>
                            setParams({
                                ...params,
                                FaqBanner: {
                                    ...params.FaqBanner,
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
                        value={params.FaqBanner.buttonName}
                        onChange={(e) =>
                            setParams({
                                ...params,
                                FaqBanner: {
                                    ...params.FaqBanner,
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
                        value={params.FaqBanner.buttonLink}
                        onChange={(e) =>
                            setParams({
                                ...params,
                                FaqBanner: {
                                    ...params.FaqBanner,
                                    buttonLink: e.target.value,
                                },
                            })
                        }
                        className="rounded admin-input"
                    />
                </div>
            </div>
            <h1 className="font-semibold text-[20px]">Faq Data</h1>
            <div className="grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 gap-[16px]">
                {params.FaqData && params.FaqData.length>0 && params.FaqData.map((item:Header, index: number) => {
                    return <div key={index} className="rounded border overflow-hidden bg-white">
                        <div className="p-[5px] relative">
                            <div className="px-[5px] font-semibold">
                                {item.id}
                            </div>
                            <div className="p-2 absolute top-0 right-0">
                                <div className="cursor-pointer" onClick={() => removeHeaderItem(item.id)}>
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
                            <div className="p-[5px]">
                                <Input
                                    label="Content"
                                    placeholder="Content"
                                    value={item.content}
                                    onChange={e => updateCaseStudies(index, "content", e.target.value)}
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

export default FaqPage;

export const getServerSideProps: GetServerSideProps = async (context) => {
    const slug: any = context.query.slug;
    const response: any = await fetch(`http://localhost:3000/api/services/GET/services`)
        .then((response) => response.json())

    return {
        props: {
            slug: slug,
            pageContent: response || null
        }
    }
}