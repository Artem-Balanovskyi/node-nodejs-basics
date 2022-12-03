import { readdir } from 'node:fs/promises';
import { FS_FILES_DIR, ERROR_HANDLER } from './constants.js';

const list = async () => {
    try {
        const allFiles = await readdir(FS_FILES_DIR);
        console.log(allFiles);
    } catch (err) {
        ERROR_HANDLER();
    }
};

await list();