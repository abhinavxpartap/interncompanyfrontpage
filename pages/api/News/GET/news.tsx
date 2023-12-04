import { NextApiRequest, NextApiResponse } from 'next';
import { MongoClient, MongoClientOptions } from 'mongodb';
import { MONGODB_URI } from '../../config';

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    try {
        const client = new MongoClient(MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        } as MongoClientOptions);

        await client.connect();

        const db = client.db('Alumel');
        const collection = db.collection('news');

        const parsedPage = parseInt(req.query.page as string, 9) || 1; // Get the requested page from query parameters
        const parsedPageSize = parseInt(req.query.pageSize as string, 9) || 9; // Get the requested page size from query parameters
        const startIndex = (parsedPage - 1) * parsedPageSize;

        const totalItems = await collection.countDocuments(); // Count total documents

        const data = await collection.find({}).skip(startIndex).limit(parsedPageSize).toArray();

        client.close();

        const totalPages = Math.ceil(totalItems / parsedPageSize);

        res.status(200).json({
            page: parsedPage,
            pageSize: parsedPageSize,
            totalItems: totalItems,
            totalPages: totalPages,
            data: data,
        });
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        res.status(500).json({ error: 'Server error' });
    }
}
