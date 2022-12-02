import { fileURLToPath } from 'url';
import { dirname } from 'path';

const FS_ERROR = 'FS operation failed',
      FS_DIR = dirname(fileURLToPath(import.meta.url));


export { FS_ERROR, FS_DIR };