import { Todo } from "./Todo.js";

export const createTodo = (title, description, dueDate, priority) => {
    const newTodo = new Todo(title, description, dueDate, priority);
    return newTodo;
};

export const updateTodo = () => {};

export const deleteTodo = (project, todo) => {
    project.removeTodo(todo.id);
};
