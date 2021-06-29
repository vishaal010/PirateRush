import { GameObject } from "./gameobject.js"

export class Background extends GameObject {

    constructor() {
        super("background")
        this.x = 0
    }

    public update() {
        this.x--
        this.element.style.backgroundPosition = `${this.x}px 0px`
    }
}