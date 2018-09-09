


function typeOf(el: any): (string) {
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

interface LogOptions {
    withLine?: boolean;
    doubleLineBreak?: boolean;
}

import * as assert from 'assert';

class Terminal {
    private static fnDescription = 'Ejecutamos el metodo: ';
    private static anonimus = 'funcion anonimca';
    private static countTest: number;
    private currentValue: any;

    public execute(description: string, fn: ((_?: any) => any)): SpectMethods {
        this.log([
            description,
            this.extractInfo(fn),
            this.executeCalback(fn),
        ]);

        return {
            shouldBe: (e: any) => this.shouldBe.call(this, e),
            mustBe: (e: any) => this.mustBe.call(this, e),
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
        Terminal.countTest++;
        assert.equal(this.currentValue, e);
    }

    private mustBe(compared: any) {
        Terminal.countTest++;
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
            case 'Object':  return objectToString((this.currentValue as object));
            case 'Array':   return arrayToString((this.currentValue as any[]));
            case 'String':  return (this.currentValue as string);
            case 'Number':  return numberToString((this.currentValue as number));
          }
    }

}

export { Terminal };
