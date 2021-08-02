import { setWorldConstructor } from "cucumber";

class World {
    constructor() {
        this.taskManager = new taskManager();
    }
}

setWorldConstructor(World);