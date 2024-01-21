// // lexical scope
// function init() {
//     // let nama = 'luthfi';
//     // let umur = 20;

//     return function (nama) {
//         console.log(nama);
//     }

// }
// kegunaan menggnakan variable panggilNama karena agar init(); untuk menjalankan function nya sendiri, dan variable panggilNama untuk menjalankan function inner nya / function di dalamnya
// let panggilNama = init();
// panggilNama('koplaks')


// function ucapkanSalam(waktu) {
//     return function (nama) {
//         console.log(`Halo ${nama}, Selamat ${waktu}, Semoga harimu menyenangkan!`);
//     }
// }
// let selamatPagi = ucapkanSalam('Pagi');
// let selamatSiang = ucapkanSalam('Siang');
// let selamatSore = ucapkanSalam('Sore');
// let selamatMalam = ucapkanSalam('Malam');
// selamatMalam('Sadli');



let add = (function () {
    let counter = 0;
    return function () {
        return ++counter;
    }
}());

console.log(add());
console.log(add());
console.log(add());
console.log(add());
console.log(add());