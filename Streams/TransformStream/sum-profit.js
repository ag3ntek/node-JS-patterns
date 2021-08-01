import { Transform } from 'stream';

export class SumProfit extends Transform {

    constructor(options = {}) {
      options.objectMode = true;
      super(options);
      this.total = 0;
    }

    _transform(record, enc, cb) { // Hay que mencionar que en este caso no hacemos un llamado al push, ya que no necesitamos que los valores se emitan mientras 
                                  // la data fluye por el stream
        this.total += Number.parseFloat(record.profit);
        cb(); // Llamo al callback para indicar que el registro se ha procesado y se puede procesar otro registro
    }
    
    _flush(cb) { // Hay que recordar tambien que el metodo flush es invocado automaticamente antes de que el stream sea cerrado
      this.push(this.total.toString());
      cb();
    }

}