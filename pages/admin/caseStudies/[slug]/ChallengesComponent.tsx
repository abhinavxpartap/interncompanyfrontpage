import React, {FC, useContext, useState} from "react";
import {Button} from "../../../../utils/Button";
import {LoaderContext} from "../../../../context/LoaderContext";
import {Input} from "../../../../utils/Input";
import PrivateLayout from "../../../../components/Layout/privateLayout";
import {GetServerSideProps} from "next";
import {Img} from "../../../../utils/Img";

interface List{
    percentage:string,
    title:string,
    content:string,
    [key:string]:string
}
interface AboutBanner{
    heading:string,
}
interface PageInterface{
    _id:string,
    ChalengesBanner:AboutBanner,
    ChalengesData:List[]
}
interface CloneInnerPageInterface {
    slug: any,
    pageContent: any
}

const ChallengesComponent: FC<CloneInnerPageInterface> = ({ slug, pageContent }) => {
    const { setIsLoading } = useContext(LoaderContext);
    const _id = pageContent.filter((dd:any) => dd.name === slug)[0]._id;
    const data = pageContent.filter((dd: any) => dd.name === slug)[0].data;
    const [params, setParams] = useState<PageInterface>({
        _id:_id,
        ChalengesBanner:{
            heading:data.resultNew.heading,
        },
        ChalengesData:data.resultData
    })

    const updateData = (index: number, field: string, value: string) => {
        setParams((prevParams) => {
            const updatedList = [...prevParams.ChalengesData];
            updatedList[index][field] = value;
            return {
                ...prevParams,
                ChalengesData: updatedList,
            };
        });
    };


    const addData = () => {
        setParams((prevState) => ({
            ...prevState,
            ChalengesData: [...prevState.ChalengesData, {
                percentage:"",
                title:"",
                content:""
            }],
        }));
    };

    const removeData = (indexToRemove:number) => {
        setParams((prevState) => ({
            ...prevState,
            ChalengesData: prevState.ChalengesData.filter((_:any, index:number) => index !== indexToRemove),
        }));
    };

    const save = async () => {
        try {
            setIsLoading(true);
            const response = await fetch('/api/portfolios/PUT/AboutComponent', {
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

    return <PrivateLayout title="Zuca - Challenges Component">
        <div className="flex flex-col gap-[16px]">
            <div className="flex items-center gap-[16px]">
                <h3 className="flex-1 text-[21px] tracking-[1.2px] font-semibold text-[#101D2C]">
                    Challenges Heading
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
                        value={params.ChalengesBanner.heading}
                        onChange={(e) =>
                            setParams({
                                ...params,
                                ChalengesBanner: {
                                    ...params.ChalengesBanner,
                                    heading: e.target.value,
                                },
                            })
                        }
                        className="rounded admin-input"
                    />
                </div>
            </div>
            <h1 className="font-semibold text-[20px]">Challenges List Data</h1>
            <div className="grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 gap-[16px]">
                {params.ChalengesData && params.ChalengesData.length>0 && params.ChalengesData.map((item:List, index: number) => {
                    return <div key={index} className="rounded border overflow-hidden bg-white">
                        <div className="p-[5px] relative">
                            <div className="p-2 absolute top-0 right-0">
                                <div className="cursor-pointer" onClick={() => removeData(index)}>
                                    <Img
                                        src="/images/remove.svg"
                                        alt="upload"
                                        className="w-[35px] h-[35px] bg-white rounded-full p-2"
                                    />
                                </div>
                            </div>
                            <div className="p-[5px]">
                                <Input
                                    label="Percentage"
                                    placeholder="Percentage"
                                    value={item.percentage}
                                    onChange={e => updateData(index, "percentage", e.target.value)}
                                    className="rounded admin-input"
                                />
                            </div>
                            <div className="p-[5px]">
                                <Input
                                    label="Title"
                                    placeholder="Title"
                                    value={item.title}
                                    onChange={e => updateData(index, "title", e.target.value)}
                                    className="rounded admin-input"
                                />
                            </div>
                            <div className="p-[5px]">
                                <Input
                                    label="Content"
                                    placeholder="Content"
                                    value={item.content}
                                    onChange={e => updateData(index, "content", e.target.value)}
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
export default ChallengesComponent;

export const getServerSideProps: GetServerSideProps = async (context) => {
    const slug: any = context.query.slug;
    const response: any = await fetch(`http://localhost:3000/api/portfolios/GET/portfolios`)
        .then((response) => response.json())
    return {
        props: {
            slug: slug,
            pageContent: response || null
        }
    }
}
