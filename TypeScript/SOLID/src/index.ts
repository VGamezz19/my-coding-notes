import { Terminal } from '../api/console';

// class Person {
//     private name: string;

//     constructor(name:string) {
//         this.name = name;
//     }

//     public getName(): string {
//         return this.name;
//     }
// }

// const Victor = new Person("Victor");

// Victor.getName();

// const TerminalVict:Terminal = new Terminal();

// TerminalVict.execute("Una Persona dice su nombre", Victor.getName);

// console.log("Welcome To TS SOLID");


const Terminal1 = new Terminal();

Terminal1.execute('FirstExecition', () => [])
    .mustBe([]);


// const myMac = new Terminal();
