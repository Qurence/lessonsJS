// процедурне програмування

// const summ = 20000;
// const month = 12;
// const p = 1000;

// const credit = (sum, date, p) => {
//   return sum + p * date;
// };

// console.log(credit(summ, month, p));

// об*єктно орієнтоване програмування

// const credit = {
//   summ: 20000,
//   month: 12,
//   p: 1000,
//   result() {
//     return this.summ + this.p * this.month;
//   },
// };

// console.log(credit.result());

//класи
const btn_pay = document.querySelector(".btn-pay");
btn_pay.addEventListener("click", () => {
  const pay = document.querySelector(".input-pay").value;
  userBank.minusCredit(pay);
});
const p_credit = document.querySelector(".summ-credit");
const btn_nextMounth = document.querySelector(".btn-next-month");
btn_nextMounth.addEventListener("click", () => {
  userBank.minusMounth();
  if (userBank.month === 0) {
    p_credit.textContent = `Credit: ${userBank.summ} $`;
    return console.log("Credit is finished");
  }
});
class Bank {
  static type = "Privat";
  constructor(options) {
    this.summ = options.summ;
    this.month = options.month;
    this.p = options.p;
  }

  credit() {
    // console.log(this);
    // this.p += this.summ * (this.month / 10000);
    p_credit.textContent = `Credit: ${this.summ} $`;
    return;
  }
  minusCredit(pay) {
    this.summ -= pay;
    p_credit.textContent = `Credit: ${this.summ} $`;
    return console.log(`- ${pay} $`);
  }

  minusMounth() {
    this.month -= 1;
    console.log(this.p);
    this.summ += this.p;
    p_credit.textContent = `Credit: ${this.summ} $`;
    return console.log(`-1 month`);
  }
}

const userBank = new Bank({
  summ: 30000,
  month: 5,
  p: 500,
});

userBank.credit();

// console.group("Bank");
// console.log(userBank);
// console.log(Bank);
// console.groupEnd();

class NewBank extends Bank {
  constructor(options) {
    super(options);
    this.card = options.card;
  }
  credit() {
    super.credit();  // виклик методу credit з батьківського класу
    return console.log("I am Aval"); // додатковий функціонал для NewBank
  }
}

const aval = new NewBank({
  summ: 30000,
  month: 5,
  p: 500,
  card: true,
});

// ------------------------------------------------------------------------
// get & set

// class User {
//   constructor(props) {
//     this.name = props.name;
//   }

//   firstName = "";
//   lastName = "";
//   age = "";
//   city = "";

//   set name(newName) {
//     const nameRow = newName.split(" ");
//     this.firstName = nameRow[0];
//     this.lastName = nameRow[1];
//   }

//   get name() {
//     return ` First name : ${this.firstName} last name : ${this.lastName}`;
//   }
// }

// const Kris = new User({
//   name: "Kristina Malitowska",
// });

// const Dasha = new User({
//   name: "Dasha Happy",
// });

// console.log(Dasha.name); // Get name
// console.log(Kris.name); // Get name

// const a = [1, 2, 3];
// console.log(a);

// const a = {
//   x: 1,
//   y: 2,
// };

// const b = Object.create(a);

// console.log(`Властивість x а:`, b.x); // 1, доступ до властивості x з об'єкта a

// const Manager = function (name, sales) {
//   this.name = name;
//   this.sales = sales;

// //   this.sale = function () {
// //     this.sales += 1;
// //   }
// };

// Manager.prototype.sale = function () {
//   this.sales += 1;
// };

// const ann = new Manager("Anna", 5);
// const ivan = new Manager("Ivan", 10);

// console.log(`Ann sales`,ann.sales); // 5
// ann.sale();
// console.log(`Ann sales`,ann.sales); // 6

// console.dir(Manager);

class CoffeMachine {
  _water = 0; // приватна властивість для зберігання кількості води
  #waterLimit = 500; // приватна властивість для обмеження кількості води

  constructor(power) {
    this.power = power;
  }

  set waterAmount(value) {
    if (value > this.#waterLimit) {
      throw new Error(`Water amount exceeds the limit of ${this.#waterLimit} ml`);
    }
    if (value < 0) {
      value = 0;
    }
    this._water = value;
  }
}

let coffeeMachine = new CoffeMachine(100);
console.log(coffeeMachine);

// coffeeMachine.waterAmount = 501;
try {
  coffeeMachine.waterAmount = 501; // спроба встановити значення більше ліміту
} catch (error) {
  console.error(error.message); // Виведе: Water amount exceeds the limit of 500 ml
}

console.log(coffeeMachine._water); // 0, значення не може бути менше 0
