function printInfo(name, age) {
    console.log(`Name: ${this.name}, Age: ${this.age}`);
}

const person = {
    name: 'Andrey',
    age: 35
};

printInfo.call(person);
