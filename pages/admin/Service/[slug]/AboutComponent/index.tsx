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
    subtitle:string,
    image:string,
    paragraph:string
}

interface PageInterface{
    _id:string,
    AboutBanner:AboutBanner,
    AboutData:Header[]
}
interface CloneInnerPageInterface {
    slug: any,
    pageContent: any
}

const AboutPage: FC<CloneInnerPageInterface> = ({ slug, pageContent }) => {
    const { setIsLoading } = useContext(LoaderContext);
    const _id = pageContent.filter((dd:any) => dd.name === slug)[0]._id;
    const data = pageContent.filter((dd: any) => dd.name === slug)[0].data;
    const [params, setParams] = useState<PageInterface>({
        _id:_id,
        AboutBanner:{
            title: data.AboutBanner.title,
            subtitle: data.AboutBanner.subtitle,
            image: data.AboutBanner.image,
            paragraph:data.AboutBanner.paragraph,
        },
        AboutData:data.AboutData
    })

    const updateCaseStudies = (index: number, field: string, value: string) => {
        setParams((prevParams) => {
            const updatedHeader = [...prevParams.AboutData];
            updatedHeader[index][field] = value;
            return {
                ...prevParams,
                AboutData: updatedHeader,
            };
        });
    };


    const addCaseStudies = () => {
        setParams((prevState) => ({
            ...prevState,
            AboutData: [...prevState.AboutData, {
                title:"",
            }],
        }));
    };

    const removeHeaderItem = (indexToRemove:number) => {
        setParams((prevState) => ({
            ...prevState,
            AboutData: prevState.AboutData.filter((_:any, index:number) => index !== indexToRemove),
        }));
    };

    const save = async () => {
        try {
            setIsLoading(true);
            const response = await fetch('/api/services/PUT/AboutComponent', {
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


    return <PrivateLayout title="Zuca - About Component">
        <div className="flex flex-col gap-[16px]">
            <div className="flex items-center gap-[16px]">
                <h3 className="flex-1 text-[21px] tracking-[1.2px] font-semibold text-[#101D2C]">
                    About Banner
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
                        url={params.AboutBanner.image}
                        onUploadSuccess={(url) =>
                            setParams({
                                ...params,
                                AboutBanner: {
                                    ...params.AboutBanner,
                                    image: url,
                                },
                            })
                        }
                        className="object-cover h-full"
                        wrapperHeightClass="h-full"
                    />
                </div>
                <div className="p-[10px]">
                    <Input
                        label="Title"
                        placeholder="Title"
                        value={params.AboutBanner.title}
                        onChange={(e) =>
                            setParams({
                                ...params,
                                AboutBanner: {
                                    ...params.AboutBanner,
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
                        value={params.AboutBanner.subtitle}
                        onChange={(e) =>
                            setParams({
                                ...params,
                                AboutBanner: {
                                    ...params.AboutBanner,
                                    subtitle: e.target.value,
                                },
                            })
                        }
                        className="rounded admin-input"
                    />
                </div>
                <div className="p-[10px]">
                    <Input
                        label="Paragraph"
                        placeholder="Paragraph"
                        value={params.AboutBanner.paragraph}
                        onChange={(e) =>
                            setParams({
                                ...params,
                                AboutBanner: {
                                    ...params.AboutBanner,
                                    paragraph: e.target.value,
                                },
                            })
                        }
                        className="rounded admin-input"
                    />
                </div>
            </div>
            <h1 className="font-semibold text-[20px]">About List Data</h1>
            <div className="grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 gap-[16px]">
                {params.AboutData && params.AboutData.length>0 && params.AboutData.map((item:Header, index: number) => {
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

export default AboutPage;

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