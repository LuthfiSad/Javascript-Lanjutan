// // Tagged Templetes
// const nama = 'Luthfi';
// const umur = 23;

// // kegunaan ...values untuk mengambil expression nya
// function coba(strings, ...values){
//     // let result = '';
//     // strings.forEach((str, i)=>{
//     //     result+=`${str} ${values[i]||''}`
//     // })
//     // return result;

//     return strings.reduce((result, str, i)=>`${result}${str}${values[i] ||''}`, '')
// }

// const str = coba`Halo nama saya ${nama}, saya ${umur} Tahun`;
// console.log(str);



// Highlight
const nama = 'Luthfi';
const umur = 23;
const email = 'luthfi@tokped.com';

function highlight(strings, ...values){
  return strings.reduce((result, str, i)=>`${result}${str}<span class="hl">${values[i] ||''}</span>`, '')
}

const str = highlight`Halo nama saya ${nama}, saya ${umur} Tahun, dan Email saya ${email}`;
document.body.innerHTML=str;
