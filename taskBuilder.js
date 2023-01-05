/**
 * Innerhalb dieser Klasse, bzw. der einzelnen Methoden wird immer this returned, wodurch es möglich ist
 * die einzelnen Methoden nacheinander aufzurufen (Method chaining), siehe main.js Z.62-67.
 * Die Create Methode am Ende returned das Task-Objekt.
 */

export default class TaskBuilder {
    constructor() {
        this.task = {};
    }

    name(name) {
        this.task.name = name
        return this;
    }
    dueOn(dueOn) {
        this.task.dueOn = dueOn
        return this;
    }
    description(description) {
        this.task.description = description
        return this;
    }
    status(status) {
        this.task.status = status
        return this;
    }
    create() {
        return this.task;
    }
}
