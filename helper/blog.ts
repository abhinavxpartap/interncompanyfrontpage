const getSingleBlog = async (slug?: string | string[]) => {
    const response = await fetch(`${process.env.BASE_URL}/api/Blog/GET/singleBlog?slug=${slug}`);
    return response.json();
};
const getSingleEvent = async (slug?: string | string[]) => {
    const response = await fetch(`${process.env.BASE_URL}/api/Event/GET/singleEvent?slug=${slug}`);
    return response;
};
const getSingleArticle = async (slug?: string | string[]) => {
    const response = await fetch(`${process.env.BASE_URL}/api/Article/GET/singleArticle?slug=${slug}`);
    return response.json();
};
const getSingleNews = async (slug?: string | string[]) => {
    const response = await fetch(`${process.env.BASE_URL}/api/News/GET/singleNews?slug=${slug}`);
    return response.json();
};
const getSingleJob = async (slug?: string | string[]) => {
    const response = await fetch(`${process.env.BASE_URL}/api/Job/GET/singleJob?slug=${slug}`);
    return response.json();
};

const getBlogs = async (page: number, limit: number) => {
    const response = await fetch(`${process.env.BASE_URL}/api/Blog/GET/blogs?page=${JSON.stringify(page)}&limit=${JSON.stringify(limit)}`);
    return response.json();
}
const getEvents = async (page: number, limit: number) => {
    const response = await fetch(`${process.env.BASE_URL}/api/Event/GET/events?page=${JSON.stringify(page)}&limit=${JSON.stringify(limit)}`);
    return response.json();
}
const getNews = async (page: number, limit: number) => {
    const response = await fetch(`${process.env.BASE_URL}/api/News/GET/news?page=${JSON.stringify(page)}&limit=${JSON.stringify(limit)}`);
    return response.json();
}
const getArticles = async (page: number, limit: number) => {
    const response = await fetch(`${process.env.BASE_URL}/api/Article/GET/articles?page=${JSON.stringify(page)}&limit=${JSON.stringify(limit)}`);
    return response.json();
}
const getJobs = async (page: number, limit: number) => {
    const response = await fetch(`${process.env.BASE_URL}/api/Jobs/GET/jobs?page=${JSON.stringify(page)}&limit=${JSON.stringify(limit)}`);
    return response.json();
}
const getAllBlogs = async () => {
    const response = await fetch(`${process.env.BASE_URL}/api/Blog/GET/blogs?withoutPagination=true`);
    return response.json();
}
const getAllNews = async () => {
    const response = await fetch(`${process.env.BASE_URL}/api/News/GET/news?withoutPagination=true`);
    return response.json();
}
const getAllArticles = async () => {
    const response = await fetch(`${process.env.BASE_URL}/api/Article/GET/articles?withoutPagination=true`);
    return response.json();
}
const getAllEvents = async () => {
    const response = await fetch(`${process.env.BASE_URL}/api/Event/GET/events?withoutPagination=true`);
    return response.json();
}
const getAllJobs = async () => {
    const response = await fetch(`${process.env.BASE_URL}/api/Job/GET/jobs?withoutPagination=true`);
    return response.json();
}

export const blogApi = {
    getSingleBlog,
    getSingleEvent,
    getSingleJob,
    getSingleNews,
    getSingleArticle,
    getAllBlogs,
    getAllEvents,
    getAllArticles,
    getAllNews,
    getAllJobs,
    getBlogs,
    getEvents,
    getNews,
    getJobs,
    getArticles
}
