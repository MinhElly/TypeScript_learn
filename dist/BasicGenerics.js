"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function createPair(v1, v2) {
    return [v1, v2];
}
console.log(createPair('hello', 42)); // ['hello', 42]
class NamedValue {
    name;
    _value;
    constructor(name) {
        this.name = name;
    }
    setValue(value) {
        this._value = value;
    }
    getValue() {
        return this._value;
    }
    toString() {
        return `NameValue[name=${this.name}, value=${this._value}]`;
    }
}
let value = new NamedValue('myNumber');
value.setValue(123);
console.log(value.toString()); // NameValue[name=myNumber, value=123]
