import React, {useContext, useState} from "react";
import {Input} from "../../../../utils/Input";
import pageData from "../../../../data/service.json";
import {ImageOverlay} from "../../../../utils/Admin/ImageOverlay";
import {Button} from "../../../../utils/Button";
import toast from "react-hot-toast";
import {LoaderContext} from "../../../../context/LoaderContext";
import PrivateLayout from "../../../../components/Layout/privateLayout";
import {ServiceAboutInterface} from "../../../../types";

const BannerPage = () => {
    const {setIsLoading} = useContext(LoaderContext);
    const [params, setParams] = useState<ServiceAboutInterface>({
        title: pageData.About.title,
        subtitle: pageData.About.subtitle,
        image: pageData.About.image,
        paragraph:pageData.About.paragraph,
        data:[]
    });

    const save = async () => {
        setIsLoading(true);
        const response = await fetch('/api/save', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                fileUrl: '/service.json',
                updatedContent: JSON.stringify({...pageData, About: params})
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


    const setBannerParams = (key:keyof ServiceAboutInterface, value:string) => {
        const newParams = {...params};
        // newParams[key] = value;
        setParams(newParams);
    }

    return <PrivateLayout title="Zuca - Service About">
        <div className="flex flex-col gap-[16px]">
            <div className="flex items-center gap-[16px]">
                <h3 className="flex-1 text-[21px] tracking-[1.2px] font-semibold text-[#101D2C]">
                    Service About
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
                        url={params.image}
                        onUploadSuccess={(url) => setBannerParams('image', url)}
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
                            label="Paragraph"
                            placeholder="Paragraph"
                            value={params.paragraph}
                            onChange={e => setBannerParams('paragraph', e.target.value)}
                            className="rounded admin-input"
                        />
                    </div>
                </div>
            </div>
        </div>
    </PrivateLayout>
}

export default BannerPage;