import { createGzip } from 'zlib';
import { createReadStream, createWriteStream } from 'fs';
import { __dirname, fileToComressPath, comressedFilePath } from './constants.js';

const compress = async () => {
    const compress = createGzip();
    const source = createReadStream(fileToComressPath);
    const destination = createWriteStream(comressedFilePath);

    source.pipe(compress).pipe(destination);
};

await compress();