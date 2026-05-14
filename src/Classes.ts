class Person {
  private name: string;

  public constructor(name: string) {
    this.name = name;
  }
  public getName(): string {
    return this.name;
  }
}

const person = new Person("Alice");
console.log(person.getName());

interface Shape {
  getArea: () => number;
}

class Rectangle implements Shape {
  public constructor(
    private width: number,
    private height: number,
  ) {}

  public getArea(): number {
    return this.width * this.height;
  }
}

const rectangle = new Rectangle(5, 10);
console.log(rectangle.getArea());

class Square extends Rectangle {
  public constructor(sideLength: number) {
    super(sideLength, sideLength);
  }

  public override getArea(): number {
    return super.getArea();
  }
}

const square = new Square(4);
console.log(square.getArea());
