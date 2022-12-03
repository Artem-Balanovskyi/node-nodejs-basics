import { unlink } from 'node:fs/promises';
import { join } from 'path';
import { FS_FILES_DIR, ERROR_HANDLER } from './constants.js';

const remove = async () => {
    const fileToRemoveDir = join(FS_FILES_DIR, "fileToRemove.txt");

    try {
        await unlink(fileToRemoveDir);
    } catch (err) {
        ERROR_HANDLER();
    }
};

await remove();