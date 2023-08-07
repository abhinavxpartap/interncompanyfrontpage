import React from "react";
import { Img } from "../Img";

interface ImageOverlayInterface {
    id?: any;
    url: any;
    update?: () => any;
    remove?: () => any;
    withOverlay?: boolean;
    onUploadSuccess: (url: string) => any;
    className?: string;
    wrapperHeightClass?: string;
}

export const ImageOverlay: React.FC<ImageOverlayInterface> = (props) => {
    const { id, url, update, remove, withOverlay, onUploadSuccess, className, wrapperHeightClass } = props;

    const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!e.target.files || e.target.files.length === 0) return;

        const file = e.target.files[0];
        const reader = new FileReader();

        reader.onloadend = () => {
            onUploadSuccess(reader.result as string);
        };

        reader.readAsDataURL(file);

        // Upload the file to the server
        await uploadFile(file);
    };

    async function uploadFile (file: File) {
        const formData = new FormData();
        formData.append('file', file);

        const response = await fetch('/api/upload', {
            method: 'POST',
            body: formData,
        });

        const data = await response.json();

        if (data.success) {
            onUploadSuccess(data.filePath);
        } else {
            alert('Error uploading file: ' + data.message);
        }
    }

    return <div
        className={`flex items-center justify-center ${withOverlay ? 'bg-[#7f7f7f] p-[12px]' : ''} ${wrapperHeightClass} rounded relative`}>
        <Img
            src={url}
            alt="Image"
            className={`w-full ${className ? className : ''}`}
        />
        <div className="absolute top-0 left-0 flex justify-end w-full">
            <div className="p-2">
                <label htmlFor={`uploadImage-${id || "test"}`} className="cursor-pointer">
                    <Img
                        src="/images/upload.svg"
                        alt="upload"
                        className="w-[35px] h-[35px] bg-white rounded-full p-2"
                    />
                    <input className="hidden" type="file" id={`uploadImage-${id || "test"}`}
                           onChange={handleImageUpload}/>
                </label>
            </div>
            {
                remove && <div className="p-2">
                    <div className="cursor-pointer" onClick={remove}>
                        <Img
                            src="/images/remove.svg"
                            alt="upload"
                            className="w-[35px] h-[35px] bg-white rounded-full p-2"
                        />
                    </div>
                </div>
            }
        </div>
    </div>
}