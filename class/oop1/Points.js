class Tpont {
    x
    y

    constructor(x, y) {
        this.x = x
        this.y = y
    }

    randomGen(min, max) {
        this.x = Math.round((Math.random() * (max - min)) + min)
        this.y = Math.round((Math.random() * (max - min)) + min)
    }

}