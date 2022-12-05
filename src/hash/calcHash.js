import { createHash } from 'node:crypto';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const calculateHash = async () => {
    const __dirname = dirname(fileURLToPath(import.meta.url));
    const fileToCalcHashForPath = join(__dirname, '/files', 'fileToCalculateHashFor.txt');

    const hash = createHash('sha256').update(fileToCalcHashForPath).digest('hex');
    console.log(`Hash is: ${hash}`);
};

await calculateHash();