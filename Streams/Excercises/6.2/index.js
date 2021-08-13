import { createReadStream } from 'fs'
import parse from 'csv-parse';
import { NumberCrimes } from './number-crimes.js';
import { DangerousAreas } from './dangerous-areas.js';


const crimeStream = createReadStream('crime.csv');

const csvParser = parse({columns: true}); // Convierte a objeto un registro pasado
const csvParser2 = parse({columns: true}); // Convierte a objeto un registro pasado


const parseObject = crimeStream.pipe(csvParser);

parseObject
  .pipe(new NumberCrimes());

  parseObject
  .pipe(new DangerousAreas())