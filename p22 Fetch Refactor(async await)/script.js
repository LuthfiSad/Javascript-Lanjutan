// // Jika Menggunakan Fetch & vanilla Javascript
// const searchButton = document.querySelector('.search-button');
// searchButton.addEventListener('click', function(){
//    const inputKeyword = document.querySelector('.input-keyword');
//    fetch('http://www.omdbapi.com/?apikey=dca61bcc&s='+inputKeyword.value)
//    .then(response=>response.json())
//    .then(response=>{
//       const movies = response.Search;
//       let card = '';
//       movies.forEach(m=> {
//          card += showCards(m);
//       })
//       document.querySelector('.movie-container').innerHTML = card;

//       // Ketika Tombol Detail di click
//       const modalDetailButton = document.querySelectorAll('.modal-detail-button');
//       modalDetailButton.forEach(btn =>{
//          btn.addEventListener('click', function(){
//             fetch('http://www.omdbapi.com/?apikey=dca61bcc&i='+this.dataset.imdbid)
//             .then(response => response.json())
//             .then(response=>{
//                let movieDetail = '';
//                movieDetail += showMovieDetail(response);
//                document.querySelector('.modal-body').innerHTML = movieDetail;
//             })
//          })
//       })
//    })
// })


// Perbaiki Code di atas agar mudah dibaca
const searchButton = document.querySelector('.search-button');
// Asynce = untuk memberi tau kalau di dalem funtion itu ada asyncronous
searchButton.addEventListener('click', async function(){
   const inputKeyword = document.querySelector('.input-keyword');
   // await = untuk menandakan kalau itu ada asyncronous / menunggu agar tidak di masukn ke movies sebelum di jalankan
   const movies = await getMovies(inputKeyword.value);
   updateUI(movies);
})


// event binding
document.addEventListener('click', async function(e){
   if(e.target.classList.contains('modal-detail-button')){
      const imdbid = e.target.dataset.imdbid;
      const  movieDetail = await getMovieDetail(imdbid);
      updateUIDetail(movieDetail);
   }
})

function getMovieDetail(imdbid){
   return fetch('http://www.omdbapi.com/?apikey=dca61bcc&i='+imdbid)
      .then(response => response.json())
      .then(response=> response)
}

function updateUIDetail(m){
   let movieDetail = showMovieDetail(m);
   document.querySelector('.modal-body').innerHTML = movieDetail;
}

function getMovies(keyword){
   return fetch('http://www.omdbapi.com/?apikey=dca61bcc&s='+keyword)
   .then(response=>response.json())
   .then(response=> response.Search)
}

function updateUI(movies){
   let card = '';
   movies.forEach(m=> {
      card += showCards(m);
   })
   document.querySelector('.movie-container').innerHTML = card;
}


function showCards(m){
    return `<div class="col-md-4 my-3">
                <div class="card">
                    <img src="${m.Poster}" class="card-img-top">
                    <div class="card-body">
                        <h5 class="card-title">${m.Title}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">${m.Year}</h6>
                        <a href="#" class="btn btn-primary modal-detail-button" data-toggle="modal" data-target="#exampleModal" data-imdbid="${m.imdbID}">Show Details</a>
                    </div>
                </div>
            </div>`;
}
function showMovieDetail(detail){
 return `<div class="container-fluid">
            <div class="row">
               <div class="col-md-3">
                  <img src="${detail.Poster}" class="img-fluid">
               </div>
               <div class="col-md">
                  <ul class="list-group">
                     <li class="list-group-item">
                        <h4>${detail.Title} (${detail.Year})</h4>
                     </li>
                     <li class="list-group-item"><strong>Director : </strong>${detail.Director}</li>
                     <li class="list-group-item"><strong>Actors : </strong>${detail.Actors}</li>
                     <li class="list-group-item"><strong>Writer : </strong>${detail.Writer}</li>
                     <li class="list-group-item"><strong>Plot : </strong>${detail.Plot}</li>
                  </ul>
               </div>
            </div>
         </div>`
}
