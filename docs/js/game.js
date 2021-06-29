import { GameScreen } from "./gamescreen.js";
export class Game {
    constructor() {
        this.screen = new GameScreen();
        this.gameLoop();
    }
    gameLoop() {
        this.screen.update();
        requestAnimationFrame(() => this.gameLoop());
    }
}
new Game();
//# sourceMappingURL=game.js.map