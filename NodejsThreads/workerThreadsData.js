const { Worker, isMainThread, parentPort, workerData,} = require('worker_threads');

if (isMainThread) { // when parent
    const threads = new Set();
    threads.add(new Worker(__filename, {    //first thread
        workerData: { start: 1 },
    }));
    threads.add(new Worker(__filename, {    //second thread
        workerData: { start: 2 },
    }));
    for (let worker of threads) {
        worker.on('message', message => console.log('from worker', message)); // recieves data from worker.
        worker.on('exit', () => {
        threads.delete(worker);
        if (threads.size === 0) {
            console.log('job done');
        }
        });
    }
} else {    // if worker
    const data = workerData;
    parentPort.postMessage(data.start + 100); //send data to parent
}


// result:
// from worker 101
// from worker 102
// job done