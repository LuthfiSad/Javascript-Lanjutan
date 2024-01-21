// // Destructuring Variable / Assignment

// // 1. Destructuring Array
// const perkenalan = ['Halo', 'Nama', 'Saya', 'Uhuy'];
// // const [a,b,c,d] = perkenalan;

// // skipping items
// const [a, , ,d] = perkenalan;
// console.log(d);

// // Swap Items
// let a = 1;
// let b = 2;
// console.log(a);
// console.log(b);
// [a, b]=[b,a];
// console.log(a);
// console.log(b);

// // retunr value pada function
// function coba(){
//   return [1, 2];
// }
// const [a,b] = coba();
// console.log(a);

// // Rest parameter
// // values akan berbentuk array
// const [a, ...values]=[1,2,3,4,5];
// console.log(values[1]);
// console.log(a);


// // 2. Destructuring Object
// const mhs = {
//   nama: 'kocag',
//   umur: 4
// }
// const {nama, umur}=mhs;
// console.log(nama);

// // Assigment Tanpa deklarasi object
// ({nama, umur}={nama: 'kocag', umur: 4});
// console.log(nama);

// // Assign Ke Variabel Baru
// const mhs = {
//   nama: 'kocag',
//   umur: 4
// }
// const {nama:n, umur:u}=mhs;
// console.log(n);

// // Memberikan Default Value
// const mhs = {
//   nama: 'kocag',
//   umur: 4,
//   email: 'kocag@gmail.com'
// }
// // jika tidak ada email, akan mengambil default nya
// const {nama, umur, email='email@default.com'}=mhs;
// console.log(email);

// // Memberikan nilai Default dan juga assign ke variabel baru
// const mhs = {
//   nama: 'kocag',
//   umur: 4
// }
// const {nama:n='namaDefault', umur:u=7, email:e='email@default.com'}=mhs;
// console.log(n);

// // Memberikan Rest Parameters
//  const mhs = {
//   nama: 'kocag',
//   umur: 4,
//   email: 'kocag@gmail.com'
// }
// // kocag akan berbentuk object
// const {nama, ...kocag}=mhs;
// console.log(kocag);


// Mengambil Field pada object, setelah dikirim sebaai parameter untuk function
 const mhs = {
  id: 123,
  nama: 'kocag',
  umur: 4,
  email: 'kocag@gmail.com'
}
// hanya mengambil id, nama nya saja
function getIdMhs({id,nama}){
  return nama;
}
console.log(getIdMhs(mhs));