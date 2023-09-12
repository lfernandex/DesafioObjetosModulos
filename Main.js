import * as orderService from "./services/OrderService.js";

import Order from './entities/Order.js';

const data = document.getElementById("orderService").innerHTML.split("\n");

const order = new Order(data[0], Number(data[1]), data[2]);


const total = orderService.total(order);

console.log(`Pedido código: ${order.code}`);
console.log(`Valor total: ${total}`);

