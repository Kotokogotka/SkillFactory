const person = {
    firstName: 'John',
    lastName: 'Smith',
};

function setFullName(fullName) {
    this.fullName = fullName;
}

const setPersonFullname = setFullName.bind(person);

setPersonFullname('John Smith');

console.log(person);
console.log(person.fullName);