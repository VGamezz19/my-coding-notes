// import * as Console from 'console';
// // import { Console } from 'inspector';
import * as fs from "fs";

// interface ConsoleParameter {
//     descriptcion: string;
//     fn():string;
//     option?:object;
// }

// interface Consolee {
//     protected text: string;
//     protected time: Date;
// }

// interface Consolee {
//     text: string;
//     time: Date;
// }
// class OurConsole implements Consolee{
//     protected text: string = "";
//     protected time: Date;
    
//     constructor() {
//         this.time = new Date();
//     }
// }

// terminal.execute("Una persona dice su nombre", Victor.getName).assertion("Victor");
// Una persona dice su nombre
// Victor.getName()
// - "Victor"
// true

class Terminal {
    public execute(desc: string, fn: Function): Function {
        this.log([desc, fn()]);
        return this.assertion;
    }
    public log(description: (string | any[])) {
        if(Array.isArray(description)) {
            return this.printLn(description.join('\n'));
        }
        return this.printLn(description);
    }

    private printLn(text: string): void {
        return console.log(text)
    }

    public assertion(should:any) {
        debugger;
    }



    private functionName(fn: Function): string {
        return fn.name;
    }

    public getTerminal() {
        return console.log("HelloTermin 2al");
    }
}


export { Terminal }