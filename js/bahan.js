var dataBarang = [
  "1/4 tepung sagu",
  "kaldu ayam ",
  "1 gelas air",
  "1 siung bawang putih",
];

function showBarang() {
  var listBarang = document.getElementById("papeda");
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

// rendang
