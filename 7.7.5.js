const myArray = [3, -1, 8, -14, 54, 6, 7, 89, 89, 110, 13, 23, 35, 14, 15, 6, 7, 8, 9, 10];

function sortSetArray(array) {
    const setArray = Array.from(new Set(array));
    setArray.sort((a, b) => a - b);
    return setArray;
}

const sortedArray = sortSetArray(myArray);
console.log(sortedArray);