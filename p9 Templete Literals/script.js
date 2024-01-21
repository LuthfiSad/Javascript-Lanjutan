// Templete Literal / Templete String
const nama = 'Luthfi';
const umur = 17;
console.log(`Halo, nama saya ${nama}, dan saya ${umur} tahun`);
console.log('Halo, nama saya ' + nama + ', dan saya ' + umur + ' tahun');

// menggunakan Embedded Expression
console.log(`${1+1}`);
console.log(`${alert('halo')}`);
const x = 9;
console.log(`${(x%2==0)? 'genap':'ganjil'}`);

// menggunakan HTML Fragment
const mhs = {
    nama: 'Luthfi',
    umur: 17,
    nrp: '053234134',
    email: 'kelazz@gmail.com'
};
const el = `<div class="mhs">
        <h2>${mhs.nama}</h2><span class="nrp">${mhs.nrp}</span>
    </div>`

console.log(el);