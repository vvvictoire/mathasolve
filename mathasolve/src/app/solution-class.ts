import { SolutionInterface } from "./solution-interface";

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
        // get the first number of the array
        let firstNumber = this.numbers.shift();
        // get the first operator
        let operator = this.operators.shift();
        // get the new first number of the array (so the second number)
        let secondNumber = this.numbers[0];
        // build the string operation
        let stringOperation = String(firstNumber) + operator + String(secondNumber);
        // evaluate the string operation
        let result = Function(stringOperation)();
        return result;
    }
}
