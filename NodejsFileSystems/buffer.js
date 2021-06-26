const buffer = Buffer.from('This data will be changed to a buffer'); // "from" method changes data into a buffer.
console.log('from():', buffer);
console.log('length:', buffer.length);
console.log('toString():', buffer.toString());  // changes buffer to data

const array = [Buffer.from('blank '), Buffer.from('another blank '), Buffer.from('final blank')];
const buffer2 = Buffer.concat(array);       // "concat" combines buffers in an array to one.
console.log('concat():', buffer2.toString());

const buffer3 = Buffer.alloc(5);            // allocates an empty buffer.
console.log('alloc():', buffer3);

// result: 
// from(): <Buffer 54 68 69 73 20 64 61 74 61 20 77 69 6c 6c 20 62 65 20 63 68 61 6e 67 65 64 20 74 6f 20 61 20 62 75 66 66 65 72>
// length: 37
// toString(): This data will be changed to a buffer
// concat(): blank another blank final blank  
// alloc(): <Buffer 00 00 00 00 00>