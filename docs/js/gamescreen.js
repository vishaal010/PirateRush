import { Background } from "./background.js";
import { GameObject } from "./gameobject.js";
import { Robot } from "./robot.js";
export class GameScreen extends GameObject {
    constructor() {
        super("gamescreen");
        this.robots = [];
        const text = document.createElement("instructions");
        this.element.appendChild(text);
        text.innerText = "Click the robots to remove them!";
        this.background = new Background();
        this.robots.push(new Robot(), new Robot(), new Robot(), new Robot(), new Robot());
    }
    update() {
        this.background.update();
        for (let o of this.robots) {
            o.update();
        }
    }
}
//# sourceMappingURL=gamescreen.js.map