let mahasiswa1 = new Object();

mahasiswa1.nama = "Eva R P"
mahasiswa1.umur = 20
mahasiswa1.semester = 6
mahasiswa1.matakuliah = new Array("PPL", "Pemrograman Web", "Sistem Operasi")

mahasiswa1.ambilkuliah = function () {
    console.log(
        "Matakuliah Pilihan " + this.nama +
        " Mata Kuliah Pilihan: " + this.matakuliah[0] +
        " dan " + this.matakuliah[1])
}

console.log(mahasiswa1.umur)
mahasiswa1.ambilkuliah()