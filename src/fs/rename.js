import { rename as changeFileName, readdir } from 'node:fs/promises';
import { join } from 'path';
import { FS_ERROR, FS_DIR, FS_FILES_DIR } from './constants.js';

const rename = async () => {
    const wrongFilePath = join(FS_DIR, "/files", "wrongFilename.txt");
    const propFilePath = join(FS_DIR, "/files", "properFilename.md");

    try {
        const allFiles = await readdir(FS_FILES_DIR);

        if (!allFiles.includes("wrongFilename.txt") || allFiles.includes("properFilename.md")) {
            throw new Error(FS_ERROR);
        } else {
            await changeFileName(wrongFilePath, propFilePath);
        }
    } catch (err) {
        console.log(`Error: ${err.message}`);
    }
};

await rename();