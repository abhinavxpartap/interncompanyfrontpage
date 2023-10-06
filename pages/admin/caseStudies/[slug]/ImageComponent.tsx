import React, {FC, useContext, useState} from "react";
import {Button} from "../../../../utils/Button";
import {LoaderContext} from "../../../../context/LoaderContext";
import {ImageOverlay} from "../../../../utils/Admin/ImageOverlay";
import PrivateLayout from "../../../../components/Layout/privateLayout";
import {GetServerSideProps} from "next";

interface List{
    src:string,
    [key:string]:string
}

interface PageInterface{
    _id:string,
    imagePort:List[],
}
interface CloneInnerPageInterface {
    slug: any,
    pageContent: any
}

const ImageComponent: FC<CloneInnerPageInterface> = ({ slug, pageContent }) => {
    const { setIsLoading } = useContext(LoaderContext);
    const _id = pageContent.filter((dd:any) => dd.name === slug)[0]._id;
    const data = pageContent.filter((dd: any) => dd.name === slug)[0].data;
    const [params, setParams] = useState<PageInterface>({
        _id:_id,
        imagePort:data.imagePort
    })

    const updateImage = (index: number, field: string, value: string) => {
        setParams((prevParams) => {
            const updatedHeader = [...prevParams.imagePort];
            updatedHeader[index][field] = value;
            return {
                ...prevParams,
                imagePort: updatedHeader,
            };
        });
    };


    const addImages = () => {
        setParams((prevState) => ({
            ...prevState,
            imagePort: [...prevState.imagePort, {
                src:"",
            }],
        }));
    };

    const removeImage = (indexToRemove:number) => {
        setParams((prevState) => ({
            ...prevState,
            imagePort: prevState.imagePort.filter((_:any, index:number) => index !== indexToRemove),
        }));
    };

    const save = async () => {
        try {
            setIsLoading(true);
            const response = await fetch('/api/caseStudies/PUT/ImageComponent', {
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

    return <PrivateLayout title="Zuca - Image List Component">
        <div className="flex flex-col gap-[16px]">
            <div className="flex items-center gap-[16px]">
                <h3 className="flex-1 text-[21px] tracking-[1.2px] font-semibold text-[#101D2C]">
                    Images List Component
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
                    onClick={addImages}
                />
            </div>
            <div className="grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 gap-[16px]">
                {params.imagePort && params.imagePort.length>0 && params.imagePort.map((item:List, index: number) => {
                    return <div key={index} className="rounded border overflow-hidden bg-white">
                        <div className="p-[5px] relative">
                            <div className="p-[5px]">
                                <ImageOverlay
                                    withOverlay
                                    url={item.src}
                                    id={`icon-${index}`}
                                    className="h-[620px]"
                                    remove={() => removeImage(index)}
                                    onUploadSuccess={(url) => updateImage(index, "src", url)}
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

export default ImageComponent;

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
