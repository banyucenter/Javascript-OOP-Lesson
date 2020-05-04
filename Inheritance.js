class Shape {
    luas() {
        return 0;
    }
}

class segitiga extends Shape {
    constructor(alas, tinggi) {
        super();
        this.alas = alas;
        this.tinggi = tinggi
    }

    luas() {
        return console.log("Luas Segitiga = "+ 0.5 * this.alas * this.tinggi);
    }
}

const segitiga1 = new segitiga(6,10)
segitiga1.luas()

