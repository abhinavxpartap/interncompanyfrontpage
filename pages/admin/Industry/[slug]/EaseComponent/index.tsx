import React, {useContext, useState, FC} from "react";
import {Input} from "../../../../../utils/Input";
import {Button} from "../../../../../utils/Button";
import {LoaderContext} from "../../../../../context/LoaderContext";
import PrivateLayout from "../../../../../components/Layout/privateLayout";
import {GetServerSideProps} from "next";

interface CloneInnerPageInterface {
    slug: any,
    pageContent: any
}

interface PageInterface {
    _id:string,
    EaseBanner:{
        title:string,
        subtitle:string
    }
}

const EasePage: FC<CloneInnerPageInterface> = ({ slug, pageContent }) => {
    const { setIsLoading } = useContext(LoaderContext);
    const _id = pageContent.filter((dd:any) => dd.name === slug)[0]._id;
    const data = pageContent.filter((dd: any) => dd.name === slug)[0].data;
    const [params, setParams] = useState<PageInterface>({
        _id:_id,
        EaseBanner:{
            title: data.EaseBanner.title,
            subtitle: data.EaseBanner.subtitle
        }
    })

    const save = async () => {
        try {
            setIsLoading(true);
            const response = await fetch('/api/industry/PUT/EaseComponent', {
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

    return <PrivateLayout title="Zuca - Ease Component">
        <div className="flex flex-col gap-[16px]">
            <div className="flex items-center gap-[16px]">
                <h3 className="flex-1 text-[21px] tracking-[1.2px] font-semibold text-[#101D2C]">
                    Ease Banner
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
                            label="Title"
                            placeholder="Title"
                            value={params.EaseBanner.title}
                            onChange={(e) =>
                                setParams({
                                    ...params,
                                    EaseBanner: {
                                        ...params.EaseBanner,
                                        title: e.target.value,
                                    },
                                })
                            }
                            className="rounded admin-input"
                        />
                    </div>
                    <div className="p-[10px]">
                        <Input
                            label="Sub Title"
                            placeholder="Sub Title"
                            value={params.EaseBanner.subtitle}
                            onChange={(e) =>
                                setParams({
                                    ...params,
                                    EaseBanner: {
                                        ...params.EaseBanner,
                                        subtitle: e.target.value,
                                    },
                                })
                            }
                            className="rounded admin-input"
                        />
                    </div>
                </div>
            </div>
        </div>
    </PrivateLayout>
}

export default EasePage;

export const getServerSideProps: GetServerSideProps = async (context) => {
    const slug: any = context.query.slug;
    const timestamp = Date.now();
    const response: any = await fetch(`http://localhost:3000/api/industry/GET/indsutries`)
        .then((response) => response.json())

    return {
        props: {
            slug: slug,
            pageContent: response || null
        }
    }
}