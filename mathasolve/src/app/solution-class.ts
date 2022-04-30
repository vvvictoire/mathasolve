import { SolutionInterface } from "./solution-interface";
import * as math from 'mathjs';

export class SolutionClass implements SolutionInterface{
    numbers: number[];
    target: number;
    operators: string[];
    result: number;

    constructor(numbers: number[], target: number, operators: string[]) {
        this.numbers = numbers;
        this.target = target;
        this.operators = operators;
        this.result = this.calculate();
    }

    // todo : check if the input is valid (enough numbers or operators)

    calculate(): number {
        let numbers = this.numbers.slice();
        let operators = this.operators.slice();
        while(operators.length > 0){
            // get the first number of the array
            let firstNumber = numbers.shift();
            // get the first operator
            let operator = operators.shift();
            // get the new first number of the array (so the second number)
            let secondNumber = numbers[0];
            // build the string operation
            let stringOperation = String(firstNumber) + operator + String(secondNumber);
            // evaluate the string operation
            numbers[0] = math.evaluate(stringOperation);
        }
        return numbers[0];
    }
}
