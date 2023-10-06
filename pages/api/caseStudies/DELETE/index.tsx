import {NextApiRequest, NextApiResponse} from 'next';
import {MongoClient, MongoClientOptions, ObjectId} from 'mongodb';
import {MONGODB_URI} from '../../config';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'DELETE') {
        return res.status(405).end();
    }

    try {
        const { serviceId } = req.query;

        if (!serviceId) {
            return res.status(400).json({ error: 'Invalid request data' });
        }

        const client = new MongoClient(MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        } as MongoClientOptions);
        await client.connect();

        const db = client.db('Alumel');
        const collection = db.collection('Portfolios');

        // Check if serviceId is an array and extract the first element
        const objectId = Array.isArray(serviceId) ? serviceId[0] : serviceId;

        // Ensure that objectId is a single string
        if (typeof objectId !== 'string') {
            return res.status(400).json({ error: 'Invalid service ID format' });
        }

        // Attempt to create an ObjectId
        const objectIdInstance = new ObjectId(objectId);

        // Delete the service by its _id
        const result = await collection.deleteOne({ _id: objectIdInstance });

        client.close();

        if (result.deletedCount === 1) {
            res.status(200).json({ message: 'Service deleted successfully' });
        } else {
            res.status(404).json({ error: 'Service not found' });
        }
    } catch (error) {
        console.error('Error deleting service:', error);
        res.status(500).json({ error: 'Server error' });
    }
}
