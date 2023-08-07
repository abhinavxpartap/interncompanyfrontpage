import multer from 'multer';

const storage = multer.diskStorage({
    destination: './public/images',
    filename: (req:any, file:any, cb:any) => {
        const uniqueName = `${Date.now()}-${file.originalname}`;
        cb(null, uniqueName);
    },
});

const upload = multer({ storage });

const uploadMiddleware = (req: any, res: any) => {
    return new Promise<void>((resolve, reject) => {
        upload.single('file')(req, res, (err:any) => {
            if (err) reject(err);
            resolve(undefined);
        });
    });
};

const handler = async (req: any, res: any) => {
    if (req.method === 'POST') {
        try {
            await uploadMiddleware(req, res);

            const filePath = `/images/${req.file.filename}`;
            res.status(200).json({ success: true, filePath });
        } catch (error) {
            res.status(500).json({ success: false, message: 'Error uploading file', error });
        }
    } else {
        res.status(405).json({ success: false, message: 'Method not allowed' });
    }
};

export const config = {
    api: {
        bodyParser: false,
    },
};

export default handler;
