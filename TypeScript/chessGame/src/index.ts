// app.ts

export class Person {
    //private id: number | null = null;
    //private name: string;

    constructor(private name: string, private id: number | null = null) {
        this.name = name;
    }

    //methods
    public myName(): string
    {
        return "Person's name: "  + this.name;
    }

    public myId(): string
    {
        if (this.id != null)
            return "Person's id: " + this.id;
        else return "Person's id is undefined";
    }
}


const person1: Person = new Person('krunal');

console.log(person1.myName());

const person2: Person = new Person('Stavros', 1);

console.log(person2.myName() + '\n' + person2.myId());