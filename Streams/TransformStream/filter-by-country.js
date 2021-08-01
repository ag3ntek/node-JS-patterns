import { Transform } from 'stream';

export class FilterByCountry extends Transform {
  constructor(country, options = {}) {
    options.objectMode = true; // Seteamos esta opcion a true ya que sabemos que vamos a procesar objetos
    super(options);
    this.country = country;
  }

  _transform(record, enc, cb) {
      if(record.country == this.country) {
        this.push(record); // Con el push guardamos el registro en el internal buffer // Este dato es emitido mientras se procesan los datos
      }
      cb(); // Con la invocacion del callback sabemos si el registro se proceso y el stream esta listo para recibir otro registro
  }
}