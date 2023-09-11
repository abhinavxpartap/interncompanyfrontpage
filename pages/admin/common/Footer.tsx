import React, { useContext, useState } from "react";
import { Button } from "../../../utils/Button";
import toast from "react-hot-toast";
import { LoaderContext } from "../../../context/LoaderContext";
import pageData from "../../../data/footer.json";
import { ImageOverlay } from "../../../utils/Admin/ImageOverlay";
import { Input } from "../../../utils/Input";
import PrivateLayout from "../../../components/Layout/privateLayout";
import { Img } from "../../../utils/Img";

interface ParamsInterface {
    title: string;
    buttonName: string;
    image: string;
}

interface SocialInterface {
    id: number;
    icon: string;
    alt: string;
    link: string;
}

interface HeaderDataInterface {
    title: string;
    id: number;
    link: string;
}

interface PageDataInterface {
    services: HeaderDataInterface[];
    about: HeaderDataInterface[];
    help: HeaderDataInterface[];
    social: SocialInterface[];
    companyContent: ParamsInterface;
}

const FooterPage = () => {
    const { setIsLoading } = useContext(LoaderContext);

    const [params1, setParams1] = useState<ParamsInterface>({
        title: pageData.companyContent.title,
        buttonName: pageData.companyContent.buttonName,
        image: pageData.companyContent.image,
    });

    const save = async (
        pageData: PageDataInterface,
        services: HeaderDataInterface[],
        social: SocialInterface[],
        help: HeaderDataInterface[],
        about: HeaderDataInterface[],
        params1: ParamsInterface
    ) => {
        setIsLoading(true);
        const dataToSave = {
            fileUrl: "/footer.json",
            updatedContent: JSON.stringify({
                ...pageData,
                services: services,
                about: about,
                help: help,
                social: social,
                companyContent: params1,
            }),
        };

        const response = await fetch("/api/save", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(dataToSave),
        });

        const data = await response.json();

        if (data.success) {
            toast.success("Changes saved successfully!");
        } else {
            toast.error(`Error saving changes: ${data.message}`);
        }
        setIsLoading(false);
    };

    const setBannerParams = (key: keyof ParamsInterface, value: string) => {
        const newParams = { ...params1 };
        newParams[key] = value;
        setParams1(newParams);
    };

    const [services, setServices] = useState<HeaderDataInterface[]>(
        pageData.services
    );

    const setParamsServices = (
        index: number,
        key: keyof HeaderDataInterface,
        value: string
    ): void => {
        const newCompanyService = [...services];
        newCompanyService[index] = {
            ...newCompanyService[index],
            [key]: value,
        };
        setServices(newCompanyService);
    };

    const [lastIdService, setLastIdService] = useState<number>(
        Math.max(...pageData.services.map((item) => item.id), 0)
    );

    const addServices = () => {
        const newCompanyService = [...services];
        const newIdService = lastIdService + 1;
        newCompanyService.push({
            id: newIdService,
            title: "",
            link: "",
        });
        setServices(newCompanyService);
        setLastIdService(newIdService);
    };

    const removeServices = (index: number) => {
        const newCompanyService = [...services];
        const removedItem = newCompanyService.splice(index, 1)[0];

        newCompanyService.forEach((item, idx) => {
            item.id = idx + 1;
        });

        setServices(newCompanyService);

        if (removedItem.id === lastIdService) {
            setLastIdService(
                Math.max(0, ...newCompanyService.map((item) => item.id))
            );
        }
    };

    const [about, setAbout] = useState<HeaderDataInterface[]>(
        pageData.about
    );

    const setParamsAbout = (
        index: number,
        key: keyof HeaderDataInterface,
        value: string
    ): void => {
        const newCompanyAbout = [...about];
        newCompanyAbout[index] = {
            ...newCompanyAbout[index],
            [key]: value,
        };
        setAbout(newCompanyAbout);
    };

    const [lastIdAbout, setLastIdAbout] = useState<number>(
        Math.max(...pageData.about.map((item) => item.id), 0)
    );

    const addAbout = () => {
        const newCompanyAbout = [...about];
        const newIdAbout = lastIdAbout + 1;
        newCompanyAbout.push({
            id: newIdAbout,
            title: "",
            link: "",
        });
        setAbout(newCompanyAbout);
        setLastIdAbout(newIdAbout);
    };

    const removeAbout = (index: number) => {
        const newCompanyAbout = [...about];
        const removedItem = newCompanyAbout.splice(index, 1)[0];

        newCompanyAbout.forEach((item, idx) => {
            item.id = idx + 1;
        });

        setAbout(newCompanyAbout);

        if (removedItem.id === lastIdAbout) {
            setLastIdAbout(
                Math.max(0, ...newCompanyAbout.map((item) => item.id))
            );
        }
    };

    const [help, setHelp] = useState<HeaderDataInterface[]>(
        pageData.help
    );

    const setParamsHelp = (
        index: number,
        key: keyof HeaderDataInterface,
        value: string
    ): void => {
        const newCompanyHelp = [...help];
        newCompanyHelp[index] = {
            ...newCompanyHelp[index],
            [key]: value,
        };
        setHelp(newCompanyHelp);
    };

    const [lastIdHelp, setLastIdHelp] = useState<number>(
        Math.max(...pageData.help.map((item) => item.id), 0)
    );

    const addHelp = () => {
        const newCompanyHelp = [...help];
        const newIdHelp = lastIdHelp + 1;
        newCompanyHelp.push({
            id: newIdHelp,
            title: "",
            link: "",
        });
        setHelp(newCompanyHelp);
        setLastIdHelp(newIdHelp);
    };

    const removeHelp = (index: number) => {
        const newCompanyHelp = [...help];
        const removedItem = newCompanyHelp.splice(index, 1)[0];

        newCompanyHelp.forEach((item, idx) => {
            item.id = idx + 1;
        });

        setHelp(newCompanyHelp);

        if (removedItem.id === lastIdHelp) {
            setLastIdHelp(
                Math.max(0, ...newCompanyHelp.map((item) => item.id))
            );
        }
    };

    const [social, setSocial] = useState<SocialInterface[]>(
        pageData.social
    );

    const setParamsSocial = (
        index: number,
        key: keyof SocialInterface,
        value: string
    ): void => {
        const newCompanySocial = [...social];
        newCompanySocial[index] = {
            ...newCompanySocial[index],
            [key]: value,
        };
        setSocial(newCompanySocial);
    };

    const [lastIdSocial, setLastIdSocial] = useState<number>(
        Math.max(...pageData.social.map((item) => item.id), 0)
    );

    const addSocial = () => {
        const newCompanySocial = [...social];
        const newIdSocial = lastIdSocial + 1;
        newCompanySocial.push({
            id: newIdSocial,
            icon: "",
            alt: "",
            link: "",
        });
        setSocial(newCompanySocial);
        setLastIdSocial(newIdSocial);
    };

    const removeSocial = (index: number) => {
        const newCompanySocial = [...social];
        const removedItem = newCompanySocial.splice(index, 1)[0];

        newCompanySocial.forEach((item, idx) => {
            item.id = idx + 1;
        });

        setSocial(newCompanySocial);

        if (removedItem.id === lastIdSocial) {
            setLastIdSocial(
                Math.max(0, ...newCompanySocial.map((item) => item.id))
            );
        }
    };

    const handleSaveClick = () => {
        save(pageData,services,social, help,about,params1);
    };

    return <PrivateLayout title="Zuca - Footer">
        <div className="flex flex-col gap-[16px]">
            <div className="flex items-center gap-[16px]">
                <h3 className="flex-1 text-[21px] tracking-[1.2px] font-semibold text-[#101D2C]">
                    Footer Section
                </h3>
                <Button
                    label="Save"
                    type="button"
                    className="px-[24px] py-[4px] rounded"
                    onClick={handleSaveClick}
                />
            </div>
            <div className="rounded border bg-white mt-[10px] p-[10px]">
                <div className="p-[10px]">
                    <ImageOverlay
                        url={params1.image}
                        onUploadSuccess={(url) => setBannerParams('image', url)}
                        className="object-cover h-full"
                        wrapperHeightClass="h-full"
                    />
                </div>
                <div className="p-[10px]">
                    <Input
                        label="Title"
                        placeholder="Title"
                        value={params1.title}
                        onChange={e => setBannerParams('title', e.target.value)}
                        className="rounded admin-input"
                    />
                </div>
                <div className="p-[10px]">
                    <Input
                        label="Button Name"
                        placeholder="Button Name"
                        value={params1.buttonName}
                        onChange={e => setBannerParams('buttonName', e.target.value)}
                        className="rounded admin-input"
                    />
                </div>
            </div>
            <div className="flex flex-col gap-[10px]">
                <div className="flex items-center gap-[16px]">
                    <h3 className="flex-1 text-[14px] tracking-[1.2px] font-semibold text-[#101D2C]">
                        Footer Service Section
                    </h3>
                    <Button
                        label="Save"
                        type="button"
                        className="px-[24px] py-[4px] rounded"
                        onClick={handleSaveClick}
                    />
                    <Button
                        label="Add New"
                        type="button"
                        className="px-[24px] py-[4px] rounded"
                        onClick={addServices}
                    />
                </div>
            <div className="grid xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-[16px]">
                {services.map((item: HeaderDataInterface, index: number) => {
                        return <div key={index} className="rounded border overflow-hidden bg-white">
                            <div className="flex justify-end p-2">
                                <div className="cursor-pointer" onClick={() => removeServices(index)}>
                                    <Img
                                        src="/images/remove.svg"
                                        alt="upload"
                                        className="w-[35px] h-[35px] bg-white rounded-full p-2"
                                    />
                                </div>
                            </div>
                            <div className="font-bold pl-[10px]">
                                {item.id}
                            </div>
                            <div className="p-[5px]">
                                <div className="p-[5px]">
                                    <Input
                                        label="Title"
                                        placeholder="Title"
                                        value={item.title}
                                        onChange={e => setParamsServices( index,"title", e.target.value)}
                                        className="rounded admin-input"
                                    />
                                </div>
                                <div className="p-[5px]">
                                    <Input
                                        label="Link"
                                        placeholder="Link"
                                        value={item.link}
                                        onChange={e => setParamsServices( index,"link", e.target.value)}
                                        className="rounded admin-input"
                                    />
                                </div>
                            </div>
                        </div>
                    })
                }
            </div>
            </div>
            <div className="flex flex-col gap-[10px]">
                <div className="flex items-center gap-[16px]">
                    <h3 className="flex-1 text-[14px] tracking-[1.2px] font-semibold text-[#101D2C]">
                        Footer About Section
                    </h3>
                    <Button
                        label="Save"
                        type="button"
                        className="px-[24px] py-[4px] rounded"
                        onClick={handleSaveClick}
                    />
                    <Button
                        label="Add New"
                        type="button"
                        className="px-[24px] py-[4px] rounded"
                        onClick={addAbout}
                    />
                </div>
                <div className="grid xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-[16px]">
                    {about.map((item: HeaderDataInterface, index: number) => {
                        return <div key={index} className="rounded border overflow-hidden bg-white">
                            <div className="flex justify-end p-2">
                                <div className="cursor-pointer" onClick={() => removeAbout(index)}>
                                    <Img
                                        src="/images/remove.svg"
                                        alt="upload"
                                        className="w-[35px] h-[35px] bg-white rounded-full p-2"
                                    />
                                </div>
                            </div>
                            <div className="font-bold pl-[10px]">
                                {item.id}
                            </div>
                            <div className="p-[5px]">
                                <div className="p-[5px]">
                                    <Input
                                        label="Title"
                                        placeholder="Title"
                                        value={item.title}
                                        onChange={e => setParamsAbout( index,"title", e.target.value)}
                                        className="rounded admin-input"
                                    />
                                </div>
                                <div className="p-[5px]">
                                    <Input
                                        label="Link"
                                        placeholder="Link"
                                        value={item.link}
                                        onChange={e => setParamsAbout( index,"link", e.target.value)}
                                        className="rounded admin-input"
                                    />
                                </div>
                            </div>
                        </div>
                    })
                    }
                </div>

            </div>
            <div className="flex flex-col gap-[10px]">
                <div className="flex items-center gap-[16px]">
                    <h3 className="flex-1 text-[14px] tracking-[1.2px] font-semibold text-[#101D2C]">
                        Footer Help Section
                    </h3>
                    <Button
                        label="Save"
                        type="button"
                        className="px-[24px] py-[4px] rounded"
                        onClick={handleSaveClick}
                    />
                    <Button
                        label="Add New"
                        type="button"
                        className="px-[24px] py-[4px] rounded"
                        onClick={addHelp}
                    />
                </div>
                <div className="grid xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-[16px]">
                    {help.map((item: HeaderDataInterface, index: number) => {
                        return <div key={index} className="rounded border overflow-hidden bg-white">
                            <div className="flex justify-end p-2">
                                <div className="cursor-pointer" onClick={() => removeHelp(index)}>
                                    <Img
                                        src="/images/remove.svg"
                                        alt="upload"
                                        className="w-[35px] h-[35px] bg-white rounded-full p-2"
                                    />
                                </div>
                            </div>
                            <div className="font-bold pl-[10px]">
                                {item.id}
                            </div>
                            <div className="p-[5px]">
                                <div className="p-[5px]">
                                    <Input
                                        label="Title"
                                        placeholder="Title"
                                        value={item.title}
                                        onChange={e => setParamsHelp( index,"title", e.target.value)}
                                        className="rounded admin-input"
                                    />
                                </div>
                                <div className="p-[5px]">
                                    <Input
                                        label="Link"
                                        placeholder="Link"
                                        value={item.link}
                                        onChange={e => setParamsHelp( index,"link", e.target.value)}
                                        className="rounded admin-input"
                                    />
                                </div>
                            </div>
                        </div>
                    })
                    }
                </div>
            </div>
            <div className="flex flex-col gap-[10px]">
                <div className="flex items-center gap-[16px]">
                    <h3 className="flex-1 text-[14px] tracking-[1.2px] font-semibold text-[#101D2C]">
                        Footer Socials Section
                    </h3>
                    <Button
                        label="Save"
                        type="button"
                        className="px-[24px] py-[4px] rounded"
                        onClick={handleSaveClick}
                    />
                    <Button
                        label="Add New"
                        type="button"
                        className="px-[24px] py-[4px] rounded"
                        onClick={addSocial}
                    />
                </div>
                <div className="grid xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-[16px]">
                    {social.map((item:SocialInterface, index: number) => {
                        return <div key={index} className="rounded border overflow-hidden bg-white">
                            <ImageOverlay
                                withOverlay
                                url={item.icon}
                                id={`image-${index}`}
                                onUploadSuccess={(url) => setParamsSocial(index, "icon", url)}
                                className="h-[120px]"
                                remove={() => removeSocial(index)}
                            />
                            <div className="p-[5px]">
                                <div className="font-bold pl-[10px]">
                                    {item.id}
                                </div>
                                <div className="p-[5px]">
                                    <Input
                                        label="Alt Text"
                                        placeholder="Alt Text"
                                        value={item.alt}
                                        onChange={e => setParamsSocial( index,"alt", e.target.value)}
                                        className="rounded admin-input"
                                    />
                                </div>
                                <div className="p-[5px]">
                                    <Input
                                        label="Link"
                                        placeholder="Link"
                                        value={item.link}
                                        onChange={e => setParamsSocial( index,"link", e.target.value)}
                                        className="rounded admin-input"
                                    />
                                </div>
                            </div>
                        </div>
                    })
                    }
                </div>
            </div>
        </div>
    </PrivateLayout>
}

export default FooterPage;