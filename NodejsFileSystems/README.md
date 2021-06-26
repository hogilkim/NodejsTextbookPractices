1. Buffer (buffer.js):
When reading a data, Node stores data into certain memory, and let developers to modify the data.
"Buffer" is the stored data in a memory.

2. Stream (createReadStream.js):
Buffer stores all data into a memory. In this case, when Node is acting as a server, using buffers could be too heavy.
ex) if want to send 100MB data, would need 1GB if there are 10 people.
Stream is a good option. Stream sends data multiple times with small amount of buffer
ex) use 1MB buffer, want to send 100MB data -> send 100 times.

