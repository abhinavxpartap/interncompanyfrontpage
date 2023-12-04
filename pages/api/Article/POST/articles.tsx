import { NextApiRequest, NextApiResponse } from 'next';
import { MongoClient, MongoClientOptions } from 'mongodb';
import { MONGODB_URI } from '../../config';

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    try {
        if (req.method !== 'POST') {
            return res.status(405).json({ error: 'Method Not Allowed' });
        }

        // Extract data from the request body
        const { title, slug, body, meta_title, description, meta_description, meta_keywords, image } = req.body;

        // Validate required fields (title and slug)
        if (!title || !slug) {
            return res.status(400).json({ error: 'Title and slug are required' });
        }

        const client = new MongoClient(MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        } as MongoClientOptions);

        try {
            await client.connect();

            const db = client.db('Alumel');
            const collection = db.collection('article');

            // Create the blog entry object
            const newBlogEntry = {
                title:title,
                slug:slug,
                body: body,
                meta_title: meta_title,
                description: description,
                meta_description: meta_description,
                meta_keywords: meta_keywords,
                image: image,
            };

            // Insert the blog entry into the MongoDB collection
            const result = await collection.insertOne(newBlogEntry);

            // Respond with a success message and the ID of the newly created entry
            res.status(201).json({
                message: 'Article Created successfully',
                blogEntryId: result.insertedId,
            });
        } catch (error) {
            console.error('Error inserting into MongoDB:', error);
            res.status(500).json({ error: 'Server error' });
        } finally {
            await client.close();
        }
    } catch (error) {
        console.error('Error in request handling:', error);
        res.status(500).json({ error: 'Request handling error' });
    }
}
