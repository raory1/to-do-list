// src/index.js
import "./styles.css";
import { greeting } from "./greeting.js";
// import img from "./img.png";
// const image = document.createElement("img");
// image.src = img;
// document.body.appendChild(image);

const container = document.querySelector(".container");

const item = document.createElement("div");
item.className = "item";
item.textContent = "Hello, World!";
container.appendChild(item);

console.log(greeting);

import { Todo } from "./Todo.js";
const todo = new Todo("Learn JavaScript", "Study the basics of JavaScript.");
console.log(todo);
