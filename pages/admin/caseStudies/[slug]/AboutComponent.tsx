import React, {FC, useContext, useState} from "react";
import {Button} from "../../../../utils/Button";
import {LoaderContext} from "../../../../context/LoaderContext";
import {ImageOverlay} from "../../../../utils/Admin/ImageOverlay";
import {Input} from "../../../../utils/Input";
import PrivateLayout from "../../../../components/Layout/privateLayout";
import {GetServerSideProps} from "next";

interface List{
    src:string,
    [key:string]:string
}

interface AboutBanner{
    title:string,
    subtitle:string,
    industry:string,
    client:string,
    businessType:string
    services:string,
}

interface PageInterface{
    _id:string,
    AboutBanner:AboutBanner,
    AboutList:List[]
}
interface CloneInnerPageInterface {
    slug: any,
    pageContent: any
}

const AboutComponent: FC<CloneInnerPageInterface> = ({ slug, pageContent }) => {
    const { setIsLoading } = useContext(LoaderContext);
    const _id = pageContent.filter((dd:any) => dd.name === slug)[0]._id;
    const data = pageContent.filter((dd: any) => dd.name === slug)[0].data;
    const [params, setParams] = useState<PageInterface>({
        _id:_id,
        AboutBanner:{
            title:data.processInfo.title,
            subtitle:data.processInfo.subtitle,
            industry:data.processInfo.industry,
            client:data.processInfo.client,
            businessType:data.processInfo.businessType,
            services:data.processInfo.services,
        },
        AboutList:data.images
    })

    const updateData = (index: number, field: string, value: string) => {
        setParams((prevParams) => {
            const updatedList = [...prevParams.AboutList];
            updatedList[index][field] = value;
            return {
                ...prevParams,
                AboutList: updatedList,
            };
        });
    };


    const addData = () => {
        setParams((prevState) => ({
            ...prevState,
            AboutList: [...prevState.AboutList, {
                src:"",
            }],
        }));
    };

    const removeData = (indexToRemove:number) => {
        setParams((prevState) => ({
            ...prevState,
            AboutList: prevState.AboutList.filter((_:any, index:number) => index !== indexToRemove),
        }));
    };

    const save = async () => {
        try {
            setIsLoading(true);
            const response = await fetch('/api/caseStudies/PUT/AboutComponent', {
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
                    onClick={addData}
                />
            </div>
            <div className="rounded border bg-white mt-[10px] p-[10px]">
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
                        label="Industry"
                        placeholder="Industry"
                        value={params.AboutBanner.industry}
                        onChange={(e) =>
                            setParams({
                                ...params,
                                AboutBanner: {
                                    ...params.AboutBanner,
                                    industry: e.target.value,
                                },
                            })
                        }
                        className="rounded admin-input"
                    />
                </div>
                <div className="p-[10px]">
                    <Input
                        label="Client"
                        placeholder="Client"
                        value={params.AboutBanner.client}
                        onChange={(e) =>
                            setParams({
                                ...params,
                                AboutBanner: {
                                    ...params.AboutBanner,
                                    client: e.target.value,
                                },
                            })
                        }
                        className="rounded admin-input"
                    />
                </div>
                <div className="p-[10px]">
                    <Input
                        label="Business Type"
                        placeholder="Business Type"
                        value={params.AboutBanner.businessType}
                        onChange={(e) =>
                            setParams({
                                ...params,
                                AboutBanner: {
                                    ...params.AboutBanner,
                                    businessType: e.target.value,
                                },
                            })
                        }
                        className="rounded admin-input"
                    />
                </div>
                <div className="p-[10px]">
                    <Input
                        label="Services"
                        placeholder="Services"
                        value={params.AboutBanner.services}
                        onChange={(e) =>
                            setParams({
                                ...params,
                                AboutBanner: {
                                    ...params.AboutBanner,
                                    services: e.target.value,
                                },
                            })
                        }
                        className="rounded admin-input"
                    />
                </div>
            </div>
            <h1 className="font-semibold text-[20px]">About Image Data</h1>
            <div className="grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 gap-[16px]">
                {params.AboutList && params.AboutList.length>0 && params.AboutList.map((item:List, index: number) => {
                    return <div key={index} className="rounded border overflow-hidden bg-white">
                        <div className="p-[5px] relative">
                            <div className="p-[5px]">
                                <ImageOverlay
                                    withOverlay
                                    url={item.src}
                                    id={`icon-${index}`}
                                    className="h-[620px]"
                                    remove={() => removeData(index)}
                                    onUploadSuccess={(url) => updateData(index, "src", url)}
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

export default AboutComponent;

export const getServerSideProps: GetServerSideProps = async (context) => {
    const slug: any = context.query.slug;
    const response: any = await fetch(`http://localhost:3000/api/caseStudies/GET/portfolios`)
        .then((response) => response.json())
    return {
        props: {
            slug: slug,
            pageContent: response || null
        }
    }
}
