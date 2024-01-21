// ambil elemet video
const videos = Array.from(document.querySelectorAll('[data-duration]'));

// pilih hanya yang 'JAVASCRIPT LANJUTAN'
let jsLanjut = videos.filter(video => video.textContent.includes('JAVASCRIPT LANJUTAN'))

    // ambil durasi masing2 video  
    .map(item => item.dataset.duration)

    // ubah durasi menjadi int, ubah menit menjadi detik
    .map(waktu => {
        // 10:30 => [10, 30] split
        const parts = waktu.split(':').map(part => parseFloat(part));
        return (parts[0] * 60) + parts[1];
    })

    // jumlahkan semua detik nya
    .reduce((total, detik) => total + detik);

// lalu ubah lagi formatnya menjadi jam menit detik
const jam = Math.floor(jsLanjut / 3600);
jsLanjut = jsLanjut - (jam * 3600);
const menit = Math.floor(jsLanjut / 60);
const detik = jsLanjut - (menit * 60);

// simpan di DOM
const pdurasi = document.querySelector('.total-durasi');
pdurasi.textContent = `${jam} Jam, ${menit} menit, ${detik} Detik`;
const jmlVideo = videos.filter(video => video.textContent.includes('JAVASCRIPT LANJUTAN')).length;
const pJmlVideo = document.querySelector('.jumlah-video');
pJmlVideo.textContent = jmlVideo + ' Video';