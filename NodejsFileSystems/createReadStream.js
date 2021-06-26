  
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