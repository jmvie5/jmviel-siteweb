import { Tile } from './Tile';

export class Maze {
    grid: Tile[][];
    width: number;
    height: number;
    startX: number;
    startY: number;
    endX: number;
    endY: number;
    playerX: number;
    playerY: number;
    playerHp: number;
    message:string;

    constructor(width = 12, height = 12) {
        this.width = width;
        this.height = height;
        this.grid = Array.from({ length: height }, () =>
            Array.from({ length: width }, () => new Tile())
        );
        this.startX = 1;
        this.startY = 1;
        this.endX = width - 2;
        this.endY = height - 2;
        this.playerX = this.startX;
        this.playerY = this.startY;
        this.playerHp = 3
        this.message = ""
    }

    generate(): void {
        // Reset player hp
        this.playerHp = 3

        // Reset grid
        for (let y = 0; y < this.height; y++) {
            for (let x = 0; x < this.width; x++) {
                this.grid[y][x] = new Tile();
            }
        }
    
        // Random start (bottom row), random end (top row)
        this.startX = Math.floor(Math.random() * (this.width - 2)) + 1;
        this.startY = this.height - 2;
    
        this.endX = Math.floor(Math.random() * (this.width - 2)) + 1;
        this.endY = 1;
    
        const startTile = this.grid[this.startY][this.startX];
        startTile.isStart = true;

        const endTile = this.grid[this.endY][this.endX];
        endTile.isEnd = true;
        endTile.isWall = false;
    
        const stack: [number, number][] = [[this.startX, this.startY]];
    
        const directions = [
            [0, -2],
            [0, 2],
            [-2, 0],
            [2, 0]
        ];
    
        const inBounds = (x: number, y: number) =>
            x > 0 && y > 0 && x < this.width - 1 && y < this.height - 1;
    
        this.grid[this.startY][this.startX].isWall = false;
    
        while (stack.length) {
            const [x, y] = stack.pop()!;
            const dir = [...directions].sort(() => Math.random() - 0.5);
            for (const [dx, dy] of dir) {
                const nx = x + dx;
                const ny = y + dy;
                const betweenX = x + dx / 2;
                const betweenY = y + dy / 2;
                if (inBounds(nx, ny) && this.grid[ny][nx].isWall) {
                    this.grid[ny][nx].isWall = false;
                    this.grid[betweenY][betweenX].isWall = false;
                    stack.push([nx, ny]);
                }
            }
        }
    
        // Ensure end tile is accessible from at least one side
        const neighbors = [
            [0, 1],
            [0, -1],
            [1, 0],
            [-1, 0]
        ];
    
        const shuffled = neighbors.sort(() => Math.random() - 0.5);
        for (const [dx, dy] of shuffled) {
            const nx = this.endX + dx;
            const ny = this.endY + dy;
            if (inBounds(nx, ny)) {
                this.grid[ny][nx].isWall = false;
                break;
            }
        }
    
        this.placePlayer(this.startX, this.startY);
    }
    

    placePlayer(x: number, y: number) {
        this.clearPlayer();
        this.playerX = x;
        this.playerY = y;
        const tile = this.grid[y][x];
        tile.hasPlayer = true;
        tile.isVisible = true;
    }

    clearPlayer() {
        for (let row of this.grid) {
            for (let tile of row) {
                tile.hasPlayer = false;
            }
        }
    }

    move(dx: number, dy: number) {
        const newX = this.playerX + dx;
        const newY = this.playerY + dy;

        if (newX < 0 || newY < 0 || newX >= this.width || newY >= this.height) {
            return; // Out of bounds
        }

        const targetTile = this.grid[newY][newX];
        targetTile.isVisible = true;

        if (!targetTile.isWall) {
            this.placePlayer(newX, newY);
            this.message = ""
        } else {
            this.playerHp--
            if (this.playerHp === 2) {
                this.message = "Outch"
            } else if (this.playerHp === 1) {
                this.message = "Ayoye"
            }
        }
    }

    moveUp() {
        this.move(0, -1);
    }

    moveDown() {
        this.move(0, 1);
    }

    moveLeft() {
        this.move(-1, 0);
    }

    moveRight() {
        this.move(1, 0);
    }

    /**
     * Return state of the board
     * @returns 0 = continue, 1 = win, 2 = loss
     */
    getState() {
        if (this.playerX === this.endX && this.playerY === this.endY) {
            return 1
        }
        if (this.playerHp === 0) {
            return 2
        }
        return 0
    }
}
