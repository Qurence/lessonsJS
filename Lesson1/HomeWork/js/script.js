//***1***
// Робота зі змінними
// Оголосіть дві змінні: name та city.
// Присвойте значення "Іван" змінній name.
// Скопіюйте значення зі змінної name в city.
// Виведіть значення змінної city, використовуючи функцію console.log (яка повинна показати “Іван”).

// let name ="Іван";
// let city = "Kiyv";
// city = name;
// console.log(city);

//***2***
//Який буде результат виконання скрипта?
// let name = "Olga";
// console.log(`привіт ${1}`); // Привіт 1
// console.log(`привіт ${"name"}`); // // привіт name
// console.log(`привіт ${name}`); // ? // Привіт Olga

//***3***
//Видобути число зі змінних
// let a = "5";
// let b = "13cvb";
// let c = "12.9sxdcfgv";
// вивести в консоль тип

// console.log(typeof Number(a)); // number
// console.log(typeof parseInt(b)); // number
// console.log(typeof parseFloat(c)); // number


//***4***
//Зробіть, щоб 0.1 + 0.2 = 0.3

// console.log((0.1*10 + 0.2*10)/10); // 0.3 number

//***5**
//Поверніть найбільше число с набору 20, 10, 50, 40

// const numbers = [20, 10, 50, 40];
// const maxNumber = Math.max(...numbers);
// console.log(maxNumber);

// OR

// console.log(Math.max(20, 10, 50, 40)); // 50 number

//***6**
//Поверніть випадкове число в діапазоні від 2 до 4

// console.log(Math.random() * (4 - 2) + 2); // випадкове число від 2 до 4

//***7**
//дізнатись довжину message
// const message = "Welcome to Bahamas!";

// console.log(message.length); // 19 number

//***8**
//вивести в консоль message  великими літерами

// console.log(message.toUpperCase()); // WELCOME TO BAHAMAS!

//***9**
// створити пустий об*єкт
// додати туди ім*я, вік і місто
// вивести результат в консоль
// видалити місто
// додати буль з ключем: like flowers
// вивести результат в консоль

// let person = {};
// person.name = "Іван";
// person.age = 30;
// person.city = "Kiyv";
// // console.log(person); // { name: 'Іван', age: 30, city: 'Kiyv' }
// delete person.city;
// person['like Flowers'] = true;
// // console.log(person); // { name: 'Іван', age: 30, likeFlowers: true }

//***10**
// За допомогою циклу  “for…in” вивести в консоль ключі і значення об*єкта

// for (let key in person) {
//     console.log(`${key}: ${person[key]}`);
// }