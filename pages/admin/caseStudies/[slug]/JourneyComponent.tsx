import React, {FC, useContext, useState} from "react";
import {Button} from "../../../../utils/Button";
import {LoaderContext} from "../../../../context/LoaderContext";
import {Input} from "../../../../utils/Input";
import PrivateLayout from "../../../../components/Layout/privateLayout";
import {GetServerSideProps} from "next";
import {Img} from "../../../../utils/Img";

interface Data {
    id: number,
    title: string,
    content: string,
    [key: string]: string | number
}

interface JourneyBanner {
    title1: string,
    title2: string,
    subtitle2: string,
    heading: string,
}

interface PageInterface {
    _id: string,
    JourneyBanner: JourneyBanner,
    JourneyData1: Data[],
    JourneyData2: Data[]
}

interface CloneInnerPageInterface {
    slug: any,
    pageContent: any
}

const JourneyComponent: FC<CloneInnerPageInterface> = ({slug, pageContent}) => {
    const {setIsLoading} = useContext(LoaderContext);
    const _id = pageContent.filter((dd: any) => dd.name === slug)[0]._id;
    const data = pageContent.filter((dd: any) => dd.name === slug)[0].data;
    const [params, setParams] = useState<PageInterface>({
        _id: _id,
        JourneyBanner: {
            title1: data.NewJourney.title1,
            title2: data.NewJourney.title2,
            subtitle2: data.NewJourney.subtitle2,
            heading: data.NewJourney.heading,
        },
        JourneyData1: data.key_features,
        JourneyData2: data.approach
    })

    const UpdateJourney1 = (index: number, field: string, value: string) => {
        setParams((prevParams) => {
            const updatedData = [...prevParams.JourneyData1];
            updatedData[index][field] = value;
            return {
                ...prevParams,
                JourneyData1: updatedData,
            };
        });
    };


    const AddJourney1 = () => {
        setParams((prevState) => {
            const newId = prevState.JourneyData1.length + 1; // Start from 1
            const newItem = {
                id: newId,
                title: "",
                content: ""
            };
            return {
                ...prevState,
                JourneyHeader1: [...prevState.JourneyData1, newItem],
            };
        });
    };
    const removeJourney1 = (idToRemove: number) => {
        setParams((prevState) => {
            // Find the index of the item with the matching id
            const itemIndex = prevState.JourneyData1.findIndex(item => item.id === idToRemove);

            if (itemIndex !== -1) {
                const updatedData = prevState.JourneyData1.filter(item => item.id !== idToRemove);

                // Reindex the remaining items based on their position
                const reindexedData = updatedData.map((item, index) => ({
                    ...item,
                    id: index + 1,
                }));
                return {
                    ...prevState,
                    JourneyData1: reindexedData,
                };
            } else {
                return prevState; // Item with the specified id not found
            }
        });
    };

    const UpdateJourney2 = (index: number, field: string, value: string) => {
        setParams((prevParams) => {
            const updatedData = [...prevParams.JourneyData2];
            updatedData[index][field] = value;
            return {
                ...prevParams,
                JourneyData2: updatedData,
            };
        });
    };


    const AddJourney2 = () => {
        setParams((prevState) => {
            const newId = prevState.JourneyData2.length + 1; // Start from 1
            const newItem = {
                id: newId,
                title: "",
                content: ""
            };
            return {
                ...prevState,
                JourneyHeader2: [...prevState.JourneyData2, newItem],
            };
        });
    };
    const removeJourney2 = (idToRemove: number) => {
        setParams((prevState) => {
            // Find the index of the item with the matching id
            const itemIndex = prevState.JourneyData2.findIndex(item => item.id === idToRemove);

            if (itemIndex !== -1) {
                const updatedData = prevState.JourneyData2.filter(item => item.id !== idToRemove);

                // Reindex the remaining items based on their position
                const reindexedData = updatedData.map((item, index) => ({
                    ...item,
                    id: index + 1,
                }));
                return {
                    ...prevState,
                    JourneyData2: reindexedData,
                };
            } else {
                return prevState; // Item with the specified id not found
            }
        });
    };

    const save = async () => {
        try {
            setIsLoading(true);
            const response = await fetch('/api/portfolios/PUT/JourneyComponent', {
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

    return <PrivateLayout title="Zuca - Journey Component">
        <div className="flex flex-col gap-[16px]">
            <div className="flex items-center gap-[16px]">
                <h3 className="flex-1 text-[21px] tracking-[1.2px] font-semibold text-[#101D2C]">
                    Journey Component
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
                        value={params.JourneyBanner.heading}
                        onChange={(e) =>
                            setParams({
                                ...params,
                                JourneyBanner: {
                                    ...params.JourneyBanner,
                                    heading: e.target.value,
                                },
                            })
                        }
                        className="rounded admin-input"
                    />
                </div>
            </div>
            <div className="flex flex-row justify-between">
            <h1 className="font-semibold text-[20px]">Journey Key Features</h1>
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
                        onClick={AddJourney1}
                    />
                </div>
            </div>
            <div className="rounded border bg-white mt-[10px] p-[10px] pb-[20px]">
                    <div className="p-[10px]">
                        <Input
                            label="Title"
                            placeholder="Title"
                            value={params.JourneyBanner.title1}
                            onChange={(e) =>
                                setParams({
                                    ...params,
                                    JourneyBanner: {
                                        ...params.JourneyBanner,
                                        title1: e.target.value,
                                    },
                                })
                            }
                            className="rounded admin-input w-[100%]"
                        />
                    </div>
            </div>
                <div
                    className="grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 gap-[16px]">
                    {params.JourneyData1 && params.JourneyData1.length > 0 && params.JourneyData1.map((item: Data, index: number) => {
                        return <div key={index} className="rounded border shadow-md overflow-hidden bg-white">
                            <div className="p-[5px] relative">
                                <div className="px-[5px] font-semibold">
                                    {item.id}
                                </div>
                                <div className="p-2 absolute top-0 right-0">
                                    <div className="cursor-pointer" onClick={() => removeJourney1(item.id)}>
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
                                        onChange={e => UpdateJourney1(index, "title", e.target.value)}
                                        className="rounded admin-input"
                                    />
                                </div>
                                <div className="p-[5px]">
                                    <Input
                                        label="Content"
                                        placeholder="Content"
                                        value={item.content}
                                        onChange={e => UpdateJourney1(index, "content", e.target.value)}
                                        className="rounded admin-input"
                                    />
                                </div>
                            </div>
                        </div>
                    })
                    }
            </div>
             <div className="flex flex-row justify-between mt-[20px]">
            <h1 className="font-semibold text-[20px]">Journey Approach</h1>
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
                         onClick={AddJourney2}
                     />
                 </div>
             </div>
            <div className="rounded border bg-white mt-[10px] p-[10px] pb-[20px]">
                        <div className="p-[10px]">
                            <Input
                                label="Title"
                                placeholder="Title"
                                value={params.JourneyBanner.title2}
                                onChange={(e) =>
                                    setParams({
                                        ...params,
                                        JourneyBanner: {
                                            ...params.JourneyBanner,
                                            title2: e.target.value,
                                        },
                                    })
                                }
                                className="rounded admin-input"
                            />
                        </div>
                        <div className="p-[10px]">
                            <Input
                                label="Subtitle"
                                placeholder="Subtitle"
                                value={params.JourneyBanner.subtitle2}
                                onChange={(e) =>
                                    setParams({
                                        ...params,
                                        JourneyBanner: {
                                            ...params.JourneyBanner,
                                            subtitle2: e.target.value,
                                        },
                                    })
                                }
                                className="rounded admin-input w-full"
                            />
                </div>
            </div>
                <div
                    className="grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 gap-[16px]">
                    {params.JourneyData2 && params.JourneyData2.length > 0 && params.JourneyData2.map((item: Data, index: number) => {
                        return <div key={index} className="rounded border overflow-hidden bg-white">
                            <div className="p-[5px] relative">
                                <div className="px-[5px] font-semibold">
                                    {item.id}
                                </div>
                                <div className="p-2 absolute top-0 right-0">
                                    <div className="cursor-pointer" onClick={() => removeJourney2(item.id)}>
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
                                        onChange={e => UpdateJourney2(index, "title", e.target.value)}
                                        className="rounded admin-input"
                                    />
                                </div>
                                <div className="p-[5px]">
                                    <Input
                                        label="Content"
                                        placeholder="Content"
                                        value={item.content}
                                        onChange={e => UpdateJourney2(index, "content", e.target.value)}
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

export default JourneyComponent;

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
