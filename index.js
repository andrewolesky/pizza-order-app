"use strict";
// Object.defineProperty(exports, "__esModule", { value: true });
// exports.getPizzaDetail = getPizzaDetail;
var cashInRegister = 100;
var nextOrderId = 1;
var nextPizzaId = 1;
var menu = [
  { id: nextPizzaId++, name: "Margherita", price: 8 },
  { id: nextPizzaId++, name: "Pepperoni", price: 10 },
  { id: nextPizzaId++, name: "Hawaiian", price: 10 },
  { id: nextPizzaId++, name: "Veggie", price: 9 },
];
var orderQueue = [];
function addNewPizza(pizzaObj) {
  menu.push(pizzaObj);
}
function placeOrder(pizzaName) {
  var selectedPizza = menu.find(function (pizzaObj) {
    return pizzaObj.name === pizzaName;
  });
  if (selectedPizza === undefined) {
    console.error("".concat(pizzaName, " does not exist in the menu"));
    return;
  }
  cashInRegister += selectedPizza.price;
  var newOrder = {
    id: nextOrderId++,
    pizza: selectedPizza,
    status: "ordered",
  };
  orderQueue.push(newOrder);
  return newOrder;
}
function completeOrder(orderId) {
  var order = orderQueue.find(function (order) {
    return order.id === orderId;
  });
  if (!order) {
    console.error("".concat(orderId, " was not found in the orderQueue"));
    throw new Error();
  }
  order.status = "completed";
  return order;
}
function getPizzaDetail(identifier) {
  if (typeof identifier === "string") {
    return menu.find(function (pizza) {
      return pizza.name.toLowerCase() === identifier.toLowerCase();
    });
  } else if (typeof identifier === "number") {
    return menu.find(function (pizza) {
      return pizza.id === identifier;
    });
  } else {
    throw new TypeError(
      "Parameter `identifier` must be either a string or a number"
    );
  }
}
// addNewPizza({ id: nextPizzaId++, name: "Chicken Bacon Ranch", price: 12 });
// addNewPizza({ id: nextPizzaId++, name: "BBQ Chicken", price: 12 });
// addNewPizza({ id: nextPizzaId++, name: "Spicy Sausage", price: 11 });
// placeOrder("Chicken Bacon Ranch");
// placeOrder("Pepperoni");
// completeOrder(1);
// placeOrder("Anchovy");
// placeOrder("Veggie");
// completeOrder(2);
console.log("Menu:", menu);
// console.log("Cash in register:", cashInRegister);
// console.log("Order queue:", orderQueue);
