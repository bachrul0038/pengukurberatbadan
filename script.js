var age = document.getElementById("age");
var height = document.getElementById("height");
var weight = document.getElementById("weight");
var male = document.getElementById("m");
var female = document.getElementById("f");
var form = document.getElementById("form");
function validateForm() {
  if (age.value == "" || height.value == "" || weight.value == "" || (male.checked == false && female.checked == false)) {
    alert("Data mu belum lengkap sayangku!");
    document.getElementById("submit").removeEventListener("click", countBmi);
  } else {
    countBmi();
  }
}
document.getElementById("submit").addEventListener("click", validateForm);
function countBmi() {
  var p = [age.value, height.value, weight.value];
  if (male.checked) {
    p.push("male");
  } else if (female.checked) {
    p.push("female");
  }
  form.reset();
  var bmi = Number(p[2]) / (((Number(p[1]) / 100) * Number(p[1])) / 100);
  var result = "";
  if (bmi < 18.5) {
    result = "Berat badan mu kurang";
  } else if (18.5 <= bmi && bmi <= 24.9) {
    result = "tubuh sehat dan seksi";
  } else if (25 <= bmi && bmi <= 29.9) {
    result = "Badan mu kegemukan";
  } else if (30 <= bmi && bmi <= 34.9) {
    result = "badan mu Gendut diet lu :( ";
  } else if (35 <= bmi) {
    result = "Sangat gendut";
  }
  var h1 = document.createElement("h1");
  var h2 = document.createElement("h2");
  var t = document.createTextNode(result);
  var b = document.createTextNode("masa tumbuh Mu: ");
  var r = document.createTextNode(parseFloat(bmi).toFixed(2));
  h1.appendChild(t);
  h2.appendChild(b);
  h2.appendChild(r);
  document.body.appendChild(h1);
  document.body.appendChild(h2);
  document.getElementById("submit").removeEventListener("click", countBmi);
  document.getElementById("submit").removeEventListener("click", validateForm);
}
document.getElementById("submit").addEventListener("click", countBmi);
