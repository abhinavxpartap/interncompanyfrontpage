import { NextApiRequest, NextApiResponse } from 'next';
import {MongoClient, MongoClientOptions} from 'mongodb';
import { MONGODB_URI } from './config';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const { username, password } = req.body;

        try {
            const client = new MongoClient(MONGODB_URI, {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            } as MongoClientOptions);

            await client.connect();

            const db = client.db('Alumel');
            const collection = db.collection('users'); // Replace 'users' with your collection name

            const user = await collection.findOne({ username });

            if (!user) {
                res.status(401).json({ success: false, message: 'User not found' });
                return;
            }

            if (password === user.password) {
                res.status(200).json({ success: true, message: 'Login successful' });
            } else {
                res.status(401).json({ success: false, message: 'Login failed' });
            }
                client.close();
        } catch (error) {
            console.error('Error connecting to MongoDB:', error);
            res.status(500).json({ success: false, message: 'Server error' });
        }
    } else {
        res.status(405).json({ success: false, message: 'Method not allowed' });
    }
}
