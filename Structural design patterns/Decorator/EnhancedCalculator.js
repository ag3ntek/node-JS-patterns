import { StackCalculator } from "./StackCalculator.js";

class EnhancedCalculator {
    constructor(calculator) {
        this.calculator = calculator;
    }
    
    // En este caso estamos agregando funcionalidad, que es lo que hace el decorator pattern
    add() {
        const value1 = this.calculator.getValue();
        const value2 = this.calculator.getValue();
        const result = value1 + value2;

        this.calculator.putValue(result);
        return result;
    }

    // Por definición el decorator pattern tambien puede interceptar y aumentar comportamientos en las funciones de
    // la clase que decora
    divide() { 
        const divisor = this.calculator.peekValue();

        if(divisor === 0) {
          throw Error('Cannot divide by 0');
        }

        return this.calculator.divide();
    }

    putValue(value) {
        this.calculator.putValue(value);
    }

    getValue() {
        return this.calculator.getValue();
    }

    peekValue() {
        return this.calculator.getValue();
    }

    clear() {
        this.calculator.clear();
    }

    multiply() {
        return this.calculator.multiply();
    }
}


const calculator = new StackCalculator();
const enhancedCalculator = new EnhancedCalculator(calculator);

enhancedCalculator.putValue(8);
enhancedCalculator.putValue(0);
console.log(enhancedCalculator.divide());


// Tambien se pude hacer un monkeyt patching, esto implica cambiar la funcionalidad del objeto directamente
// y con esto tambien se conseguiría hacer monkey patching

//Tambien puedo hacer la implementación del decorator pattern a partir del uso del Proxy Object