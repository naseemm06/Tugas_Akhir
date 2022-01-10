var dataBarang = [
  "2 liter santan (dihasilkan dari 2 buah kelapa tua)",
  "1.5 kg daging ",
  "2 lembar daun kunyit, simpulkan",
  "4 lembar daun jeruk purut",
  "2 cm asam kandis(gelugur)",
  "2 batang daun serai, memarkan",
  "12 butir bawang merah",
  "2 cm jahe, bakar",
  "1 sdt jintan, sangrai",
  "1/2 sdt pala",
  "Penyedap rasa secukupnya",
  "100 g cabe merah besar",
];

function showBarang() {
  var listBarang = document.getElementById("rendang");
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
