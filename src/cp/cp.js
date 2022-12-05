import { fork } from 'child_process';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const args = process.argv.slice(2);
const __dirname = dirname(fileURLToPath(import.meta.url));
const scriptFilePath = join(__dirname, 'files', 'script.js');

const spawnChildProcess = async (args) => {
    const childProcess = fork(scriptFilePath, args, { silent: true });

    process.stdin.on('data', (data) => {
        childProcess.stdin.write(data.toString());
    });

    childProcess.stdout.on('data', (data) => {
        process.stdout.write(data.toString());
    });
};

spawnChildProcess(args);