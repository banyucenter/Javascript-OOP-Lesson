class Buah {
  // constructor
  constructor(nama, rasa, warna) {
    this.nama = nama;
    this.rasa = rasa;
    this.warna = warna
  }
  //method
  ubahnama = (namabaru) => {
    return this.nama = namabaru
  }

  hargaperkilo = 10000
  //method
  hargabeli = (jumlah) => {
    return jumlah * this.hargaperkilo
  }


};

apel = new Buah("Apel", "Manis", "Merah")

console.log(apel.warna)
apel.ubahnama('Apel Oke')
console.log(apel.hargabeli(5))

