// const addName = function () {
//     // const arg = Array.from(arguments);
//     console.log(arguments.length);
//     if (arguments.length === 0) {
//         return "No names provided";
//     }
// }

// addName("John", "Doe");
// addName("Alice", "Bob", "Charlie");


// REST (...args) syntax allows us to handle an indefinite number of arguments as an array.
// const addName = function (...arg) {
//     console.log(arg);
// }

// addName("John", "Doe");
// addName("Alice", "Bob", "Charlie");

// CallBack functions are functions passed as arguments to other functions.
// function ask (question, callback) {
//     const answer = prompt(question);
//     return callback(answer);
//     //||
//     // callback(answer);
// }

// function callbackFunction(answer) {
//     if (answer === null || answer.trim() === "") {
//         console.log("You didn't provide an answer.");
//         return;
//     }
//     console.log("Your answer is: " + answer);
// }

// ask("What is your name?", callbackFunction);

// Стрілкові функції (Arrow Functions) - це коротший синтаксис для оголошення функцій. Особливості:
// 1. Вони не мають власного контексту `this`, тому не можна використовувати їх як методи об'єктів.
// 2. Вони не мають власного `arguments` об'єкта, тому не можна використовувати їх для отримання аргументів.

// const addName = (...arg) => {
//     if (arg.length === 0) {
//         return "No names provided";
//     }
//     return console.log(arg);
// }

// addName("John", "Doe");
// addName("Alice", "Bob", "Charlie");
// addName(); // No names provided

// document - це об'єкт, який представляє HTML-документ, з яким ми працюємо.
// querySelector - це метод, який дозволяє знайти елемент в DOM за CSS-селектором.

// console.log(document);

const numberRef = document.querySelector('input[name="number"]');
const stepRef = document.querySelector('input[class="step"]');
console.log(stepRef)
const buttonRef = document.querySelector("button[class='add']");
const buttonDeleteRef = document.querySelector("button[class='delete']");
const addNumber = (number) => {
    let step = stepRef.value;
    if (step === "") {
        console.log("Please enter a step value");
        return;
    }
    let res = Number(number) + Number(step);
    numberRef.value = res;
    return;
}

const deleteNumber = (number) => {
    let step = stepRef.value;
    if (step === "") {
        console.log("Please enter a step value");
        return;
    }
    let res = Number(number) - Number(step);
    numberRef.value = res;
    return;
}


buttonRef.addEventListener("click", () => addNumber(numberRef.value));
buttonDeleteRef.addEventListener("click", () => deleteNumber(numberRef.value));


// buttonRef.addEventListener("click", () => {
//     if (numberRef.value === "") {
//         console.log("Please enter a number");
//         return;
//     }
//     console.log(numberRef.value);
// });

