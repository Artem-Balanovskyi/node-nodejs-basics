import { Worker } from 'worker_threads';
import { cpus } from "os";
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const performCalculations = async () => {
    const promises = [];
    const __dirname = dirname(fileURLToPath(import.meta.url));
    const workerPath = join(__dirname, 'worker.js');
    console.log(workerPath)

    const createWorker = (workerData) => {
        return new Promise((resolve) => {
            const worker = new Worker(workerPath, { workerData })
                .on("message", result => { resolve({ 'status': 'resolved', 'data': result }) })
                .on('error', () => { resolve({ status: 'error', data: null }) })
        })
    }

    for (let i = 0; i < cpus().length; i++) {
        promises.push(createWorker(i + 10));
    }

    const results = (await Promise.allSettled(promises)).map((result) => {
        return result.value;
    });
    console.log(results);
};

await performCalculations();