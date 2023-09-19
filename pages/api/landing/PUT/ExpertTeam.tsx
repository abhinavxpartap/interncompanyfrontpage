import { NextApiRequest, NextApiResponse } from 'next';
import { MongoClient } from 'mongodb';
import { MongoClientOptions, ObjectId } from 'mongodb';
import { MONGODB_URI } from '../../config';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'PUT') {
        return res.status(405).end();
    }

    try {
        const { _id, bannerData, header } = req.body;

        if (!_id || !bannerData || !header) {
            return res.status(400).json({ error: 'Invalid request data' });
        }

        const client = new MongoClient(MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        } as MongoClientOptions);
        await client.connect();

        const db = client.db('Alumel');
        const collection = db.collection('expertTeam'); // Replace with your collection name

        const objectId = new ObjectId(_id); // Convert _id to ObjectId
        const existingDocument = await collection.findOne({ _id: objectId });

        if (!existingDocument) {
            return res.status(404).json({ error: 'Document not found' });
        }

        const result = await collection.updateOne(
            { _id: objectId },
            { $set: { bannerData, header } }
        );

        client.close();

        if (result.modifiedCount === 1) {
            res.status(200).json({ message: 'Update successful' });
        } else {
            res.status(500).json({ error: 'Update operation failed' });
        }
    } catch (error) {
        console.error('Error updating document:', error);
        res.status(500).json({ error: 'Server error' });
    }
}
