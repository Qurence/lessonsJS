const elem = document.querySelector("[data-widget-name]");
const widgetName = elem.dataset.widgetName;

console.log("Текст: ", elem.textContent);
console.log(`Значення атрибуту:`, widgetName);

const btn = document.querySelector(".btn-result");
btn.addEventListener("click", () => {
  btn.remove();
  const info = document.createElement("p");
  info.classList.add("info");
  info.innerHTML = `Текст: ${elem.textContent}, <br/> Атрибут: data-widget-name: ${widgetName}`;

  elem.insertAdjacentElement("afterend", info);
});
