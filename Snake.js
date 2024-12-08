class Snake {
    constructor(start, end) {
        if (start <= end)   throw new Error("Snake's start must be greater than end.");
        this.start = start;
        this.end = end;
    }
}

export { Snake };