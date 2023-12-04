const getSingleJob = async (slug?: string | string[]) => {
    const response = await fetch(`${process.env.BASE_URL}/api/Job/GET/singleJob?slug=${slug}`);
    return response.json();
};
const getJobs = async (page: number, limit: number) => {
    const response = await fetch(`${process.env.BASE_URL}/api/Job/GET/jobs?page=${JSON.stringify(page)}&limit=${JSON.stringify(limit)}`);
    return response.json();
}
const getAllJobs = async () => {
    const response = await fetch(`${process.env.BASE_URL}/api/Job/GET/jobs?withoutPagination=true`);
    return response.json();
}

export const jobsApi = {
    getSingleJob,
    getAllJobs,
    getJobs
}
