import React, {useContext, useState} from "react";
import {Input} from "../../../../utils/Input";
import pageData from "../../../../data/aboutUs.json";
import {ImageOverlay} from "../../../../utils/Admin/ImageOverlay";
import {Button} from "../../../../utils/Button";
import toast from "react-hot-toast";
import {LoaderContext} from "../../../../context/LoaderContext";
import PrivateLayout from "../../../../components/Layout/privateLayout";
import {AboutLetWorkTogether} from "../../../../types";

const BannerPage = () => {
    const {setIsLoading} = useContext(LoaderContext);
    const [params, setParams] = useState<AboutLetWorkTogether>({
        title: pageData.Lets.title,
        subtitle: pageData.Lets.subtitle,
        backgroundImage: pageData.Lets.backgroundImage,
        buttonName:pageData.Lets.buttonName
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
                updatedContent: JSON.stringify({...pageData, Lets: params})
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

    const setBannerParams = (key:keyof AboutLetWorkTogether, value:string) => {
        const newParams = {...params};
        newParams[key] = value;
        setParams(newParams);
    }

    return <PrivateLayout title="Zuca - About Let Work Together">
        <div className="flex flex-col gap-[16px]">
            <div className="flex items-center gap-[16px]">
                <h3 className="flex-1 text-[21px] tracking-[1.2px] font-semibold text-[#101D2C]">
                    About Let Work Together
                </h3>
                <Button
                    label="Save"
                    type="button"
                    className="px-[24px] py-[4px] rounded"
                    onClick={save}
                />
            </div>
            <div className="flex flex-col gap-[16px]">
                <div className="rounded border bg-white overflow-hidden md:h-[450px]">
                    <ImageOverlay
                        url={params.backgroundImage}
                        onUploadSuccess={(url) => setBannerParams('backgroundImage', url)}
                        className="object-cover h-full"
                        wrapperHeightClass="h-full"
                    />
                </div>

                <div className="rounded border bg-white p-[10px]">
                    <div className="p-[10px]">
                        <Input
                            label="Title"
                            placeholder="Title"
                            value={params.title}
                            onChange={e => setBannerParams('title', e.target.value)}
                            className="rounded admin-input"
                        />
                    </div>
                    <div className="p-[10px]">
                        <Input
                            label="Sub Title"
                            placeholder="Sub Title"
                            value={params.subtitle}
                            onChange={e => setBannerParams('subtitle', e.target.value)}
                            className="rounded admin-input"
                        />
                    </div>
                    <div className="p-[10px]">
                        <Input
                            label="Button Name"
                            placeholder="Button Name"
                            value={params.buttonName}
                            onChange={e => setBannerParams('buttonName', e.target.value)}
                            className="rounded admin-input"
                        />
                    </div>
                </div>
            </div>
        </div>
    </PrivateLayout>
}

export default BannerPage;