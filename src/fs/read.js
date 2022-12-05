import { readFile } from 'node:fs/promises';
import { join } from 'path';
import { FS_FILES_DIR, ERROR_HANDLER } from './constants.js';

const read = async () => {
    const fileToReadPath = join(FS_FILES_DIR, "fileToRead.txt");

    try {
        const fileToReadContent = await readFile(fileToReadPath, { encoding: 'utf8' });
        console.log(fileToReadContent);
    } catch (err) {
        ERROR_HANDLER();
    }
};

await read();