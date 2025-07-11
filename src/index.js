// src/index.js
import "./styles/styles.css";
// import img from "./img.png";
// const image = document.createElement("img");
// image.src = img;
// document.body.appendChild(image);

const container = document.querySelector(".container");

const item = document.createElement("div");
item.className = "item";
item.textContent = "Hello, World!";
container.appendChild(item);


import { Todo } from "./Todo.js";
import { Project } from "./Project.js";

const todo = new Todo("Learn JavaScript", "Study the basics of JavaScript.");
const project = new Project("Home");

project.addTodo(todo)
project.addTodo(todo)

console.log(project);

console.log(todo);
