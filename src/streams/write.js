import { createWriteStream } from 'fs';
import { join } from 'path';
import { __dirname } from './constants.js';

const write = async () => {
    const fileToWritePath = join(__dirname, 'files', 'fileToWrite.txt');
    const writeStream = createWriteStream(fileToWritePath);

    process.stdin.on('data', (chunk) => {
        writeStream.write(chunk.toString());
    });
};

await write();