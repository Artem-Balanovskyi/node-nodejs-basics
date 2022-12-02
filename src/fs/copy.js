import { cp } from 'node:fs/promises';
import { join } from 'path';
import { FS_ERROR, FS_DIR } from './constants.js';

export const copy = async () => {
    const files_dir = join(FS_DIR, "/files/");
    const files_copy_dir = join(FS_DIR, "/files_copy/");

    try {
        await cp(files_dir,files_copy_dir, {recursive: true, force: false, errorOnExist: true});
    } catch (err) {
        throw new Error(FS_ERROR);
    }

};

copy();