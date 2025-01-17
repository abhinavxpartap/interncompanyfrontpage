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

        const db = client.db('Alumel'); // Replace 'YourDatabaseName' with your database name
        const collection = db.collection('Services'); // Replace 'YourCollectionName' with your collection name
        const data = await collection.find({}).toArray(); // Retrieves a single object
        client.close();

        res.status(200).json(data);
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        res.status(500).json({ error: 'Server error' });
    }
}
