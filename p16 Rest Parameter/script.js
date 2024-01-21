// // Rest Parameter

// function myFunc(...myArgs) {
//     // return `a = ${a}, b = ${b}, myArgs = ${myArgs}`;
//     return myArgs;

//     // Jika menggunakan arguments dan menjadikan ke array
//     // return Array.from(arguments);
//     // return [...arguments]; 
// }
// console.log(myFunc(1,2,3,4,5));


// // Menjumlahkan Bilangan
// function jumlahkan(...angka) {
//     let total = 0;
//     for(a of angka){
//         total += a;
//     }
//     return total;
//     // return angka.reduce((a,b)=> a+b);
// }
// console.log(jumlahkan(1,2,3,4,5));


// // Array Destructuring
// const klmpk1 = ['ashoy', 'gebhoy', 'mujaer', 'nangningnung', 'pakpukpak'];
// const [ketua, wakil, ...anggota]=klmpk1;
// console.log(anggota);


// // Object Destructuring
// const team = {
//     pm: 'Luthfi',
//     frontEnd: 'Sadli',
//     frontEnd2: 'Asikk',
//     backEnd: 'Gokils',
//     ux: 'Anjas',
//     devOps: 'Kelazz'
// }
// const {pm, ...myTeam} = team;
// console.log(pm);


// Filtering
function filterBy(type, ...values){
    return values.filter(v => typeof v === type);
}
console.log(filterBy('number', 1, 2, 'Luthfi', false, 10, true, 'Ujang'));
