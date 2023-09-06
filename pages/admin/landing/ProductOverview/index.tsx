import React, {useContext, useState} from "react";
import {Input} from "../../../../utils/Input";
import pageData from "../../../../data/productOverview.json";
import {ImageOverlay} from "../../../../utils/Admin/ImageOverlay";
import {Button} from "../../../../utils/Button";
import toast from "react-hot-toast";
import {LoaderContext} from "../../../../context/LoaderContext";
import PrivateLayout from "../../../../components/Layout/privateLayout";
import {ProductOverviewInterface} from "../../../../types";
const ProductPage = () => {
    const {setIsLoading} = useContext(LoaderContext);
    const [params, setParams] = useState<ProductOverviewInterface>({
        title: pageData.Data.title,
        subtitle: pageData.Data.subtitle,
        backgroundImage: pageData.Data.backgroundImage,
        productCount: pageData.Data.productCount,
        softwareDevelopedCount: pageData.Data.softwareDevelopedCount,
        webDesignCount:pageData.Data.webDesignCount
    });

    const setBannerParams = (key:keyof ProductOverviewInterface, value: string) => {
        const newParams = {...params};
        newParams[key] = value;
        setParams(newParams);
    }

    const save = async () => {
        setIsLoading(true);
        const response = await fetch('http://localhost:3000/api/save', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                fileUrl: '/productOverview.json',
                updatedContent: JSON.stringify({...pageData, Data: params})
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

    return <PrivateLayout title="Zuca - Home Page Banner Section">
        <div className="flex flex-col gap-[16px]">
            <div className="flex items-center gap-[16px]">
                <h3 className="flex-1 text-[21px] tracking-[1.2px] font-semibold text-[#101D2C]">
                    Product Overview Page
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
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-[10px] p-[10px] w-[100%]">
                       <div>
                            <Input
                                label="Product Counts"
                                placeholder="Product Counts"
                                value={params.productCount}
                                onChange={e => setBannerParams('productCount', e.target.value)}
                                className="rounded admin-input"
                            />
                        </div>
                        <div>
                            <Input
                                label="Software Developed Counts"
                                placeholder="Product Counts"
                                value={params.softwareDevelopedCount}
                                onChange={e => setBannerParams('softwareDevelopedCount', e.target.value)}
                                className="rounded admin-input"
                            />
                        </div>
                        <div>
                            <Input
                                label="Web Design Counts"
                                placeholder="Web Design Counts"
                                value={params.webDesignCount}
                                onChange={e => setBannerParams('webDesignCount', e.target.value)}
                                className="rounded admin-input"
                            />
                        </div> 
                    </div>
                </div>
            </div>
        </div>
    </PrivateLayout>
}

export default ProductPage;