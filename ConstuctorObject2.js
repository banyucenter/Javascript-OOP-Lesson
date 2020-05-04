function Mahasiswa(nim, nama, kelas, umur, semester, matakuliah) {
    //property
    this.profil = {
        nim: nim,
        nama: nama
    };
    this.kelas = kelas
    this.umur = umur
    this.semester = semester
    this.matakuliah = matakuliah

    //method
    this.profilmahasiswa = () => {
        console.log(
            'Nim: ' +
            this.profil.nim + ' ' +
            'Nama: ' + ' ' +
            this.profil.nama + ' ' +
            'Umur: ' + ' ' +
            this.umur + ' Tahun' + ' ' +
            'Mata Kuliah Dipilih: ' + ' ' +
            this.matakuliah[0] + ' dan ' + ' ' +
            this.matakuliah[1] + '.');
    };

}

let mahasiswa1 = new Mahasiswa(
    '201801138',
    'Eva Ratna Palupi',
    'Kelas B',
    20,
    6,
    ['Pemrograman Website', 'Manajemen Proyek SI']
)

mahasiswa1.profilmahasiswa()