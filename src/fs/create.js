import { writeFile } from 'node:fs/promises';
import { join } from 'path';
import { FS_FILES_DIR, ERROR_HANDLER } from './constants.js';

export const create = async () => {
        const fresh_file_path = join(FS_FILES_DIR, "fresh.txt");
        const text = "I am fresh and young";
        
        try {
            await writeFile(fresh_file_path, text, { flag: 'wx' });
          } catch (err) {
            ERROR_HANDLER()
          }
};

await create();