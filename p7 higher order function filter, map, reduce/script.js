const angka = [1, 8, 4, 5, 6, 7, 11, 17, 9, 2];

// mencari angka yang >= 7

// // jika menggunakan for untuk mnecari angka lebih dari samadengan 7
// const angkaBaru = [];
// for (let i = 0; i < angka.length; i++) {
//     if (angka[i] >= 7) {
//         angkaBaru.push(angka[i]);
//     }
// }
// console.log(angkaBaru)



// // jika menggunakan filter
// const angkaBaru = angka.filter(a => a >= 7);
// // mencari angka yang lebih dari samadengan tujuh
// console.log(angkaBaru);
// // output = [8, 7, 11, 17, 9]

// // jika menggunakan map
// // kalikan semua angka dngan 2
// const angkaBaru = angka.map(a => a * 2);
// // gambarannya = (1*2), (8*2), (4*2), (5*2), (6*2), (7*2), 1(1*2), 1(7*2), (9*2), (2*2)
// console.log(angkaBaru);
// // output = [2, 16, 8, 10, 12, 14, 22, 34, 18, 4]

// // jika menggunakan reduce
// // jumlahkan seluruh element pada array
// const angkaBaru = angka.reduce((a, b) => a + b, 5); // angka 5 yaitu awal nilai, niai mulainya, jika tidak di tulis default nya = 0
// // gambarannya = 5 + 1 + 8 + 4 + 5 + 6 + 7 + 11 + 17 + 9 + 2
// console.log(angkaBaru);
// // output = 75



// method chaining(menggabungkan)
// 1. cari angka > 5 
// 2. hasilnya dikalikan 3
// 3. hasilnya dibagikan 2
// 4. jumlahkan semua hasil
const hasil = angka.filter(a => a <= 7) //output= [1, 4, 5, 6, 7, 2]
    .map(a => a * 3) // output=[3, 12, 15, 18, 21, 6]
    .map(a => a / 2) // output = [1.5, 6, 7.5, 9, 10.5, 3]
    .reduce((a, b) => a + b); // output=37.5
console.log(hasil);