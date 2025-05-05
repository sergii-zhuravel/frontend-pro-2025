import { Phone } from "./product";
import "./styles.scss";

const orders = [];

const menuIPhone = document.querySelector("#menu-iphone");
const menuSamsung = document.querySelector("#menu-samsung");
const menuOrders = document.querySelector("#menu-orders");

const containerIphone = document.querySelector("#container-iphone");
const containerSamsung = document.querySelector("#container-samsung");
const containerOrders = document.querySelector("#container-orders");

const iPhone16Pro = document.querySelector("#iphone-16pro");

menuIPhone.addEventListener("click", () => {
  containerIphone.classList.remove("d-none");
  containerSamsung.classList.add("d-none");
});

menuSamsung.addEventListener("click", () => {
  containerIphone.classList.add("d-none");
  containerSamsung.classList.remove("d-none");
});

menuOrders.addEventListener("click", () => {
  containerIphone.classList.add("d-none");
  containerSamsung.classList.add("d-none");
  containerOrders.classList.remove("d-none");
});

iPhone16Pro.addEventListener("click", () => {
  const newPhone = new Phone(Phone.PRO_16, 16);

  orders.push(newPhone);
  renderOrders();
});

function renderOrders() {
  containerIphone.classList.add("d-none");
  containerSamsung.classList.add("d-none");
  containerOrders.classList.remove("d-none");

  orders.map((phone) => renderPhone(phone));
}

function renderPhone(phone) {
  const template = document.querySelector("#order-template");
  const newPhoneOrder = template.content.cloneNode(true);
  newPhoneOrder.querySelector("button").addEventListener("click", async () => {
    await fetch("http://localhost:3000/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(phone),
    });
  });
  newPhoneOrder.querySelector("#model").textContent = phone.model.name;
  containerOrders.appendChild(newPhoneOrder);
}
