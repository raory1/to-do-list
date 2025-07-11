export class Todo {
    constructor(title, description, dueDate, priority) {
        this.id = this.generateId();
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.completed = false;
    }

    generateId() {
        return crypto.randomUUID();
    }

    toggleCompleted() {
        this.completed = !this.completed;
    }
}
