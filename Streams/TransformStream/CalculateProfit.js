import { createReadStream } from 'fs';
import parse from 'csv-parse';
import { FilterByCountry } from './filter-by-country.js'
import { SumProfit } from './sum-profit.js'

const csvParser = parse({ columns: true});

createReadStream('data.csv')
  .pipe(csvParser)                     // Por cada linea o fila, se emite un objeto que contiene las propiedades descritas en la pimera linea (type, country, profit).
  .pipe(new FilterByCountry('Italy'))  // Solo se van a mantener registros en el internal Buffer aquellos que su pais sea italia, el resto seran desechados.
  .pipe(new SumProfit())               // por cada registro, acumulamos la ganancia (profit) cuando toda la data sea procesada. 
  .pipe(process.stdout)                // Doy el resultado por el standard output