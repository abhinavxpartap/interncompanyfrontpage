import React, { useContext, useState } from "react";
import PrivateLayout from "../../../components/Layout/privateLayout";
import { convertToSlug } from "../../../utils/utils";
import { ImageOverlay } from "../../../utils/Admin/ImageOverlay";
import { Button } from "../../../utils/Button";
import { useRouter } from "next/router";
import { LoaderContext } from "../../../context/LoaderContext";
import { TextField } from "@mui/material";
import { Editor } from '@tinymce/tinymce-react';

const fieldNames: any = {
    title: "Title",
    body: "Body",
    meta_title: "Meta Title",
    description: "Description",
    meta_description: "Meta Description",
    meta_keywords: "Meta Keywords",
    image: "Image",
};

const Form: React.FC = () => {
    const router = useRouter();

    const {slug} = router.query;

    const {setIsLoading} = useContext(LoaderContext)

    const [errors, setErrors] = useState<any>("");

    const [params, setParams] = useState<any>({});

    const setParam = (key: string, value: any) => {
        setParams((prevParams: any) => {
            return {
                ...prevParams,
                [key]: value,
            };
        });
        setErrors((prevErrors: any) => {
            const {[key]: deletedKey, ...restErrors} = prevErrors;
            return restErrors;
        });
    };
    const save = async () => {
        setIsLoading(true);
        try {
            const requestBody = {
                title: params.title,
                slug: convertToSlug(params.title),
                body: JSON.stringify(params.body),
                meta_title: params.meta_title,
                description: params.description,
                meta_description: params.meta_description,
                meta_keywords: params.meta_keywords,
                image: params.image,
            };

            const response = await fetch("/api/Blog/POST/blogs", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(requestBody),
            });

            const data = await response.json();
            if (data.error) {
                console.log(data.error, "error");
            } else if (data.message) {
                router.push("/admin/blog/list");
                console.log(data.message, "success");
            }
        } catch (e: any) {
            console.log(e.message, "error");
        }
        setIsLoading(false);
    };



    return <PrivateLayout title="Enjoy Mondays Pre Launch - Blog Slug">
        <div className="flex items-center mb-[24px] gap-[12px]">
            <div className="flex-1">
                <h1 className="font-semibold text-[20px] tracking-[1px]">
                    Add New Blog
                </h1>
                <h3 className="font-medium text-[12px] tracking-[1px]">
                    Recommended Image Size: 1920x1080 & Allowed Image Format: .png, .jpg, .jpeg, .webp
                </h3>
            </div>
            <div>
                <Button
                    label={!slug ? 'Save' : 'Update'}
                    onClick={save}
                    color="secondary"
                    className="w-[100px] h-[40px] rounded"
                />
            </div>
        </div>
        <div className="flex flex-col gap-[12px]">
            <div className="flex gap-[12px] items-stretched">
                <div className="flex-1 bg-white rounded-[8px] overflow-hidden border">
                    <ImageOverlay
                        id="image"
                        withOverlay
                        url={params.image}
                        onUploadSuccess={(url) => {
                            setParam("image", url);
                        }}
                        className="object-cover w-full h-[265px]"
                        wrapperHeightClass="h-full"
                    />
                    <div className="pl-2">
                        <div className="inline text-[13px] font-medium text-red-700 p-2 w-auto rounded"
                             style={{background: "rgba(255,255,255,.75)"}}
                        >
                            Allowed Maximum Size: 4MB
                        </div>
                    </div>
                </div>
                <div className="w-[400px] flex flex-col gap-[16px]">
                    <div>
                        <TextField
                            fullWidth
                            label="Meta Title"
                            variant="outlined"
                            error={!!errors.meta_title}
                            helperText={errors.meta_title}
                            value={params.meta_title || ""}
                            onChange={e => setParam("meta_title", e.target.value)}
                        />
                    </div>
                    <div>
                        <TextField
                            fullWidth
                            label="Meta Keywords"
                            variant="outlined"
                            error={!!errors.meta_keywords}
                            helperText={errors.meta_keywords}
                            value={params.meta_keywords || ""}
                            onChange={e => setParam("meta_keywords", e.target.value)}
                        />
                    </div>
                    <div>
                        <TextField
                            rows={5}
                            fullWidth
                            multiline
                            label="Meta Description"
                            variant="outlined"
                            error={!!errors.meta_description}
                            helperText={errors.meta_description}
                            value={params.meta_description || ""}
                            onChange={e => setParam("meta_description", e.target.value)}
                        />
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-[16px] items-stretched">
                <div className="flex gap-[16px]">
                    <div className="flex-1">
                        <TextField
                            fullWidth
                            label="Title"
                            variant="outlined"
                            error={!!errors.title}
                            helperText={errors.title}
                            value={params.title || ""}
                            onChange={e => setParam("title", e.target.value)}
                        />
                    </div>
                    <div className="flex-1">
                        <TextField
                            disabled
                            fullWidth
                            label="Slug"
                            variant="outlined"
                            error={!!errors.title}
                            helperText={errors.title}
                            value={convertToSlug(params.title || "")}
                        />
                    </div>
                </div>
                <div>
                    <TextField
                        rows={5}
                        fullWidth
                        multiline
                        label="Description"
                        variant="outlined"
                        error={!!errors.description}
                        helperText={errors.description}
                        value={params.description || ""}
                        onChange={e => setParam("description", e.target.value)}
                    />
                </div>
            </div>
            <div>
                <div className="font-medium text-primary text-[14px] block pb-[10px]">
                    Body
                </div>
                <Editor
                    apiKey="952tjndgzfl5xhhoishqghgcnq8c6wtzfjvie21wefbt0fw2"
                    onEditorChange={(newValue, editor) => {
                        setParam('body', newValue);
                    }}
                    onInit={(evt, editor) => {
                        if (params.body) editor.setContent(params.body);
                    }}
                    value={params.body}
                    init={{
                        plugins:
                            'a11ychecker advcode advlist advtable anchor autocorrect autolink autoresize autosave casechange charmap checklist code codesample directionality editimage emoticons export footnotes formatpainter fullscreen image importcss inlinecss insertdatetime link linkchecker lists media mediaembed mentions mergetags nonbreaking pagebreak pageembed permanentpen powerpaste preview quickbars save searchreplace table tableofcontents template tinydrive tinymcespellchecker typography visualblocks visualchars wordcount',
                        automatic_uploads: true,
                        images_replace_blob_uris: true,
                    }}
                />
            </div>
        </div>
        <div className="flex justify-end mt-[24px]">
            <Button
                onClick={save}
                color="secondary"
                label={!slug ? 'Save' : 'Update'}
                className="w-[100px] h-[40px] rounded"
            />
        </div>
    </PrivateLayout>
}

export default Form;
