import { Terminal } from '../api/console';

class Person {
    private name: string;

    constructor(name:string) {
        this.name = name;
    }

    public getName(): string {
        return this.name;
    }
}

const Victor = new Person("Victor");

Victor.getName();

const TerminalVict:Terminal = new Terminal();

TerminalVict.execute("Una Persona dice su nombre", Victor.getName);
