process.stdin
    .on('data', (chunk) => {
        console.log('new data available');
        console.log(`Chunk read (${chunk.length} bytes): ${chunk.toString()}`);
    })
    .on('end', () => console.log('End of stream'))