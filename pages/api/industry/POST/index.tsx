import { NextApiRequest, NextApiResponse } from 'next';
import { MongoClient, MongoClientOptions, ObjectId } from 'mongodb';
import { MONGODB_URI } from '../../config';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'POST') {
        return res.status(405).end();
    }

    try {
        const { pages } = req.body;

        if (!pages || !Array.isArray(pages)) {
            return res.status(400).json({ error: 'Invalid request data' });
        }

        const client = new MongoClient(MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        } as MongoClientOptions);
        await client.connect();

        const db = client.db('Alumel');
        const collection = db.collection('Industries');

        // Clone the first page with the name "Data_Analytics"
        const cloneSourcePage = pages.find((page) => page.name === 'Data_Analytics');

        if (!cloneSourcePage) {
            client.close();
            return res.status(400).json({ error: 'Source page not found' });
        }

        const newPage = { ...cloneSourcePage, _id: new ObjectId() };

        const result = await collection.insertOne(newPage);

        client.close();

        if (result.acknowledged && result.insertedId) {
            res.status(201).json({ message: 'Page added successfully', newPage });
        } else {
            res.status(500).json({ error: 'Failed to create a new page' });
        }
    } catch (error) {
        console.error('Error adding page:', error);
        res.status(500).json({ error: 'Server error' });
    }
}
