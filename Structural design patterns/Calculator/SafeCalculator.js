export class SafeCalculator {

    constructor(calculator) {
        this.calculator = calculator;
    }

    divide() {

        const divisor = this.calculator.peekValue();
        if(divisor === 0) {
          throw Error('Division by 0');
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
        return this.calculator.peekValue();
    }

    clear() {
        this.calculator.clear();
    }

    multiply() {
        this.calculator.multiply();   
    }

} 