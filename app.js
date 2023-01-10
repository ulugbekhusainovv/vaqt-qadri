// var, let, const
// let ism = prompt(`Ismingizni kiriting:`);
// let familya = prompt(`Familyangizni kiriting:`);
// const dob = prompt(`Tug'ilgan sanangizni kiriting:`);
// let manzil = prompt(`Yashash manzilingizni kiriting:`);
// let tel = prompt(`Telefon raqamingizni kiriting:`);

// document.body.textContent = natija;
// const natija = `Salom, meing ismim ${ism}. Familyam ${familya}. \n Yoshim ${
//   2023 - dob
// }da. Hozirda ${manzil}da yashayman. Raqamim ${tel}.`;

// document.querySelector("body").classList.add("active");

// programing

let ism = prompt(`Ismingizni kiriting:`);
const dob = prompt(`Tug'ilgan yilingizni kiriting:`);
// let familya = prompt(`Familyangizni kiriting:`);
//  const dob
let yil = 2023 - dob;
let oy = yil * 12;
let hafta = oy * 4;
let kun = hafta * 7;
let soat = kun * 24;
let minut = soat * 60;
let soniya = minut * 60;

if (!dob == "") {
  const natija = `Hurmatli ${ism}!  ${yil} yil.  ${oy} Oy.  \n ${hafta}Hafta.  ${kun} Kun.  ${soat} Soat.  ${minut} Daqiqa.   ${soniya} Soniya Yashadiz. Hurmat bilan  Ulugbek 😊. Vaqtingizni bekorga otkazmang`;

  document.body.textContent = natija;
} else {
  document.body.textContent = "Tug'ulgan sanani kiritmagansiz 🤷‍♂️";
}

document.querySelector("body").classList.add("active");
