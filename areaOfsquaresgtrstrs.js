const rect = class {
    constructor(length,width) {
        this.length = length
        this.width = width
    }
    get area() {
        return this.length * this.width
    }
    get sides(){

    }
}

const sq=new rect(4,4);
console.log(sq.area)
