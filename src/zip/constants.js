import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const fileToComressPath = join(__dirname, 'files', 'fileToCompress.txt');
const comressedFilePath = join(__dirname, 'files', 'archive.gz');

export { __dirname, fileToComressPath, comressedFilePath };




