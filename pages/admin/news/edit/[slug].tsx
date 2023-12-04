import React, { useContext, useEffect, useState } from "react";
import PrivateLayout from "../../../../components/Layout/privateLayout";
import { ImageOverlay } from "../../../../utils/Admin/ImageOverlay";
import { Button } from "../../../../utils/Button";
import { LoaderContext } from "../../../../context/LoaderContext";
import { TextField } from "@mui/material";
import { useRouter } from "next/router";
import { GetServerSideProps } from "next";
import { convertToSlug } from "../../../../utils/utils";
import { Editor } from "@tinymce/tinymce-react";
import { newsApi } from "../../../../helper/news";

const fieldNames: any = {
    title: "Title",
    body: "Body",
    meta_title: "Meta Title",
    description: "Description",
    meta_description: "Meta Description",
    meta_keywords: "Meta Keywords",
    image: "Image",
};

interface BlogEditFormInterface {
    blog: any;
}

const Edit: React.FC<BlogEditFormInterface> = (props) => {
    const router: any = useRouter();
    const {setIsLoading} = useContext(LoaderContext)
    const [errors, setErrors] = useState<any>("");

    const [imageUrl, setImageUrl] = useState<string>('');

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

        const emptyParams: any = Object.keys(params).filter(key => !params[key]);

        if (emptyParams.length > 0) {
            const newErrors: any = emptyParams.reduce((acc: any, cur: any) => {
                acc[cur] = `${fieldNames[cur]} is required`;
                return acc;
            }, {});
            setErrors((prevErrors: any) => ({ ...prevErrors, ...newErrors }));
        }

        if (Object.keys(errors).length > 0 || emptyParams.length > 0) {
            setIsLoading(false);
            return;
        }

        try {
            const requestBody = {
                id: params._id,
                title: params.title,
                slug: convertToSlug(params.title),
                body: params.body,
                meta_title: params.meta_title,
                description: params.description,
                meta_description: params.meta_description,
                meta_keywords: params.meta_keywords,
                image: params.image,
            };
            const response = await fetch("/api/News/PUT/news", {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json", // Set the content type to JSON
                },
                body: JSON.stringify(requestBody), // Convert the request body to JSON
            });

            const data = await response.json();
            if (data.error) {
                console.log(data.error);
            } else if (data.message) {
                router.push("/admin/news/list");
            }
        } catch (e: any) {
            console.log(e);
        }
        setIsLoading(false);
    };


    useEffect(() => {
        setIsLoading(true);
        setParams(props.blog ? props.blog : {});
        setImageUrl(props.blog ? props.blog.image : '');
        // setIsFeatured(props.blog ? JSON.parse(props.blog.is_featured) : false);
        setIsLoading(false);
    }, [props]);

    return <PrivateLayout title="Alumel - News">
        <div className="flex items-center mb-[24px] gap-[12px]">
            <div className="flex-1">
                <h1 className="font-semibold text-[20px] tracking-[1px]">
                    Update News
                </h1>
                <h3 className="font-medium text-[12px] tracking-[1px]">
                    Recommended Image Size: 1920x1080 & Allowed Image Format: .png, .jpg, .jpeg, .webp
                </h3>
            </div>
            <div className="flex flex-row gap-[20px]">
                <Button
                    label="Back"
                    type="button"
                    onClick={() => router.push('/admin/news/list')}
                    color="secondary"
                    className="px-[24px] py-[4px] rounded font-bold border-black"
                />
                <Button
                    label="Update"
                    type="button"
                    onClick={save}
                    color="secondary"
                    className="px-[24px] py-[4px] rounded font-bold border-black"
                />
            </div>
        </div>
        <div className="flex flex-col gap-[12px]">
            <div className="flex gap-[12px] items-stretched">
                <div className="flex-1 bg-white rounded-[8px] overflow-hidden border">
                    <ImageOverlay
                        id="image"
                        withOverlay
                        url={imageUrl}
                        onUploadSuccess={(url) => {
                            setImageUrl(url);
                        }}
                        className="object-cover w-full h-[265px]"
                        wrapperHeightClass="h-full"
                    />
                    <div className="pl-2">
                        <div className="inline text-[13px] font-medium text-red-700 p-2 w-auto rounded" style={{ background: "rgba(255,255,255,.75)" }}>
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
                type="button"
                color="secondary"
                label="Update"
                className="w-[100px] h-[40px] rounded font-bold border-black"
            />
        </div>
    </PrivateLayout>
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const slug: any = context.query.slug;
    const data: any = await newsApi.getSingleNews(slug);
    return {
        props: {
            blog: data || null,
            slug: slug
        }
    }
}

export default Edit;
