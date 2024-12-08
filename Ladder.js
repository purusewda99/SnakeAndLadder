class Ladder {
    constructor(start, end) {
        if(start <= end) throw new Error("Ladder's start must be less than end.");
        this.start = start;
        this.end = end;
    }
}

export { Ladder };