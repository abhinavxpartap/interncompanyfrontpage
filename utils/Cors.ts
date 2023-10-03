import Cors from 'cors';
import {NextApiRequest, NextApiResponse} from 'next';

const corsMiddleware = Cors({
    origin: '*', // Set the desired origin or specify a list of allowed origins
    methods: ['GET', 'POST', 'OPTIONS'], // Set the allowed HTTP methods
    allowedHeaders: ['Content-Type'], // Set the allowed headers
});

const cors = (handler: any) => async (req: NextApiRequest, res: NextApiResponse) => {
    await new Promise((resolve, reject) => {
        corsMiddleware(req, res, (result: any) => {
            if (result instanceof Error) {
                return reject(result);
            }
            return resolve(result);
        });
    });

    return handler(req, res);
};

export default cors;
