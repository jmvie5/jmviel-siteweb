export class Tile {
    isWall: boolean;
    isVisible: boolean;
    hasPlayer: boolean;
    isStart: boolean;
    isEnd: boolean;

    constructor() {
        this.isWall = true;
        this.isVisible = false;
        this.hasPlayer = false;
        this.isStart = false;
        this.isEnd = false;
    }
}
