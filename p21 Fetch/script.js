// // jika menggunakan JQuery
// $('.search-button').on('click', function(){
//     const movies = $('.input-keyword').val();
//     $.ajax({
//         url: 'http://www.omdbapi.com/?apikey=dca61bcc&s='+movies,
//         success: result => {
//             const movies = result.Search;
//             let card = '';
//             movies.forEach(m=> {
//                 card += showCards(m);
//             })
//             // Jika Menggunakan JQuery
//             $('.movie-container').html(card);
            
//             // // Jika Javascript Native
//             // const row = document.querySelector('.movie-container');
//             // row.innerHTML += card;


//             // Ketika Tombol Detail di click
//             $('.modal-detail-button').on('click', function(){
//                 $.ajax({
//                     url: 'http://www.omdbapi.com/?apikey=dca61bcc&i='+$(this).data('imdbid'),
//                     success: detail => {
//                         let movieDetail = '';
//                         movieDetail += showMovieDetail(detail);
//                         $('.modal-body').html(movieDetail);
//                     },
//                     error: e => console.log(e.responseText),
//                 })
//             })
//         },
//         error: e => console.log(e.responseText),
//     })
// });


// Jika Menggunakan Fetch & vanilla Javascript
const searchButton = document.querySelector('.search-button');
searchButton.addEventListener('click', function(){
   const inputKeyword = document.querySelector('.input-keyword');
   fetch('http://www.omdbapi.com/?apikey=dca61bcc&s='+inputKeyword.value)
   .then(response=>response.json())
   .then(response=>{
      const movies = response.Search;
      let card = '';
      movies.forEach(m=> {
         card += showCards(m);
      })
      document.querySelector('.movie-container').innerHTML = card;

      // Ketika Tombol Detail di click
      const modalDetailButton = document.querySelectorAll('.modal-detail-button');
      modalDetailButton.forEach(btn =>{
         btn.addEventListener('click', function(){
            fetch('http://www.omdbapi.com/?apikey=dca61bcc&i='+this.dataset.imdbid)
            .then(response => response.json())
            .then(response=>{
               let movieDetail = '';
               movieDetail += showMovieDetail(response);
               document.querySelector('.modal-body').innerHTML = movieDetail;
            })
         })
      })
   })
})


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
