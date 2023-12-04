import { NextApiRequest, NextApiResponse } from 'next';
import { MongoClient, MongoClientOptions } from 'mongodb';
import { MONGODB_URI } from '../../config';
import cors from '../../../../utils/Cors';

const getBlogBySlug = async (req: NextApiRequest, res: NextApiResponse) => {
    const { slug } = req.query;

    try {
        const client = new MongoClient(MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        } as MongoClientOptions);

        await client.connect();

        const db = client.db('Alumel'); // Replace 'YourDatabaseName' with your database name
        const collection = db.collection('news'); // Replace 'YourCollectionName' with your collection name
        const data = await collection.findOne({ slug: slug }); // Find a single document by slug

        client.close();

        if (data) {
            res.status(200).json(data);
        } else {
            res.status(404).json({ error: 'News not found' });
        }
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        res.status(500).json({ error: 'Server error' });
    }
};

export default cors(getBlogBySlug);
