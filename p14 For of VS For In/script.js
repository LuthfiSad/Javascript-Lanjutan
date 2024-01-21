// // For..of = Untuk iterable / Looping berupa isi array, String, NodeList, Arguments
// // 1. Array
// const mhs = ['dimas', 'anjay', 'mabar'];

// // For biasa
// for(let i = 0; i < mhs.length; i++){
//   console.log(mhs[i]);
// }

// // Foreach
// mhs.forEach(m => console.log(m));

// For..of
// for( const m of mhs){
//   console.log(m);
// }

// // jika ingin mengambil index

// mhs.forEach((m, i) => console.log(`${m} Adalah Mahasiswa Ke- ${i+1}`));

// // Kegunaan entries pada for in and for of untuk menjadikan isi array menjadi object dengan nilai indexnya
// for ( const [i, m] of mhs.entries()){
//   console.log(`${m} Adalah Mahasiswa Ke- ${i+1}`);
// }


// // 2. String
// const nama = 'Angjas';
// for (n of nama)[
//   console.log(n)
// ]


// // 3. NodeList
// const liNama = document.querySelectorAll('.nama');

// liNama.forEach(n => console.log(n.innerHTML))
// for(l of liNama){console.log(l.textContent)}


// // 4. Arguments
// function jumlahkanAngka() {
//   let jumlah = 0;
//   // Error Karena Reduce & Foreach untuk array bukan untuk arguments
//   // arguments.reduce((a, i)=>a+i);
//   // arguments.forEach(n => jumlah += n);

//   for (j of arguments){
//     jumlah+=j;
//   }
//   return jumlah
// }
// console.log(jumlahkanAngka(1,2,3,4,5));




// For..in = untuk iterable / Looping berupa Object
const mhs = {
  nama: 'Ashoy',
  umur: 23,
  email: 'Ashoy@gmail.com'
}
// jika ingin mengambil index nya
for (m in mhs){
  console.log(m);
}
// jika ingin mengambil Value nya
for (m in mhs){
  console.log(mhs[m]);
}