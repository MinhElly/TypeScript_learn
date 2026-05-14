function createPair<S, T>(v1: S, v2: T): [S, T] {
  return [v1, v2];
}
console.log(createPair<string, number>('hello', 42)); // ['hello', 42]

class NamedValue<T> {
    private _value: T | undefined;

    constructor(private name: string) {}

    public setValue(value: T) {
        this._value = value;
    }

    public getValue(): T | undefined {  
        return this._value;
    }

    public toString(): string {
        return `NameValue[name=${this.name}, value=${this._value}]`;
    }

}

let value = new NamedValue<number>('myNumber');
value.setValue(123);
console.log(value.toString()); // NameValue[name=myNumber, value=123]