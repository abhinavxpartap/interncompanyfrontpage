import React, { useContext, useEffect, useState } from "react";
import PrivateLayout from "../../../../components/Layout/privateLayout";
import { Button } from "../../../../utils/Button";
import { LoaderContext } from "../../../../context/LoaderContext";
import { Autocomplete, MenuItem, TextField } from "@mui/material";
import { useRouter } from "next/router";
import { GetServerSideProps } from "next";
import { BlogInterface } from "../../../../types";
import { jobsApi } from "../../../../helper/jobs";

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
    const jobTypes = [
        'Full Time',
        'Remote Only',
        'Hybrid',
        'Part Time',
        'Freelance',
    ];
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
                jobType: params.job_type,
                zipCodes: params.zip_codes,
                description: params.description,
                meta_title: params.meta_title,
                meta_description: params.meta_description,
                meta_keywords: params.meta_keywords,
            };
            const response = await fetch("/api/Jobs/PUT/jobs", {
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
                router.push("/admin/blog/list");
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

    return <PrivateLayout title="Alumel Admin - Job">
        <div className="flex items-center mb-[24px] gap-[12px]">
            <div className="flex-1">
                <h1 className="font-semibold text-[20px] tracking-[1px]">
                    Update Job
                </h1>
                <h3 className="font-medium text-[12px] tracking-[1px]">
                    Recommended Image Size: 1920x1080 & Allowed Image Format: .png, .jpg, .jpeg, .webp
                </h3>
            </div>
            <div className="flex flex-row gap-[20px]">
                <Button
                    label="Back"
                    type="button"
                    onClick={() => router.push('/admin/blog/list')}
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
                <div className="flex-1 flex flex-col gap-[16px]">
                    <div>
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
                    <div>
                        <TextField
                            select
                            fullWidth
                            color="primary"
                            label="Job Type"
                            variant="outlined"
                            value={params.job_type}
                            onChange={(e) => setParam('job_type', e.target.value)}
                        >
                            {jobTypes.map((type, index) => (
                                <MenuItem key={index} value={type}>
                                    {type}
                                </MenuItem>
                            ))}
                        </TextField>
                    </div>
                    <div>
                        <Autocomplete
                            freeSolo
                            multiple
                            options={[]}
                            value={params.zip_codes}
                            getOptionLabel={(option) => option}
                            onChange={(e, newVal) => setParam('zip_codes', newVal)}
                            renderInput={(params) => (
                                <TextField
                                    {...params}
                                    required
                                    type="number"
                                    label="Enter Worksite Zip Code(s)"
                                    helperText="Press Enter after each worksite zip code"
                                    variant="outlined"
                                />
                            )}
                        />
                    </div>
                </div>
                <div className="flex-1 flex flex-col gap-[16px]">
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
                <div>
                    <TextField
                        rows={10}
                        fullWidth
                        multiline
                        label="Paste Job Description"
                        variant="outlined"
                        error={!!errors.description}
                        helperText={errors.description}
                        value={params.description || ""}
                        onChange={e => setParam("description", e.target.value)}
                    />
                </div>
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
    const data: BlogInterface = await jobsApi.getSingleJob(slug);
    return {
        props: {
            blog: data || null,
            slug: slug
        }
    }
}

export default Edit;
