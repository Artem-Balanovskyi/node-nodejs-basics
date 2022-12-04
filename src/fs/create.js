import { writeFile } from 'node:fs/promises';
import { join } from 'path';
import { FS_FILES_DIR, ERROR_HANDLER } from './constants.js';

export const create = async () => {
  const freshFilePath = join(FS_FILES_DIR, "fresh.txt");
  const text = "I am fresh and young";

  try {
    await writeFile(freshFilePath, text, { flag: 'wx' });
  } catch (err) {
    ERROR_HANDLER()
  }
};

await create();