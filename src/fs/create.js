import { writeFile } from 'node:fs/promises';
import { join } from 'path';
import { FS_ERROR, FS_DIR } from './constants.js';

export const create = async () => {
        const filePath = join(FS_DIR, "/files", "fresh.txt");
        const text = "I am fresh and young";
        
        try {
            await writeFile(filePath, text, { flag: 'wx' });
          } catch (err) {
            throw new Error(FS_ERROR);
          }
};

await create();