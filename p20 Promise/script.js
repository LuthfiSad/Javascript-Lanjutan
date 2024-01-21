// // Jika menggunakan Library JQuery
// $.ajax({
//     url: "http://www.omdbapi.com/?apikey=dca61bcc&s=avengers",
//     success: movies => console.log(movies)
// });


// //  Jika Menggunakan Versi vanilla Javascript (lebih Panjang, ada yang lebih simple)
// let xhr = new XMLHttpRequest();
// xhr.onreadystatechange = function () {
//    if (xhr.status===200) {
//       if (xhr.readyState === 4) {
//          console.log(JSON.parse(xhr.response));
//       }
//    } else {
//       console.log(xhr.responseText);
//    }
// }
// xhr.open('get', "http://www.omdbapi.com/?apikey=dca61bcc&s=avengers");
// xhr.send();


// // Jika Menggunakan Fetch (lebih simple)
// fetch('http://www.omdbapi.com/?apikey=dca61bcc&s=avengers')
//  .then(result => result.json())
//  .then(result=> console.log(result.Search))
// console.log(fetch('http://www.omdbapi.com/?apikey=dca61bcc&s=avengers'));


// Promise = Object yang mempresentasikan keberhasilan / kegagalan sebuah event yang asyncronous di masa yang akan datang
// Promise / Janji bisa (Terpenuhi / Ingkari)
// di sebut dengan state (fulfilled / rejected / pending)
// 3 funsi callback (resolve / reject / finally)
// didalam promise ini ada aksi (then / catch)

// // contoh promise 1
// let ditepati = true;
// const janji1 = new Promise((resolve, reject)=>{
//    if(ditepati){
//       resolve('Janji telah ditepati!');
//    } else {
//       reject('Ingkar Janji..');
//    }
// })
// // cek apakah asyncronous
// console.log('mulai');
// janji1
// // Kegunaan the untuk mengambil resolve / data true yang dikirim
// .then(response => console.log('OK! '+ response))
// .catch(response => console.log('NOT OK! '+ response))
// console.log('selesai');

// // contoh promise 2
// let ditepati = true;
// const janji2 = new Promise((resolve, reject)=>{
//    if(ditepati){
//       setTimeout(()=>{
//          resolve('Janji Ditepati setelah beberapa waktu!')
//       }, 2000)
//    } else {
//       setTimeout(()=>{
//          resolve('Janji Ditepati setelah beberapa waktu!')
//       }, 2000)
//    }
// })

// console.log('mulai');
// // console.log(janji2.then(()=>console.log(janji2)));
// janji2
// // finally untuk sebelum then atau catch di jalani
// .finally(()=>console.log('Selesai Menunggu'))
// .then(response => console.log('OK! '+ response))
// .catch(response => console.log('NOT OK! '+ response))
// console.log('selesai');


// // Promise.all
const film = new Promise(resolve =>{
   setTimeout(()=> {
      resolve([{
         judul: 'Avengers',
         sutradara: 'Luthfi',
         pemeran: 'Anjas, Kelaz'
      }])
   }, 1000)
})

const cuaca = new Promise(resolve => {
   setTimeout(()=> {
      resolve([{
         kota: 'Bandung',
         temp: 26,
         kondisi: 'Cerah Berawan'
      }])
   }, 500)
})
// // ika 1/1 dijalanin
// film.then((response)=> console.log(response))
// cuaca.then(response => console.log(response))

// jika langsung 2 di jalanin
Promise.all([film, cuaca])
.then(response => {
   const [film, cuaca] = response;
   console.log(film);
   console.log(cuaca);
})