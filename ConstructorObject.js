function buatKelasOnline(namakelas) {
    const kelas = {};
    kelas.nama = namakelas
    kelas.peserta = 30
    kelas.sayhello = function () {
        return console.log('Selamat datang di Kelas ' + kelas.nama + '.');
    };
    return kelas;
}

//Buat objek baru
const kelasbaru = buatKelasOnline('Kelas B')
console.log(kelasbaru.nama)
kelasbaru.sayhello()

//Buat objek baru
let kelasa = buatKelasOnline('Kelas A')
console.log(kelasa.nama)