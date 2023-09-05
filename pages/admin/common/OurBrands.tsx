import React, { useContext, useState } from "react";
import { Button } from "../../../utils/Button";
import { Input } from "../../../utils/Input";
import toast from "react-hot-toast";
import { LoaderContext } from "../../../context/LoaderContext";
import { ImageOverlay } from "../../../utils/Admin/ImageOverlay";
import pageData from "../../../data/common/OurBrands.json";
import PrivateLayout from "../../../components/Layout/privateLayout";

const Companies = () => {
    const { setIsLoading } = useContext(LoaderContext);
    const [companies, setCompanies] = useState<any[]>(pageData);

    const setParams = (index: number, key: string, value: string): void => {
        const newCompany = [...companies];
        newCompany[index] = {
            ...newCompany[index],
            [key]: value
        };
        setCompanies(newCompany);
    }

    const addCompany = () => {
        const newCompany = [...companies];
        newCompany.push({
            src: "",
            alt: ""
        });
        setCompanies(newCompany);
    }

    const removeCompany = (index: number) => {
        const newCompany = [...companies];
        newCompany.splice(index, 1);
        setCompanies(newCompany);
    }

    const save = async () => {
        setIsLoading(true);
        const response = await fetch('/api/save', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                fileUrl: '/comman/company.json',
                updatedContent: JSON.stringify(companies)
            })
        });

        const data = await response.json();
        console.log(response)

        if (data.success) {
            toast.success("Changes saved successfully!");
        } else {
            toast.error(`Error saving changes: ${data.message}`);
        }
        setIsLoading(false);
    };

    return <PrivateLayout title="Zuca - Our Brands">
        <div className="flex flex-col gap-[16px]">
            <div className="flex items-center gap-[16px]">
                <h3 className="flex-1 text-[21px] tracking-[1.2px] font-semibold text-[#101D2C]">
                    Improving Companies
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
                    onClick={addCompany}
                />
            </div>
            <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-[16px]">
                {
                    companies.map((item: any, index) => {
                        return <div key={index} className="rounded border overflow-hidden bg-white">
                            <ImageOverlay
                                withOverlay
                                url={item.src}
                                id={`image-${index}`}
                                onUploadSuccess={(url) => setParams(index, "src", url)}
                                className="h-[120px]"
                                remove={() => removeCompany(index)}
                            />
                            <div className="p-[10px]">
                                <Input
                                    label="Alt Text"
                                    placeholder="Alt Text"
                                    value={item.alt}
                                    onChange={e => setParams(index, "alt", e.target.value)}
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

export default Companies;