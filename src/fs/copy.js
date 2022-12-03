import { cp } from 'node:fs/promises';
import { join } from 'path';
import { FS_DIR, FS_FILES_DIR, ERROR_HANDLER } from './constants.js';

export const copy = async () => {
    const files_copy_dir = join(FS_DIR, "/files_copy/");

    try {
        await cp(FS_FILES_DIR, files_copy_dir, {recursive: true, force: false, errorOnExist: true});
    } catch (err) {
        ERROR_HANDLER();
    }
};

copy();