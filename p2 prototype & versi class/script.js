// Constructor Function & prototype
// function Mahasiswa(nama, energi) {
//     // let this = Object.create(Mahasiswa.prototype); //asliny sudah disediakan(prototype) dari defaut constructor function
//     this.nama = nama;
//     this.energi = energi;

// }
// Mahasiswa.prototype.makan = function (porsi) {
//     this.energi += porsi;
//     return `anjay makan, Selamat Makan ${this.nama}, enjoy Eat`;
// }
// Mahasiswa.prototype.main = function (jam) {
//     this.energi -= jam;
//     return `Main Game mulu, Selamat Main ${this.nama}, enjoy Playing`;
// }
// Mahasiswa.prototype.tidur = function (jam) {
//     this.energi += jam * 2;
//     return `Tidor tross, Selamat Tidor ${this.nama}, enjoy Sleep`;
// }

// let mhs1 = new Mahasiswa('kuplak', 10)
// let mhs2 = new Mahasiswa('kemet', 20)


// versi class
class Mahasiswa {
    constructor(nama, energi) {
        this.nama = nama;
        this.energi = energi;
    }
    makan(porsi) {
        this.energi += porsi;
        return `anjay makan, Selamat Makan ${this.nama}, enjoy Eat`;
    }
    main(jam) {
        this.energi -= jam;
        return `Main Game mulu, Selamat Main ${this.nama}, enjoy Playing`;
    }
    tidur(jam) {
        this.energi += jam * 2;
        return `Tidor tross, Selamat Tidor ${this.nama}, enjoy Sleep`;
    }
}
let mhs1 = new Mahasiswa('emoy', 10)
let mhs2 = new Mahasiswa('mamat', 20)