  
const fs = require('fs');

const readStream = fs.createReadStream('./readme.txt', { highWaterMark: 16 });  // makes read - stream. highWaterMark: size of buffer (Byte). default is 64KB
const data = [];

readStream.on('data', (chunk) => {
  data.push(chunk);
  console.log('data :', chunk, chunk.length);
});

readStream.on('end', () => {
  console.log('end :', Buffer.concat(data).toString());
});

readStream.on('error', (err) => {
  console.log('error :', err);
});

// result: 
// data : <Buffer 31 20 32 20 33 20 34 20 35 20 36 20 37 20 38 20> 16
// data : <Buffer 39 20 31 30 20 31 31 20 31 32 20 31 33 20 31 34> 16
// data : <Buffer 20 31 35 20 31 36 20 31 37 20 31 38 20 31 39 20> 16
// data : <Buffer 32 30 20 32 31 20 32 32 20 32 33 20 32 34 20 32> 16
// data : <Buffer 35 20 32 36 20 32 37 20 32 38 20 32 39 20 33 30> 16
// data : <Buffer 20 33 31 20 33 32 20 33 33 20 33 34 20 33 35 20> 16
// data : <Buffer 33 36 20 33 37 20 33 38 20 33 39 20 34 30> 14
// end : 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37 38 39 40