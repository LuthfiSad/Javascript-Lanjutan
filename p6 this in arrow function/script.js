// // Constructor Function (object)
// const Mahasiswa = function () {
//     this.nama = 'Luthfi';
//     this.umur = 18;
//     this.sayHello = function () {
//         return `Hello my name ${this.nama}, and my age ${this.umur} years old`;
//     }
// }
// const mhs1 = new Mahasiswa();

// // mengubah Constructor Function menjadi arrow function
// // object nya tidak bisa di ubah karena menggunakan constructor hanya methodnya saja
// const Mahasiswa = function () {
//     this.nama = 'Luthfi';
//     this.umur = 18;
//     this.sayHello = () => {
//         return `Hello my name ${this.nama}, and my age ${this.umur} years old`;
//     }
// }
// const mhs1 = new Mahasiswa();




// // Object Literal
// const mhs1 = {
//     nama: 'luthfi',
//     umur: 18,
//     sayHello: function () {
//         return `Hello my name ${this.nama}, and my age ${this.umur} years old`;
//     }
// }

// // mengubah Object Literal menjadi arrow function
// const mhs1 = {
//     nama: 'luthfi',
//     umur: 18,
//     sayHello: () => {
//         return `Hello my name ${this.nama}, and my age ${this.umur} years old`;
//         // output: 'Hello my name undefined, and my age undefined years old'
//         // kenapa undefined = karena arrow function tidak memiliki konsep this
//     }
// }



// // lanjut menggunakan constructor function
// const Mahasiswa = function () {
//     this.nama = 'Luthfi';
//     this.umur = 18;
//     this.sayHello = () => {
//         return `Hello my name ${this.nama}, and my age ${this.umur} years old`;
//     }

//     // // Function yang otomatis di jalanin dan bentuk nya bukan method
//     setInterval(function () {
//         console.log(this.umur++);
//     }, 500)
//     // // arti 500 yaitu jalankan isi dari function ini setiap 500 milisecond
//     // // outputnya = Nan, karena this di deklaration function akan mengecek ke global, bukan di local

//     // ubah menjjadi arrow function
//     setInterval(() => {
//         console.log(this.umur++);
//     }, 500)
// }
// const mhs1 = new Mahasiswa();



// membuat animasi box
// mengambil data yang classnya .box
const box = document.querySelector('.box');
box.addEventListener('click', function () {
    let satu = 'size';
    let dua = 'caption';

    if (this.classList.contains(satu)) {
        [satu, dua] = [dua, satu];
    }

    this.classList.toggle(satu);

    setTimeout(() => {
        this.classList.toggle(dua);
    }, 600);
})