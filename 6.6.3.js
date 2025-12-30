let inputNumber = prompt('Enter a number:');

const resultArray = [];

if (inputNumber === null || inputNumber.trim() === '') {
    alert('Not input value');
} else {
    let number = Number(inputNumber);

    if (isNaN(inputNumber)) {
        alert('Input value id not a number');
    } else if (inputNumber < 0) {
        alert('Number is negative');
    } else {
        for (let i = 0; i <= inputNumber; i++) {
            resultArray.push(i)
        }
    }
}

alert(resultArray);