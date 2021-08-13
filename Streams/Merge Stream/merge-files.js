import { createWriteStream, createReadStream } from 'fs';
import split from 'split';

const destinationFile = process.argv[2];
const sourceFiles = process.argv.slice(3);

let processedFiles = 0;
const destinationStream = createWriteStream(destinationFile);

for(const file of sourceFiles)  {
    console.log(file);
    const sourceStream = createReadStream( file, { highWaterMark: 16} );
    sourceStream.on('end', () => {
        if(++processedFiles === sourceFiles.length) {  
          destinationStream.end();
          console.log('destination file created');
        }
    })

    sourceStream
        .pipe(split(line => {
            console.log(line)
            return line
        }))
        .pipe(destinationStream, { end: false})
}
