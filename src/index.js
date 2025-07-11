import "./styles/styles.css";
import { createTodo } from "./todoManager";
import { createProject } from "./projectManager";
import { format } from "date-fns";
import ui from "./ui";

// Criar datas
const date1 = format(new Date(2014, 1, 1), "dd-MM-yyyy");
const date2 = format(new Date(2014, 2, 1), "dd-MM-yyyy");
const date3 = format(new Date(2014, 3, 1), "dd-MM-yyyy");

// Criar todos
const todo1 = createTodo("Planejar o mês", "", date1, "important");
const todo2 = createTodo("Lavar a roupa", "", date2, "important");
const todo3 = createTodo("Reunião com o cliente", "", date3, "important");

// Criar projeto e adicionar todos
const project = createProject("House");
project.addTodo(todo1);
project.addTodo(todo2);
project.addTodo(todo3);
project.removeTodo(todo1.id);

console.log(project);
