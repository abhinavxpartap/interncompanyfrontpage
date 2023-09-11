import React, {useContext, useState} from "react";
import {Input} from "../../../../utils/Input";
import pageData from "../../../../data/aboutUs.json";
import {Button} from "../../../../utils/Button";
import toast from "react-hot-toast";
import {LoaderContext} from "../../../../context/LoaderContext";
import PrivateLayout from "../../../../components/Layout/privateLayout";
import {WhatWeInterface} from "../../../../types";

const WhatWePage = () => {
    const {setIsLoading} = useContext(LoaderContext);
    const [params, setParams] = useState<WhatWeInterface>({
        title1: pageData.WhatWe.title1,
        subtitle1: pageData.WhatWe.subtitle1,
        title2:pageData.WhatWe.title2,
        subtitle2:pageData.WhatWe.subtitle2
    });

    const save = async () => {
        setIsLoading(true);
        const response = await fetch('/api/save', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                fileUrl: '/aboutUs.json',
                updatedContent: JSON.stringify({...pageData, WhatWe: params})
            }),
        });

        const data = await response.json();

        if (data.success) {
            toast.success("Changes saved successfully!");
        } else {
            toast.error(`Error saving changes: ${data.message}`);
        }
        setIsLoading(false);
    };

    const setBannerParams = (key:keyof WhatWeInterface, value:string) => {
        const newParams = {...params};
        newParams[key] = value;
        setParams(newParams);
    }

    return <PrivateLayout title="Zuca - About What We">
        <div className="flex flex-col gap-[16px]">
            <div className="flex items-center gap-[16px]">
                <h3 className="flex-1 text-[21px] tracking-[1.2px] font-semibold text-[#101D2C]">
                    About What We
                </h3>
                <Button
                    label="Save"
                    type="button"
                    className="px-[24px] py-[4px] rounded"
                    onClick={save}
                />
            </div>
            <div className="flex flex-col gap-[16px]">
                <div className="rounded border bg-white p-[10px]">
                    <div className="p-[10px]">
                        <Input
                            label="Title 1"
                            placeholder="Title 1"
                            value={params.title1}
                            onChange={e => setBannerParams('title1', e.target.value)}
                            className="rounded admin-input"
                        />
                    </div>
                    <div className="p-[10px]">
                        <Input
                            label="Sub Title 1"
                            placeholder="Sub Title 1"
                            value={params.subtitle1}
                            onChange={e => setBannerParams('subtitle1', e.target.value)}
                            className="rounded admin-input"
                        />
                    </div>
                    <div className="p-[10px]">
                        <Input
                            label="Title 2"
                            placeholder="Title 2"
                            value={params.title2}
                            onChange={e => setBannerParams('title2', e.target.value)}
                            className="rounded admin-input"
                        />
                    </div>
                    <div className="p-[10px]">
                        <Input
                            label="Sub Title 2"
                            placeholder="Sub Title 2"
                            value={params.subtitle2}
                            onChange={e => setBannerParams('subtitle2', e.target.value)}
                            className="rounded admin-input"
                        />
                    </div>
                </div>
            </div>
        </div>
    </PrivateLayout>
}

export default WhatWePage;