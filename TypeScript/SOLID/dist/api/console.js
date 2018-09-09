"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
function typeOf(el) {
    const type = (el).constructor.name;
    return type;
}
function objectToString(el) {
    return JSON.stringify(el);
}
function arrayToString(el) {
    return '';
}
function numberToString(el) {
    return el.toString();
}
const assert = __importStar(require("assert"));
class Terminal {
    execute(description, fn) {
        this.log([
            description,
            this.extractInfo(fn),
            this.executeCalback(fn),
        ]);
        return {
            shouldBe: (e) => this.shouldBe.call(this, e),
            mustBe: (e) => this.mustBe.call(this, e),
        };
    }
    log(description) {
        if (Array.isArray(description)) {
            this.printLn(description.join('\n'));
        }
        else {
            this.printLn(description);
        }
    }
    shouldBe(e) {
        Terminal.countTest++;
        assert.equal(this.currentValue, e);
    }
    mustBe(compared) {
        Terminal.countTest++;
        assert.strictEqual(this.currentValue, compared);
    }
    printLn(text) {
        return console.log(text);
    }
    extractInfo(fn) {
        return Terminal.fnDescription + (fn.name || Terminal.anonimus);
    }
    executeCalback(fn) {
        this.currentValue = fn();
        switch (typeOf(this.currentValue)) {
            case 'Object': return objectToString(this.currentValue);
            case 'Array': return arrayToString(this.currentValue);
            case 'String': return this.currentValue;
            case 'Number': return numberToString(this.currentValue);
        }
    }
}
Terminal.fnDescription = 'Ejecutamos el metodo: ';
Terminal.anonimus = 'funcion anonimca';
exports.Terminal = Terminal;
//# sourceMappingURL=console.js.map