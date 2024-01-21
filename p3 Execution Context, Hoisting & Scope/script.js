// 2.1 Execution Context, Hoisting & Scope

// console.log(nama);
// var nama = 'Luthfi';
// // output = undefined

// // disebut dengan creation phase pada Global Context
// // Mencari variable dan function terlebuh dahulu 
// // lalu var nama tersebut akan berinilai pertama undefined
// // dan function akan bernilain function itu sendiri = fn()
// // konsepnya disebut hoisting
// // definisi yang lain
// // window = global object
// // this = window


// // - contoh lain
// console.log(sayHello());
// // output = Hello, my name is undefined, my age undefined years old
// // undefined karena awal var tersebut belum bernilai/undefined
// var name = 'kocag';
// var umur = 22;
// console.log(sayHello());
// // output = Hello, my name is kocag, my age 22 years old
// // tidak undefined karena sudah di isi terlebih dulu, baru di console log

// function sayHello() {
//     return `Hello, my name is ${name}, my age ${umur} years old`;
// }
// // Function membuat local Execution Context
// // yang di dalamnya terdapat juga creation dan juga execution phase
// // bedanya local execution context yaitu bisa akses window dan arguments
// // dan di dalamnya juga ada hoistingnya, untuk functionnya itu sendiri


// // contoh function local execution context
// function a() {
//     console.log('ini a')

//     function b() {
//         console.log('ini b')

//         function c() {
//             console.log('ini c')
//         }
//         c();
//     }
//     b();
// }
// a();


// // contoh again
// var nama = 'ashoy';
// var username = '@gokils';

// function cetakUrl() {
//     console.log(arguments);
//     // @gimank masuk ke arguments
//     var instagramUrl = 'http://instagram.com/'
//     console.log(instagramUrl + username);
//     return instagramUrl + arguments[1];
// }

// console.log(cetakUrl('@gimank', '@enjoy'))




// dan contoh again
function satu() {
    var nama = 'kujang';
    console.log(nama);
}

function dua() {
    console.log(nama)
}

console.log(nama);
var nama = 'ujang';
satu();
dua('doddy');
console.log(nama);