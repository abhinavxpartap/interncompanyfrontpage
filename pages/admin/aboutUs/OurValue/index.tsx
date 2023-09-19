import React, {useContext, useEffect, useState} from "react";
import { Button } from "../../../../utils/Button";
import { Input } from "../../../../utils/Input";
import toast from "react-hot-toast";
import { LoaderContext } from "../../../../context/LoaderContext";
import pageData from "../../../../data/aboutOurValue.json";
import PrivateLayout from "../../../../components/Layout/privateLayout";
import { ourValueArray, OurValueInterface} from "../../../../types";

const OurValuePage = () => {
    const { setIsLoading } = useContext(LoaderContext);
    const [params, setParams] = useState<OurValueInterface>({
        _id:"",
        aboutOurValue:[]
    });

    useEffect(() => {
        fetch("/api/aboutUs/GET/OurValue")
            .then((response) => response.json())
            .then((data) => {
                setParams({
                    ...params,
                    _id:data._id,
                    aboutOurValue: data.aboutOurValue.map((headerItem:ourValueArray) => {
                        return ({
                            number: headerItem.number,
                            title: headerItem.title,
                            subtitle:headerItem.subtitle,
                        });
                    }),
                });
            })
            .catch((error) => {
                console.error("Error fetching banner data:", error);
            });
    }, []);



    const updateValue = (index: number, field: string, value: string) => {
        setParams((prevParams) => {
            const updatedHeader = [...prevParams.aboutOurValue];
            updatedHeader[index][field] = value;
            return {
                ...prevParams,
                aboutOurValue: updatedHeader,
            };
        });
    };


    const save = async () => {
        try {
            setIsLoading(true);
            const response = await fetch('/api/aboutUs/PUT/OurValue', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    _id: params._id,
                    aboutOurValue: params.aboutOurValue,
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

    return <PrivateLayout title="Zuca - About Our Values">
        <div className="flex flex-col gap-[16px]">
            <div className="flex items-center gap-[16px]">
                <h3 className="flex-1 text-[21px] tracking-[1.2px] font-semibold text-[#101D2C]">
                    About Our Values
                </h3>
                <Button
                    label="Save"
                    type="button"
                    className="px-[24px] py-[4px] rounded"
                    onClick={save}
                />
            </div>
            <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-[16px]">
                {params.aboutOurValue.map((item:ourValueArray, index) => {
                        return <div key={index} className="rounded border overflow-hidden bg-white">
                            <div className="p-[10px]">
                                <h1 className="font-bold">{item.number}</h1>
                            </div>
                            <div className="p-[10px]">
                                <Input
                                    label="Title"
                                    placeholder="Title"
                                    value={item.title}
                                    onChange={e => updateValue(index, "title", e.target.value)}
                                    className="rounded admin-input"
                                />
                            </div>
                            <div className="p-[10px]">
                                <Input
                                    label="Sub Title"
                                    placeholder="Sub Title"
                                    value={item.subtitle}
                                    onChange={e => updateValue(index, "subtitle", e.target.value)}
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

export default OurValuePage;