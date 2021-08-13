import { createReadStream, createWriteStream } from 'fs'
import { createGzip, createBrotliCompress, createDeflate } from 'zlib';
import { Monitor } from './monitor-compress.js';

const file = process.argv[2];
const inputStream = createReadStream(file);

// Esto es un fork
inputStream
.pipe(createGzip())
.pipe(new Monitor())
.pipe(createWriteStream(`${file}.gz`))

 inputStream
.pipe(createBrotliCompress())
.pipe(new Monitor())
.pipe(createWriteStream(`${file}br.gz`));

inputStream
.pipe(createDeflate())
.pipe(new Monitor())
.pipe(createWriteStream( (`${file}df.gz`)));