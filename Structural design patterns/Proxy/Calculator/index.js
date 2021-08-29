import { SafeCalculator } from "./SafeCalculator.js";
import { StackCalculator } from "./StackCalculator.js";

const calculator = new StackCalculator();
calculator.putValue(2);
calculator.putValue(3);
console.log(calculator.multiply()); // 2 * 3 = 6
calculator.putValue(10);
console.log(calculator.multiply()); // 6 * 10 = 60 // El 6 que quedo en el stack

/* Cuando en js se hace una división entre 0 se obtiene un infinity
   con el proxy que implementemos, haremos una validación para este comportamiento */

const instanceCalculator = new StackCalculator();
const safeCalculator = new SafeCalculator(instanceCalculator);

safeCalculator.putValue(8);
safeCalculator.putValue(2);
console.log(safeCalculator.divide());


