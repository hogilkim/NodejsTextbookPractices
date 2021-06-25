const { Worker, isMainThread, parentPort, 
} = require('worker_threads');

if (isMainThread){ // if main thread
    const worker = new Worker(__filename);
    worker.on('message', message => console.log('from worker', message)); //recieves data from worker
    worker.on('exit', () => console.log('worker exit'));
    worker.postMessage('ping'); // send data to worker thread
} else {    // if worker thread
        parentPort.on('message', (value)=>{ //recieves data from parent
        console.log('from parent', value);
        parentPort.postMessage('pong'); // send data to parent thread.
        parentPort.close(); // disconnects worker thread from parent.
    })
}

// result: 
// from parent ping
// from worker pong
// worker exit