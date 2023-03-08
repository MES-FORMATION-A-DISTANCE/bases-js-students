const $button = document.querySelector("button");

const colors = [
  "red",
  "green",
  "yellow",
  "orange",
  "orangered",
  "indigo",
  "pink",
  "brown",
];

$button.addEventListener("click", function () {
  const index = generateRandomIndex(colors.length);
  const color = colors[index];

  // Mauvaise
  // - Ajouter directement les styles sur l'element du DOM
  // - $button : on peut acceder a la reference en utilisant "this"
  $button.style.backgroundColor = color;
});

function generateRandomIndex(size) {
  return Math.floor(Math.random() * size);
}

const $title = document.querySelector("h1");

$title.addEventListener("mouseover", function () {
  // Probleme : classe va s'appliquer de maniere definitive
  //   this.classList.add("clicked");

  // solution 1: Bonne solution
  //   if (this.classList.contains("clicked")) {
  //     this.classList.remove("clicked");
  //   } else {
  //     this.classList.add("clicked");
  //   }

  // solution 3 : Best practice
  //   this.classList.toggle("clicked");
  this.classList.add("clicked");
});

$title.addEventListener("mouseleave", function () {
  this.classList.remove("clicked");
});

// Exercice 1
const $technos = document.querySelectorAll(".tech");

//E1. Challenge 2
const $techList = document.querySelector("#technos");
const $originalTechElements = Array.from($technos);
function bringBackTechElements() {
  for (const $element of $originalTechElements) {
    $techList.appendChild($element);
  }
}

for (const $techno of $technos) {
  $techno.addEventListener("click", function () {
    this.classList.toggle("deleted");
  });

  //E1. challenge 1
  $techno.addEventListener("dblclick", function () {
    this.remove();
    //E1. Challenge 2
    if (document.querySelectorAll(".tech").length === 0) {
      bringBackTechElements();
    }
  });
}
