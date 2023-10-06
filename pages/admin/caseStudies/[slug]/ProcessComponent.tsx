import React, {FC, useContext, useState} from "react";
import {Button} from "../../../../utils/Button";
import {LoaderContext} from "../../../../context/LoaderContext";
import {Input} from "../../../../utils/Input";
import PrivateLayout from "../../../../components/Layout/privateLayout";
import {GetServerSideProps} from "next";
import {Img} from "../../../../utils/Img";

interface List {
    id: number,
    title: string,
    content: string,
    [key: string]: string | number
}

interface ProcessBanner {
    heading: string,
}

interface PageInterface {
    _id: string,
    ProcessBanner: ProcessBanner,
    ProcessList: List[]
}

interface CloneInnerPageInterface {
    slug: any,
    pageContent: any
}

const ProcessComponent: FC<CloneInnerPageInterface> = ({slug, pageContent}) => {
    const {setIsLoading} = useContext(LoaderContext);
    const _id = pageContent.filter((dd: any) => dd.name === slug)[0]._id;
    const data = pageContent.filter((dd: any) => dd.name === slug)[0].data;
    const [params, setParams] = useState<PageInterface>({
        _id: _id,
        ProcessBanner: {
            heading: data.OurProcessNew.heading,
        },
        ProcessList: data.process
    })

    const UpdateList = (index: number, field: string, value: string) => {
        setParams((prevParams) => {
            const updatedHeader = [...prevParams.ProcessList];
            updatedHeader[index][field] = value;
            return {
                ...prevParams,
                ProcessList: updatedHeader,
            };
        });
    };


    const AddList = () => {
        setParams((prevState) => {
            const newId = prevState.ProcessList.length + 1; // Start from 1
            const newItem = {
                id: newId,
                title: "",
                content: ""
            };
            return {
                ...prevState,
                ProcessList: [...prevState.ProcessList, newItem],
            };
        });
    };
    const removeList = (idToRemove: number) => {
        setParams((prevState) => {
            // Find the index of the item with the matching id
            const itemIndex = prevState.ProcessList.findIndex(item => item.id === idToRemove);

            if (itemIndex !== -1) {
                const updatedList = prevState.ProcessList.filter(item => item.id !== idToRemove);

                // Reindex the remaining items based on their position
                const reindexedList = updatedList.map((item, index) => ({
                    ...item,
                    id: index + 1,
                }));
                return {
                    ...prevState,
                    ProcessList: reindexedList,
                };
            } else {
                return prevState; // Item with the specified id not found
            }
        });
    };

    const save = async () => {
        try {
            setIsLoading(true);
            const response = await fetch('/api/caseStudies/PUT/ProcessComponent', {
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

    return <PrivateLayout title="Zuca - Process Component">
        <div className="flex flex-col gap-[16px]">
            <div className="flex items-center gap-[16px]">
                <h3 className="flex-1 text-[21px] tracking-[1.2px] font-semibold text-[#101D2C]">
                    Process Component
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
                        value={params.ProcessBanner.heading}
                        onChange={(e) =>
                            setParams({
                                ...params,
                                ProcessBanner: {
                                    ...params.ProcessBanner,
                                    heading: e.target.value,
                                },
                            })
                        }
                        className="rounded admin-input"
                    />
                </div>
            </div>
            <div className="flex flex-row justify-between">
                <h1 className="font-semibold text-[20px]">Process List</h1>
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
                        onClick={AddList}
                    />
                </div>
            </div>
            <div
                className="grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 gap-[16px]">
                {params.ProcessList && params.ProcessList.length > 0 && params.ProcessList.map((item: List, index: number) => {
                    return <div key={index} className="rounded border overflow-hidden bg-white">
                        <div className="p-[5px] relative">
                            <div className="px-[5px] font-semibold">
                                {item.id}
                            </div>
                            <div className="p-2 absolute top-0 right-0">
                                <div className="cursor-pointer" onClick={() => removeList(item.id)}>
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
                                    onChange={e => UpdateList(index, "title", e.target.value)}
                                    className="rounded admin-input"
                                />
                            </div>
                            <div className="p-[5px]">
                                <Input
                                    label="Content"
                                    placeholder="Content"
                                    value={item.content}
                                    onChange={e => UpdateList(index, "content", e.target.value)}
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

export default ProcessComponent;

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
