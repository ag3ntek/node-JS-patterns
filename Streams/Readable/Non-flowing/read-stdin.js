process.stdin
    .on('readable', () => {
        let chunk;
        console.log('new data available');
        while((chunk = process.stdin.read()) !== null ) {
            console.log(`Chunk read (${chunk.length} bytes): ${chunk.toString()}`);
        }
    })
    .on('end', () => console.log('End of stream'))