import { config } from 'dotenv';
config();

interface EnvVariables {
    MONGODB_URI: string;
    DATA_API_URL: string;
    DATA_API_KEY: string;
}

export const {
    MONGODB_URI,
    DATA_API_URL,
    DATA_API_KEY,
}: EnvVariables = process.env as any;
