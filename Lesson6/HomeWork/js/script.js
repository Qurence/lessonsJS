// Створити телефонну книгу
// створити початковий клас Abonent, де зберігатимуться ім*я і номер
// створити set який прийматиме телефон і номер
// створити get який виводитиме данні про абонента
// створити три різних юзери
// вивести данні

const abonentName1 = document.querySelector(".abonent_name_1");
const abonentPhone1 = document.querySelector(".abonent_phone_1");
const abonentName2 = document.querySelector(".abonent_name_2");
const abonentPhone2 = document.querySelector(".abonent_phone_2");
const abonentName3 = document.querySelector(".abonent_name_3");
const abonentPhone3 = document.querySelector(".abonent_phone_3");

function updateAbonentInfo(abonent, nameElement, phoneElement) {
  nameElement.textContent = abonent.name;
  phoneElement.textContent = abonent.phone;
//   console.log(AbonentList);
  return console.log(`Updated Abonent: ${abonent.getInfo()}`);
}

class Abonent {
  constructor(name, phone) {
    this.name = name;
    this.phone = phone;
  }

  setAbonent(name, phone) {
    this.name = name;
    this.phone = phone;
  }

  getInfo() {
    return `Name: ${this.name}, Phone: ${this.phone}`;
  }
}

const user1 = new Abonent("Alice", "123-456-7890");
const user2 = new Abonent("Bob", "098-765-4321");
const user3 = new Abonent("Charlie", "987-654-3210");

const AbonentList = [user1, user2, user3];
AbonentList.forEach((user) => {
  console.log(user.getInfo());
});

updateAbonentInfo(user1, abonentName1, abonentPhone1);
updateAbonentInfo(user2, abonentName2, abonentPhone2);
updateAbonentInfo(user3, abonentName3, abonentPhone3);

const abonentCards = document.querySelectorAll(".abonent");
const modal = document.querySelector(".modal");
const closeModalButton = document.querySelector(".close_modal");

let userUpdateIndex = null;

abonentCards.forEach((card) => {
  card.addEventListener("click", () => {
    const userId = Number(card.getAttribute("data-user-id")); // 1, 2, 3
    userUpdateIndex = userId - 1; // Индекс для массива

    const nameInput = document.querySelector(".abonent_name");
    const phoneInput = document.querySelector(".abonent_phone");
    const saveButton = document.querySelector(".save_button");

    // Заповнення полів модалки
    nameInput.value = AbonentList[userUpdateIndex].name;
    phoneInput.value = AbonentList[userUpdateIndex].phone;

    modal.style.display = "flex";

    saveButton.onclick = () => {
      const newName = nameInput.value;
      const newPhone = phoneInput.value;

      // Обновляем данные абонента
      AbonentList[userUpdateIndex].setAbonent(newName, newPhone);

      // Обновляем только одну карточку
      if (userUpdateIndex === 0) updateAbonentInfo(user1, abonentName1, abonentPhone1);
      if (userUpdateIndex === 1) updateAbonentInfo(user2, abonentName2, abonentPhone2);
      if (userUpdateIndex === 2) updateAbonentInfo(user3, abonentName3, abonentPhone3);

      modal.style.display = "none";
    };
  });
});

closeModalButton.addEventListener("click", () => {
  modal.style.display = "none";
});
