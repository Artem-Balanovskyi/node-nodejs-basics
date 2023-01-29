import { createReadStream } from 'fs';
import { join } from 'path';
import { __dirname } from './constants.js';

const read = async () => {
    const fileToReadPath = join(__dirname, 'files', 'fileToRead.txt');
    const readStream = createReadStream(fileToReadPath);

    readStream.setEncoding('utf8').on('data', (chunk) => {
        process.stdout.write(chunk);
    });
};

await read()