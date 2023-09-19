import React, { useContext, useState, useEffect } from "react";
import {Input} from "../../../../utils/Input";
import {ImageOverlay} from "../../../../utils/Admin/ImageOverlay";
import {Button} from "../../../../utils/Button";
import toast from "react-hot-toast";
import {LoaderContext} from "../../../context/LoaderContext";
import PrivateLayout from "../../../../components/Layout/privateLayout";
import {BannerAdminInterface} from "../../../../types";

const BannerPage = () => {
    const {setIsLoading} = useContext(LoaderContext);

    const [params, setParams] = useState({
        _id :"",
        updatedBannerData:{
         title: "",
         subtitle: "",
         backgroundImage: "",
         buttonName: ""
       }
    })


    useEffect(() => {
        fetch("/api/landing/GET/Banner")
          .then((response) => response.json())
          .then((data) => {
            setParams({
              ...params,
              _id:data._id,
              updatedBannerData: {
                title: data.title,
                subtitle: data.subtitle,
                backgroundImage: data.backgroundImage,
                buttonName: data.buttonName,
              },
            });
          })
          .catch((error) => {
            console.error("Error fetching banner data:", error);
          });
      }, []);

    const save = async () => {
        try {
            setIsLoading(true);
            const response = await fetch('/api/landing/PUT/Banner', {
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

    return <PrivateLayout title="Zuca - Landing Banner">
        <div className="flex flex-col gap-[16px]">
            <div className="flex items-center gap-[16px]">
                <h3 className="flex-1 text-[21px] tracking-[1.2px] font-semibold text-[#101D2C]">
                    Landing Banner
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
                        url={params.updatedBannerData.backgroundImage}
                        onUploadSuccess={(url) =>
                            setParams({
                              ...params,
                              updatedBannerData: {
                                ...params.updatedBannerData,
                                backgroundImage: url,
                              },
                            })
                          }
                        className="object-cover h-full"
                        wrapperHeightClass="h-full"
                    />
                </div>

                <div className="rounded border bg-white p-[10px]">
                    <div className="p-[10px]">
                        <Input
                            label="Title"
                            placeholder="Title"
                            value={params.updatedBannerData.title}
                            onChange={(e) =>
                                setParams({
                                  ...params,
                                  updatedBannerData: {
                                    ...params.updatedBannerData,
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
                            value={params.updatedBannerData.subtitle}
                            onChange={(e) =>
                                setParams({
                                  ...params,
                                  updatedBannerData: {
                                    ...params.updatedBannerData,
                                    subtitle: e.target.value,
                                  },
                                })
                              }
                            className="rounded admin-input"
                        />
                    </div>
                    <div className="p-[10px]">
                        <Input
                            label="Button Name"
                            placeholder="Button Name"
                            value={params.updatedBannerData.buttonName}
                            onChange={(e) =>
                                setParams({
                                  ...params,
                                  updatedBannerData: {
                                    ...params.updatedBannerData,
                                    buttonName: e.target.value,
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

export default BannerPage;