import pinataSDK from '@pinata/sdk';
import { configDotenv } from 'dotenv';

configDotenv();

const pinata = new pinataSDK(process.env.PINATA_API_KEY, process.env.PINATA_API_SECRET);

export default pinata;


export async function pinFileToIPFS(file: any) {
    const result = await pinata.pinFileToIPFS(file);
    return result;
}