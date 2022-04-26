const randomNumber = Math.random(); // produces random number between 0 (including) and 1 (excluding)
const anotherRandomNumber = Math.random();
const array = [1, 3, 5, 7, 9];

function numberLog() {
    console.log(randomNumber);
}

function bothNumbersLog() {
    console.log(randomNumber, anotherRandomNumber);
}

if (randomNumber > 0.7) {
    alert('It is greater than 0.7');
    numberLog();
} else if (randomNumber <= 0.7) {
    alert("It's smaller than 0.7");
    numberLog();
}

if (randomNumber > 0.7 && anotherRandomNumber > 0.7) {
    alert("Both are greater than 0.7");
    bothNumbersLog();
} else if (randomNumber <= 0.2 || anotherRandomNumber <= 0.2) {
    alert("One of them is smaller than 0.2");
    bothNumbersLog();
}

console.log("")

let whileLoop = 0;
do {
    console.log(array[whileLoop]);
    whileLoop++;
} while (whileLoop < array[whileLoop]);

console.log("") // Dla czytelności, bo kurwa nie wiem jak inaczej XDDD

for (const numbers of array) {
    console.log(numbers);
}

console.log("")

for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
}

console.log("")

for (let i = array.length - 1; i >= 0; i--) {
    console.log(array[i]);
}
