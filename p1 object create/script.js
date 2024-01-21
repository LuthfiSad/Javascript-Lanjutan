// cara Membuat Object pada javascript

// 1. Object literal
// PROBLEM : Tidak efektif untuk object yang banyak
// let mhs1 = {
//     nama: 'Ashu',
//     energi: 10,
//     makan: function (porsi) {
//         this.energi += porsi;
//         return `anjay makan, Selamat Makan ${this.nama}, enjoy Eat`;
//     }
// }

// let mhs2 = {
//     nama: 'Koplak',
//     energi: 20,
//     makan: function (porsi) {
//         this.energi += porsi;
//         return `anjay makan, Selamat Makan ${this.nama}, enjoy Eat`;
//     }
// }



// 2. Function declaration
const methodMahasiswa = {
    makan: function (porsi) {
        this.energi += porsi;
        return `anjay makan, Selamat Makan ${this.nama}, enjoy Eat`;
    },
    main: function (jam) {
        this.energi -= jam;
        return `Main Game mulu, Selamat Main ${this.nama}, enjoy Playing`;
    },
    tidur: function (jam) {
        this.energi += jam * 2;
        return `Tidor tross, Selamat Tidor ${this.nama}, enjoy Sleep`;
    }
}

function Mahasiswa(nama, energi) {
    // object create untuk mengambil object lain untuk di gabungkan
    let mahasiswa = Object.create(methodMahasiswa);
    mahasiswa.nama = nama;
    mahasiswa.energi = energi;

    return mahasiswa;
}
let mhs1 = Mahasiswa('kuplak', 10)
let mhs2 = Mahasiswa('kemet', 20)



// 3. Constructor Function
// function Mahasiswa(nama, energi) {
//     this.nama = nama;
//     this.energi = energi;

//     this.makan = function (porsi) {
//         this.energi += porsi;
//         return `anjay makan, Selamat Makan ${this.nama}, enjoy Eat`;
//     }
//     this.Main = function (jam) {
//         this.energi -= jam;
//         return `Main Game mulu, Selamat Main ${this.nama}, enjoy Playing`;
//     }
// }
// let mhs1 = new Mahasiswa('emoy', 10)
// let mhs2 = new Mahasiswa('mamat', 20)



// 4. Object.create