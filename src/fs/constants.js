import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const FS_ERROR = 'FS operation failed';
const FS_DIR = dirname(fileURLToPath(import.meta.url));
const FS_FILES_DIR = join(FS_DIR, "/files/");

const ERROR_HANDLER = async () => {
        try {
            throw new Error(FS_ERROR);
        } catch (err) {
            console.log(`Error: ${err.message}`);
        }
    };

export { FS_ERROR, FS_DIR, FS_FILES_DIR, ERROR_HANDLER };