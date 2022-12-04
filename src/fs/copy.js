import { cp } from 'node:fs/promises';
import { join } from 'path';
import { FS_DIR, FS_FILES_DIR, ERROR_HANDLER } from './constants.js';

const copy = async () => {
    const filesCopyDir = join(FS_DIR, "/files_copy/");

    try {
        await cp(FS_FILES_DIR, filesCopyDir, { recursive: true, force: false, errorOnExist: true });
    } catch (err) {
        ERROR_HANDLER();
    }
};

await copy();