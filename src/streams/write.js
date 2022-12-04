import { createWriteStream } from 'fs';
import { join } from 'path';
import { __dirname } from './constants.js';

const write = async () => {
    const fileToWriteDir = join(__dirname, 'files', 'fileToWrite.txt');
    const writeStream = createWriteStream(fileToWriteDir);

    process.stdin.on('data', (chunk) => {
        writeStream.write(chunk.toString());
    });
};

await write();