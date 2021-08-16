import { StackCalculator } from "./StackCalculator.js";

const handlerCalculator = { // El handler define como se comportará el Proxy
                            // Este tiene unos métodos predefinidos o trap methods
    get: (target, property) => {
      if(property === 'divide') {
        // Método 'proxied'
        return function() {
            const divisor = target.peekValue();
            if( divisor === 0 ) {
                throw Error('Division by 0');
            }
            return target.divide();
        }
      }
      return target[property]; // Todos los métodos delegados
    }
}


const safeCalculator = new Proxy(new StackCalculator(), handlerCalculator);

safeCalculator.putValue(8);
safeCalculator.putValue(0);
console.log(safeCalculator.divide());