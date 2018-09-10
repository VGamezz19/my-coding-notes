


function typeOf(el: any): (string) {
    if (el === undefined) {
        return 'Undefined';
    } else if (el === null) {
        return 'Null';
    }

    const type = (el).constructor.name;
    return type;
}

function objectToString(el: object): string {
    return JSON.stringify(el);
}

function arrayToString(el: any[]): string {
    return '';
}

function numberToString(el: number): string {
    return el.toString();
}

interface SpectMethods {
    shouldBe(_: any): any;
    mustBe(_: any): any;
    // notShouldBe(_?: any): any;
    // shouldBeTypeOf(_?: any): any;
}

interface TerminalTypes {
    string: string;
    number: string;
    array: string;
    object: string;
    null: string;
    undefined: string;
}

interface LogOptions {
    withLine?: boolean;
    doubleLineBreak?: boolean;
}

import * as assert from 'assert';

class Terminal {
    private static fnDescription = 'Ejecutamos el metodo: ';
    private static anonimus = 'funcion anonimca';
    private static countSpects: number = 0;
    private static types: TerminalTypes = {
        string: 'String',
        number: 'Number',
        array: 'Array',
        object: 'Object',
        null: 'Null',
        undefined: 'Undefined',
    };
    private currentValue: any;

    public execute(description: string, fn: ((_?: any) => any)): SpectMethods {
        this.log([
            description,
            this.extractInfo(fn),
            this.executeCalback(fn),
        ]);

        return {
            shouldBe: (e: any) => this.shouldBe.bind(this, e),
            mustBe: (e: any) => this.mustBe(e),
        };
    }

    public log(description: (string | any[])) {
        if (Array.isArray(description)) {
            this.printLn(description.join('\n'));
        } else {
            this.printLn(description);
        }
    }

    private shouldBe(e: any) {
        Terminal.countSpects += 1;
        assert.equal(this.currentValue, e);
    }

    private mustBe(compared: any) {
        Terminal.countSpects += 1;
        assert.strictEqual(this.currentValue, compared);
    }

    private printLn(text: string): void {
        return console.log(text);
    }

    private extractInfo(fn: ((_?: any) => any)): string {
        return Terminal.fnDescription + (fn.name || Terminal.anonimus);
    }

    private executeCalback(fn: ((_?: any) => any)): string | undefined {
        this.currentValue = fn();
        switch (typeOf(this.currentValue)) {
            case Terminal.types.object:  return objectToString((this.currentValue as object));
            case Terminal.types.array:   return arrayToString((this.currentValue as any[]));
            case Terminal.types.string:  return (this.currentValue as string);
            case Terminal.types.number:  return numberToString((this.currentValue as number));
            case Terminal.types.undefined:  return (this.currentValue as string);
            case Terminal.types.null:  return (this.currentValue as string);
          }
    }

}

export { Terminal };



const termianl1 = new Terminal();

function sum(num: any) {
    return 1 + num;
}
