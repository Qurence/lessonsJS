// Якщо змінна більше нуля - виведіть true, менше - false
//Перевірте це на варіантах  1, 0, -3.

// let number = -3;
// if (number > 0) {
//     console.log(true);
// } else {
//     console.log(false);
// }

// Якщо змінна ="test" - виведіть true,
//Перевірте це на варіантах  'test', "qwerty", true

// let str = 'test';
// if (str === 'test') {
//     console.log(true);
// }

// Якщо змінна більше 10 -  відніміть 5,
//менше - додайте 5, результат виведіть в консоль
//Перевірте це на варіантах  1, 10, 13.

// let number = 10;
// if (number > 10) {
//     number -= 5; // або number = number - 5;
//     console.log(number);
// } else if (number < 10) {
//     number += 5; // або number = number + 5;
//     console.log(number );
// }

//Зробіть сервіс який отримує число від 1 до 12
// виведіть місяць який дорівнює числу

// let month = prompt("Введіть число від 1 до 12");

// switch (Number(month)) {
//     case 1:
//         console.log("January");
//         alert("January");
//         break;
//     case 2:
//         console.log("February");
//         alert("February");
//         break;
//     case 3:
//         console.log("March");
//         alert("March");
//         break;
//     case 4:
//         console.log("April");
//         alert("April");
//         break;
//     case 5:
//         console.log("May");
//         alert("May");
//         break;
//     case 6:
//         console.log("June");
//         alert("June");
//         break;
//     case 7:
//         console.log("July");
//         alert("July");
//         break;
//     case 8:
//         console.log("August");
//         alert("August");
//         break;
//     case 9:
//         console.log("September");
//         alert("September");
//         break;
//     case 10:
//         console.log("October");
//         alert("October");
//         break;
//     case 11:
//         console.log("November");
//         alert("November");
//         break;
//     case 12:
//         console.log("December");
//         alert("December");
//         break;
//     default:
//         console.log("Error");
// }

//Зробіть сервіс який отримує тризначне число
//Поверніть користувачу сумму цих чисел

// let number = prompt("Введіть тризначне число");
// if (number < 100 || number > 999 || isNaN(number)) {
//   alert("Будь ласка, введіть тризначне число.");
// } else {
//   let number1 = Math.floor(number / 100);
//   let number2 = Math.floor((number - number1 * 100) / 10);
//   let number3 = number - number1 * 100 - number2 * 10;
//   let sum = number1 + number2 + number3;
//   alert(`Сума цифр числа ${number} дорівнює ${sum}`);
//   console.log(sum);
// }
