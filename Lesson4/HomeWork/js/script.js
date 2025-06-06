// Перепишіть функцію, використовуючи '?' або '||'

// function checkAge(age) {
// if (age > 18) {
// return true;
// } else {
// return confirm('Батьки дозволили?');
// }
// }

const checkAge = (age) => (age > 18) ? true : confirm('Батьки дозволили?');

// const age = prompt("Введіть ваш вік:");

const button_confirm = document.querySelector('button');
const acces = document.querySelector('h2.acces');
button_confirm.addEventListener("click", () => {
    const age = document.querySelector('input[class="input_age"]').value;
    (checkAge(age)) ? acces.textContent = "Доступ дозволено" : acces.textContent = "Доступ заборонено" ;
}
);


//-------------------------------------------

// Напишіть функцію min(a, b), яка повертає менше з двох чисел a та b

// function min (a, b) {
//     return (a < b) ? a : b;
// }

// a = 2;
// b = 1;

// console.log(`Меньше число: ${min(a, b)}`);

// -----------------------------

// Перепишіть з використанням стрілкових функцій
// Замініть Функціональні Вирази на стрілкові функції у коді нижче:

// function ask(question, yes, no) {
// if (confirm(question)) yes();
// else no();
// }
// ask(
// "Ви згодні?"
// ,
// function() { alert("Ви погодились."); },
// function() { alert("Ви скасували виконання."); }
// );

// const ask = (question, yes, no) => {
//     // if (confirm(question)) yes();
//     // else no();
//     confirm(question) ? yes() : no();
// }
// ask(
//     "Ви згодні?",
//     () => alert("Ви погодились."),
//     () => alert("Ви скасували виконання.")
// );