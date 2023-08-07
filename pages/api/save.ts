import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

interface RequestBody {
    fileUrl: string;
    updatedContent: string;
}

const handler = (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'POST') {
        const { fileUrl, updatedContent }: RequestBody = req.body;

        try {
            fs.writeFileSync(path.join(process.cwd(), './data', fileUrl), updatedContent);
            res.status(200).json({ success: true });
        } catch (error) {
            res.status(500).json({ success: false, message: 'Error writing to file' });
        }
    } else {
        res.status(405).json({ success: false, message: 'Method not allowed' });
    }
};

export default handler;
