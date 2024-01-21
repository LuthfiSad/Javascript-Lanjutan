// // Spread Operator = Memecah Iterables Menjadi single Element
// const mhs = ['dimas', 'anjay', 'mabar'];
// console.log(...mhs[0]);
// console.log(mhs[0]);

// // Kegunaan Spread Operator :


// // 1. Menggabungkan Dua Array
// const mhs = ['dimas', 'anjay', 'mabar'];
// const dosen = ['Ashoy', 'Gebhoy', 'Enjoy'];
// // Menggunakan Spread Operator, bisa menambahkan 1 element pada array, dan menggabungkan 2 array
// const orang = [...mhs, 'Ujang', ...dosen];
// // Jika Menggunakan Concat / Bukan Spread operator
// // const orang = mhs.concat(dosen);
// console.log(orang);

// // 2. Mencopy Array
// const mhs = ['dimas', 'anjay', 'mabar'];
// // const mhs1 = mhs; // salah
// const mhs1 = [...mhs];
// mhs1[0] = 'kijang';
// console.log(mhs1);

// const liMhs = document.querySelectorAll('li');
// // const mhs = [];
// // for Biasa
// // for(let i =0; i<liMhs.length; i++){
// //     mhs.push(liMhs[i].textContent);
// // }

// // for of
// // for( n of liMhs){
// //     mhs.push(n.innerHTML)
// // }

// // Map
// // Error Karena liMhs Bukan Array, Harus Diubah Dlu Ke array
// // const mhs = liMhs.map(n=>n.textContent);
// // Sudah Di Ubah Ke Array Baru Bisa
// const mhs = [...liMhs].map(n=>n.textContent);
// console.log(mhs);

// 3. Mengambil Character Tunggal di dalam String
const nama = document.querySelector('.nama');
const huruf = [...nama.innerHTML].map(h=> `<span>${h}</span>`).join('');
console.log(huruf);
nama.innerHTML = huruf;