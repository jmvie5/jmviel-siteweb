export class Board {
    size: number;
    availableLetters: string[];
    lettersOnBoard: string[];
    grid: string[][];
    wordCount: number;

    constructor() {
        this.size = 20;
        this.availableLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
        this.lettersOnBoard = [];
        this.grid = Array.from({ length: this.size }, () => Array(this.size).fill(' '));
        this.wordCount = 0;
    }

    toString(): string {
        return '--'.repeat(this.size) + '-\n|' +
            this.grid.map(row => row.join(' ')).join('|\n|') +
            '|\n-' + '--'.repeat(this.size);
    }

    placeTile(x: number, y: number, tile: string): void {
        if (x >= 0 && x < this.size && y >= 0 && y < this.size) {
            if (this.grid[y][x] === ' ' || this.grid[y][x] === tile) {
                this.grid[y][x] = tile;
            } else {
                throw new Error(`No. The letter ${tile} would replace the letter ${this.grid[y][x]}.`);
            }
        } else {
            throw new Error("Some letters would be out of bounds.");
        }
    }

    addWord(word: string): void {
        const [wordIsValid, message] = this.isValidWord(word);
        if (!wordIsValid) {
            throw new Error(`Invalid word : ${message}`);
        }

        const [startX, startY, direction] = this.getWordPosition(word);

        // Place letters on a temp board for test
        const tempBoard = this.clone();
        for (let i = 0; i < word.length; i++) {
            const letter = word[i];
            if (direction === 'horizontal') {
                tempBoard.placeTile(startX + i, startY, letter);
            } else if (direction === 'vertical') {
                tempBoard.placeTile(startX, startY + i, letter);
            } else {
                throw new Error("Invalid direction. Need to be either 'horizontal' or 'vertical'.");
            }
        }

        // Validate board before adding the word for real
        const [isBoardValid, boardMessage] = tempBoard.validateBoard();
        if (!isBoardValid) {
            throw new Error(`Invalid board : ${boardMessage}`);
        }

        // Place each letter of the word on the board
        for (let i = 0; i < word.length; i++) {
            const letter = word[i];
            if (direction === 'horizontal') {
                this.placeTile(startX + i, startY, letter);
            } else if (direction === 'vertical') {
                this.placeTile(startX, startY + i, letter);
            }

            if (!this.lettersOnBoard.includes(letter)) {
                this.lettersOnBoard.push(letter);
            }

            const letterIndex = this.availableLetters.indexOf(letter);
            if (letterIndex !== -1) {
                this.availableLetters.splice(letterIndex, 1);
            }
        }

        this.wordCount++;
    }

    getWordPosition(word: string): [number, number, string] {
        if (this.wordCount === 0) {
            const startX = Math.round(this.size / 2 - word.length / 2);
            const startY = Math.round(this.size / 2);
            return [startX, startY, "horizontal"];
        }

        const commonLetter = Array.from(new Set(word.split(''))).find(letter => this.lettersOnBoard.includes(letter));
        if (!commonLetter) {
            throw new Error("A new word needs one common letter to be placed.");
        }

        const [startX, startY] = this.getLetterPositionInBoard(commonLetter);
        if (startX === null || startY === null) {
            throw new Error("Some letters would be out of bounds.");
        }

        let direction: string;
        try {
            if (this.grid[startY][startX - 1] === " " && this.grid[startY][startX + 1] === " ") {
                direction = "horizontal";
            } else if (this.grid[startY - 1][startX] === " " && this.grid[startY + 1][startX] === " ") {
                direction = "vertical";
            } else {
                throw new Error("Can't place this word, conflict with other letters.");
            }
        } catch {
            throw new Error("Some letters would be out of bounds.");
        }

        if (direction === "horizontal") {
            return [startX - word.indexOf(commonLetter), startY, direction];
        } else {
            return [startX, startY - word.indexOf(commonLetter), direction];
        }
    }

    getLetterPositionInBoard(letter: string): [number | null, number | null] {
        for (let y = 0; y < this.grid.length; y++) {
            const x = this.grid[y].indexOf(letter);
            if (x !== -1) {
                return [x, y];
            }
        }
        return [null, null];
    }

    isValidWord(word: string): [boolean, string] {
        for (let i = 0; i < word.length; i++) {
            if (word.indexOf(word[i]) !== i) {
                return [false, "Can't place this word, conflict with other letters."];
            }
        }

        const commonLetter = Array.from(new Set(word.split(''))).find(letter => this.lettersOnBoard.includes(letter));
        if (this.wordCount !== 0 && !commonLetter) {
            return [false, "Your word has no common letters with words on the board."];
        }

        return [true, "Word is valid"];
    }

    validateBoard(): [boolean, string] {
        const usedLetters: string[] = [];
        for (const row of this.grid) {
            for (const tile of row) {
                if (tile !== " ") {
                    if (usedLetters.includes(tile)) {
                        return [false, "You have repeated letters on the board."];
                    }
                    usedLetters.push(tile);
                }
            }
        }
        return [true, "Board is valid"];
    }

    getScore(): number {
        const letterValues: { [id: string]: number; } = {
            "A" : 1,
            "B" : 3,
            "C" : 3,
            "D" : 2,
            "E" : 1,
            "F" : 4,
            "G" : 2,
            "H" : 4,
            "I" : 1,
            "J" : 8,
            "K" : 5,
            "L" : 1,
            "M" : 3,
            "N" : 1,
            "O" : 1,
            "P" : 3,
            "Q" : 10,
            "R" : 1,
            "S" : 1,
            "T" : 1,
            "U" : 1,
            "V" : 4,
            "W" : 4,
            "X" : 8,
            "Y" : 4,
            "Z" : 10,
        };

        // fr 
        // {
        //     "A" : 1,
        //     "B" : 3,
        //     "C" : 3,
        //     "D" : 2,
        //     "E" : 1,
        //     "F" : 4,
        //     "G" : 2,
        //     "H" : 4,
        //     "I" : 1,
        //     "J" : 8,
        //     "K" : 10,
        //     "L" : 1,
        //     "M" : 2,
        //     "N" : 1,
        //     "O" : 1,
        //     "P" : 3,
        //     "Q" : 8,
        //     "R" : 1,
        //     "S" : 1,
        //     "T" : 1,
        //     "U" : 1,
        //     "V" : 4,
        //     "W" : 10,
        //     "X" : 10,
        //     "Y" : 10,
        //     "Z" : 10,
        // }
        return this.lettersOnBoard.reduce((score, letter) => score + letterValues[letter], 0);
    }

    private clone(): Board {
        const newBoard = new Board();
        newBoard.size = this.size;
        newBoard.availableLetters = [...this.availableLetters];
        newBoard.lettersOnBoard = [...this.lettersOnBoard];
        newBoard.grid = this.grid.map(row => [...row]);
        newBoard.wordCount = this.wordCount;
        return newBoard;
    }
}