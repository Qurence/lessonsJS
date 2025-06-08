// Створіть функцію-конструктор Calculator, який створює об’єкти з трьома
// методами:
// read() запитує два значення за допомогою prompt і запам’ятовує їх у
// властивостях об’єкта.
// sum() повертає суму цих властивостей.
// mul() повертає результат множення даних властивостей.

// class Calculator {
//   constructor() {
//     this.a = 0;
//     this.b = 0;
//   }
//   read() {
//     this.a = +prompt("Enter first number", 0);
//     this.b = +prompt("Enter second number", 0);
//   }
//   sum() {
//     return this.a + this.b;
//   }
//   mul() {
//     return this.a * this.b;
//   }
// }

// const calculator = new Calculator();
// calculator.read();
// alert("Sum: " + calculator.sum());
// alert("Mul: " + calculator.mul());

const a = document.querySelector("#a");
const b = document.querySelector("#b");

const button_sum = document.querySelector("#sum");
const button_mul = document.querySelector("#mul");

class Calculator {
  constructor() {
    this.a = 0;
    this.b = 0;
  }
  
  read() {
    this.a = +a.value;
    this.b = +b.value;
  }
  
  sum() {
    return this.a + this.b;
  }
  
  mul() {
    return this.a * this.b;
  }
}

const calculator = new Calculator();

button_sum.addEventListener("click", () => {
  calculator.read();
  document.querySelector(".result").textContent = "Sum: " + calculator.sum();
});

button_mul.addEventListener("click", () => {
  calculator.read();
  document.querySelector(".result").textContent = "Mul: " + calculator.mul();
});
