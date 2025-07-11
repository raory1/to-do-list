export class Project {
    constructor(name) {
        this.id = this.generateId();
        this.name = name;
        this.todos = [];
    }

    generateId() {
        return crypto.randomUUID();
    }

    addTodo(todo) {
        this.todos.push(todo);
    }

    removeTodo(id) {
        const index = this.todos.findIndex((todo) => {
            return todo.id === id;
        });
        this.todos.splice(index, 1)
    }
}
