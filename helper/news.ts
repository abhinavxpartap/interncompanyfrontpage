const getSingleNews = async (slug?: string | string[]) => {
    const response = await fetch(`${process.env.BASE_URL}/api/News/GET/singleNews?slug=${slug}`);
    return response.json();
};
const getNews = async (page: number, limit: number) => {
    const response = await fetch(`${process.env.BASE_URL}/api/News/GET/news?page=${JSON.stringify(page)}&limit=${JSON.stringify(limit)}`);
    return response.json();
}
const getAllNews = async () => {
    const response = await fetch(`${process.env.BASE_URL}/api/News/GET/news?withoutPagination=true`);
    return response.json();
}

export const newsApi = {
    getSingleNews,
    getAllNews,
    getNews
}
