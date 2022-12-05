import { createUnzip } from 'zlib';
import { createReadStream, createWriteStream } from 'fs';
import { __dirname, comressedFilePath, fileToComressPath } from './constants.js';

const decompress = async () => {
    const decompress = createUnzip();
    const source = createReadStream(comressedFilePath);
    const destination = createWriteStream(fileToComressPath);

    source.pipe(decompress).pipe(destination);
};

await decompress();