// --1--
// 1) написати об*єкт студента який буде виводити ім*я, спеціальнісь, середній
// бал і кількість пропущених занять
// 2) написати метод який буде виводити цю інформацію
// 3) написати три варіанти студентів
// 4) прикріпити знначення за допомогою call apply bind

// student = {
//     name: "Ivan",
//     specialty: "Computer Science",
//     averageGrade: 4.5,
//     missedLessons: 2,
//     showInfo: function() {
//         console.log(`Name: ${this.name}, Specialty: ${this.specialty}, Average grade: ${this.averageGrade}, Missed lessons: ${this.missedLessons}`);
//     }
// }

// const student1 = {
//     name: "Ivan",
//     specialty: "Computer Science",
//     averageGrade: 4.5,
//     missedLessons: 2
// };

// const student2 = {
//     name: "Olga",
//     specialty: "Mathematics",
//     averageGrade: 4.8,
//     missedLessons: 1
// };

// const student3 = {
//     name: "Nata",
//     specialty: "Physics",
//     averageGrade: 4.2,
//     missedLessons: 3
// };

// student.showInfo.call(student1);
// student.showInfo.apply(student2);
// student.showInfo.bind(student3)();

// --2--
// Написати дві кнопки і закріпити на них функції
// при натисканні на кнопку html - має видати коротке визначення що це таке
// при натисканні на кнопку css - має видати коротке визначення що це таке

const htmlButton = document.querySelector('.btn-html');
const cssButton = document.querySelector('.btn-css');
const output = document.getElementById('output');

htmlButton.addEventListener('click', () => {
    output.textContent = 'HTML - Hypertext Markup Language';
});

cssButton.addEventListener('click', () => {
    output.textContent = 'CSS - Cascading Style Sheets';
});

// Написати функцію магазин, яка отримує назву товару, ціну за кг і кількість товару
// функція має повертати назву товару і вартість
// перевірити на варіантах:
// 1) banana 30, 4,5
// 2) cherry 58, 1,3
// 3) orange 89, 3,4

function shop(productName, pricePerKg, quantity) {
    const totalPrice = pricePerKg * quantity;
    return `Product: ${productName}<br>Total Price: ${totalPrice} UAH`;
}

const banana = {
    productName: 'Banana',
    pricePerKg: 30,
    quantity: 4.5
}

const cherry = {
    productName: 'Cherry',
    pricePerKg: 58,
    quantity: 1.3
};

const orange = {
    productName: 'Orange',
    pricePerKg: 89,
    quantity: 3.4
};

const btn_banana = document.querySelector('.btn-banana');
const btn_cherry = document.querySelector('.btn-cherry');
const btn_orange = document.querySelector('.btn-orange');
const output2 = document.getElementById('output2');

btn_banana.addEventListener('click', () => {
    const result = shop(banana.productName, banana.pricePerKg, banana.quantity);
    output2.innerHTML = result;
});
btn_cherry.addEventListener('click', () => {
    const result = shop(cherry.productName, cherry.pricePerKg, cherry.quantity);
    output2.innerHTML = result;
});
btn_orange.addEventListener('click', () => {
    const result = shop(orange.productName, orange.pricePerKg, orange.quantity);
    output2.innerHTML = result;
});
