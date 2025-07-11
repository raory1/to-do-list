export class Project {
    construtor(name){
        this.id = this.generateId();
        this.name = name;
    }

    generateId() {
        return crypto.randomUUID();
    }
}