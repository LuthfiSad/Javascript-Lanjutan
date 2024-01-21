// // 1. HTML Fragments
// const mhs = {
//     nama: 'Luthfi',
//     umur: 17,
//     nrp: '053234134',
//     email: 'kelazz@gmail.com'
// };

// const el = `<div class="mhs">
//         <h2>${mhs.nama}</h2><span class="nrp">${mhs.nrp}</span>
//     </div>`;



// // 2. looping
// const mhs = [{
//         nama: 'luthfi',
//         email: 'luthfi@gmail.com'
//     },
//     {
//         nama: 'sadli',
//         email: 'sadli@gmail.com'
//     },
//     {
//         nama: 'anjay',
//         email: 'anjay@gmail.com'
//     }
// ]

// const el = `<div class="mhs">
// ${mhs.map(a=>`<ul>
// <li>${a.nama}</li>
// <li>${a.email}</li>
// </ul>`).join('')}
// </div>`



// // 3. Conditionals
// // ternary
// const lagu = {
//     judul: 'Kau Adalah',
//     penyanyi: 'Isyana Saraswati',
//     feat: 'Rayi Putra'
// }
// const el = `<div class="lagu">
// <ul>
// <li>${lagu.penyanyi}</li>
// <li>${lagu.judul}${lagu.feat ? `(Feat. ${lagu.feat})` : ''}</li>
// </ul>
// </div>`



// 4. Nested 
// HTML Fragments bersarang
const mhs = {
    nama : 'Ujang', 
    semester: 5,
    mataKuliah: [
        'Rekayasa Web',
        'Analis dan Perancangan Sistem Informasi',
        'Pemrograman Sistem Interaktif',
        'Perancangan Sistem Berorientasi Object'
    ]
}

function cetakMatakuliah(mataKuliah){
    return `
    <ol>
    ${mataKuliah.map(a=>`
    <li>${a}</li>
    `).join('')}
    </ol>
    `
}

const el = `<div class="mhs">
<h2>${mhs.nama}</h2>
<span class="semester">Semester : ${mhs.semester}</span>
<h4>Mata Kuliah : </h4>
${cetakMatakuliah(mhs.mataKuliah)}
</div>`


document.body.innerHTML = el;