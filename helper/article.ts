const getSingleArticle = async (slug?: string | string[]) => {
    const response = await fetch(`${process.env.BASE_URL}/api/Article/GET/singleArticle?slug=${slug}`);
    return response.json();
};
const getArticles = async (page: number, limit: number) => {
    const response = await fetch(`${process.env.BASE_URL}/api/Article/GET/articles?page=${JSON.stringify(page)}&limit=${JSON.stringify(limit)}`);
    return response.json();
}
const getAllArticles = async () => {
    const response = await fetch(`${process.env.BASE_URL}/api/Article/GET/articles?withoutPagination=true`);
    return response.json();
}

export const articleApi = {
    getSingleArticle,
    getAllArticles,
    getArticles
}
