import { rename as changeFileName, readdir } from 'node:fs/promises';
import { join } from 'path';
import { FS_ERROR, FS_DIR, FS_FILES_DIR } from './constants.js';

export const rename = async () => {
    const wrongFileDir = join(FS_DIR, "/files", "wrongFilename.txt");
    const propFileDir = join(FS_DIR, "/files", "properFilename.md");

    try {
        const all_files = await readdir(FS_FILES_DIR);

        if (!all_files.includes("wrongFilename.txt") || all_files.includes("properFilename.md")) {
            throw new Error(FS_ERROR);
        } else {
            await changeFileName(wrongFileDir, propFileDir);
        }
    } catch (err) {
        console.log(`Error: ${err.message}`);
    }
};

await rename();