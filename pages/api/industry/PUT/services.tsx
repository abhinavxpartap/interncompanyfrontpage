import { NextApiRequest, NextApiResponse } from 'next';
import { MongoClient, MongoClientOptions, ObjectId } from 'mongodb';
import { MONGODB_URI } from '../../config';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'PUT') {
        return res.status(405).end();
    }

    try {
        const { pages } = req.body;

        if (!Array.isArray(pages)) {
            return res.status(400).json({ error: 'Invalid request data' });
        }

        // Convert the _id field of each object in the pages array to ObjectId
        const updatedPages = pages.map(page => ({
            ...page,
            _id: new ObjectId(page._id)
        }));

        const client = new MongoClient(MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        } as MongoClientOptions);

        await client.connect();

        const db = client.db('Alumel');
        const collection = db.collection('Industries');  // Replace with your collection name

        // Iterate through the pages and update each corresponding document
        for (const page of updatedPages) {
            const result = await collection.updateMany(
                { _id: page._id },
                { $set: page }
            );

            if (result.modifiedCount !== 1) {
                // Handle update failure for this page
                console.error('Error updating document:', page._id);
            }
        }

        client.close();

        res.status(200).json({ success: true });
    } catch (error) {
        console.error('Error updating documents:', error);
        res.status(500).json({ error: 'Server error' });
    }
}
