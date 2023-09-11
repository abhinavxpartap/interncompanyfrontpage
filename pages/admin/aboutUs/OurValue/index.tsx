import React, { useContext, useState } from "react";
import { Button } from "../../../../utils/Button";
import { Input } from "../../../../utils/Input";
import toast from "react-hot-toast";
import { LoaderContext } from "../../../../context/LoaderContext";
import pageData from "../../../../data/aboutOurValue.json";
import PrivateLayout from "../../../../components/Layout/privateLayout";
import {OurValueInterface} from "../../../../types";

const OurValuePage = () => {
    const { setIsLoading } = useContext(LoaderContext);
    const [companies, setCompanies] = useState<OurValueInterface[]>(pageData);

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
            number: "",
            title: "",
            subtitle:""
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
                fileUrl: '/aboutOurValue.json',
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
                {companies.map((item:OurValueInterface, index) => {
                        return <div key={index} className="rounded border overflow-hidden bg-white">
                            <div className="p-[10px]">
                                <h1 className="font-bold">{item.number}</h1>
                            </div>
                            <div className="p-[10px]">
                                <Input
                                    label="Title"
                                    placeholder="Title"
                                    value={item.title}
                                    onChange={e => setParams(index, "title", e.target.value)}
                                    className="rounded admin-input"
                                />
                            </div>
                            <div className="p-[10px]">
                                <Input
                                    label="Sub Title"
                                    placeholder="Sub Title"
                                    value={item.subtitle}
                                    onChange={e => setParams(index, "subtitle", e.target.value)}
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