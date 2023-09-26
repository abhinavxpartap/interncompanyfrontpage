import { NextApiRequest, NextApiResponse } from 'next';
import { MongoClient } from 'mongodb';
import { MongoClientOptions } from 'mongodb';
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
        const collection = db.collection('ContactUs');
        const result = await collection.findOne();

        client.close();

        res.status(200).json(result);
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        res.status(500).json({ error: 'Server error' });
    }
}
