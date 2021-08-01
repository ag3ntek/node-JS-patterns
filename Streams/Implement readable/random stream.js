import { Readable } from 'stream';
import Chance from 'chance';

const chance = new Chance();

export class RandomStream extends Readable {

    constructor(options) {
        super(options);
        this.emittedBytes = 0;
    }

    _read(size) { // Recordemos que por el underscore es considerado un método no público y no debería llamarse directamente
                  // Solo debe llamarse para ser implementado por sus subclases
        const chunk = chance.string({length: size});
        this.push(chunk, 'utf8'); //Hace un push del stream dentro del buffer interno, como estamos haciendo un push de los streams, necesitamos especificar el encoding
                                  // Siempre que se haga un push al buffer, se debe verificar si el false, en ese sentido, el stream ha de llegar al límite del 
                                  // highWaterMark
        this.emittedBytes += chunk.length;
        if (chance.bool({ likelihood: 100}) ) {
            this.push(null) // Al mandar un null al buffer indica un EOF
        }
    }
}
