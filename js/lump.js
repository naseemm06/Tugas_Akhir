var dataBarang = [
  "1 kg rebung, direbus lalu dirajang",
  "200 gram dada ayam, direbus lalu disuwir",
  "200 gram udang, potong kecil-kecil",
  "3 batang daun bawang pre, diiris",
  "10 siung bawang putih, dihaluskan",
  "gula, garam, kaldu bubuk, lada bubuk, dan kecap manis secukupnya",
  "150 gram tepung terigu",
  "20 gram tepung kanji",
  "1/2 sdt garam",
  "1 butir telur",
  "300 ml air",
  "1150 ml santan kelapa",
];

function showBarang() {
  var listBarang = document.getElementById("lumpia");
  // clear list barang
  listBarang.innerHTML = "";
  // cetak semua barang
  for (let i = 0; i < dataBarang.length; i++) {
    var btnEdit = "<a href='#' onclick='editBarang(" + i + ")'>Edit</a>";
    var btnHapus = "<a href='#' onclick='deleteBarang(" + i + ")'>Hapus</a>";

    listBarang.innerHTML +=
      "<li>" + dataBarang[i] + " [" + btnEdit + " | " + btnHapus + "]</li>";
  }
}
function addbarang() {
  var input = document.querySelector("input[name=barang]");
  dataBarang.push(input.value);
  showBarang();
}
function editBarang(id) {
  var newBarang = prompt("Nama baru", dataBarang[id]);
  dataBarang[id] = newBarang;
  showBarang();
}
function deleteBarang(id) {
  dataBarang.splice(id, 1);
  showBarang();
}
showBarang();
