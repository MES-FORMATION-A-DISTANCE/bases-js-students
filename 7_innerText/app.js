const frontend = document.querySelectorAll(".frontend");
console.log(frontend);

// Mauvaise pratique
// innerText : attribut qui permet d'acceder au text contenu dans l'element
// console.log(frontend[0].innerText);
// frontend[0].innerText = "HTML 10";
// frontend[0].style.color = "indigo";
// frontend[0].style.backgroundColor = "orangered";
// frontend[0].style.fontWeight = "bold";

// frontend[1].innerText = "CSS 78";
// frontend[1].style.color = "indigo";
// frontend[1].style.backgroundColor = "orangered";
// frontend[1].style.fontWeight = "bold";

// frontend[2].innerText = "PHP";
// frontend[2].style.color = "indigo";
// frontend[2].style.backgroundColor = "orangered";
// frontend[2].style.fontWeight = "bold";

// frontend[3].innerText = "Typescript";
// frontend[3].style.color = "indigo";
// frontend[3].style.backgroundColor = "orangered";
// frontend[3].style.fontWeight = "bold";

// Bonne pratique
for (const element of frontend) {
  element.innerText = `Frontend - ${element.innerText}`;
  element.style.color = "indigo";
  element.style.backgroundColor = "orangered";
  element.style.fontWeight = "bold";
}

// Backend
const backend = document.querySelectorAll(".server-side");

for (const element of backend) {
  element.innerText = `Backend - ${element.innerText}`;
}

// Database
const database = document.querySelectorAll(".database");

for (const element of database) {
  element.innerText = `Database - ${element.innerText}`;
}
