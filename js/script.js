function fAdd() {
  var a = document.forms["Kalkulator"]["fnilaiA"].value;
  var b = document.forms["Kalkulator"]["fnilaiB"].value;
  var c = Number(a) + Number(b);
  document.getElementById("Hasil").innerHTML = c;
}

var tgl = new Date();
document.getElementById("tanggal").innerHTML = "waktu akses " + tgl;

window.setTimeout("waktu()", 1000);
function waktu() {
  var waktu = new Date();
  setTimeout("waktu()", 1000);
  document.getElementById("jam").innerHTML = waktu.getHours();
  document.getElementById("menit").innerHTML = waktu.getMinutes();
  document.getElementById("detik").innerHTML = waktu.getSeconds();
}

// mengubah warna CSS perdetik
var i = 0;
function change() {
  var classJamDigital = document.getElementsByClassName("jam_digital");
  var color = ["DarkBlue", "Indigo", "MediumSlateBlue"];

  classJamDigital[0].style.backgroundColor = color[i];

  i = (i + 1) % color.length;
}
setInterval(change, 1000);

var paragraf = document.getElementsByClassName("paragraf");
setInterval(function () {
  paragraf[0].style.color = "red";
  setTimeout(function () {
    paragraf[0].style.color = "black";
  }, 500);
}, 1000);
