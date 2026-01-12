const UserInformation = [
    {
        name: 'Andrey',
        age: 35
    },
    {
        name: 'Alex',
        age: 12
    },
    {
        name: 'Vasya',
        age: 45
    }
]


const ageArr = UserInformation.filter(user => user.age >= 18);
console.log(ageArr);