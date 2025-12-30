const firstWord = 'Довод';
const secondWord = 'Сантимент';

function isPalindrom(word) {
    return word.toLowerCase() === word.toLowerCase().split('').reverse().join('');
}

console.log(isPalindrom(firstWord));
console.log(isPalindrom(secondWord));