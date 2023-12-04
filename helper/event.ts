const getSingleEvent = async (slug?: string | string[]) => {
    const response = await fetch(`${process.env.BASE_URL}/api/Event/GET/singleEvent?slug=${slug}`);
    return response.json();
};
const getEvents = async (page: number, limit: number) => {
    const response = await fetch(`${process.env.BASE_URL}/api/Event/GET/events?page=${JSON.stringify(page)}&limit=${JSON.stringify(limit)}`);
    return response.json();
}
const getAllEvents = async () => {
    const response = await fetch(`${process.env.BASE_URL}/api/Event/GET/events?withoutPagination=true`);
    return response.json();
}

export const eventApi = {
    getSingleEvent,
    getAllEvents,
    getEvents
}
