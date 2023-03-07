const framworks = [
  "Nest.js",
  "Spring",
  "Asp Dotnet Core",
  "Ruby On Rails",
  "Angular",
  "Symfony",
  "Laravel",
  "Django",
  "Express.js",
  "Meteor",
];

const titre = document.querySelector("h1");
titre.innerText = "Fullstack developer";
console.log(titre);

const technos = document.querySelector(".technos");
console.log(technos.innerHTML);

technos.innerHTML = "<li>Nest.js</li><li>Spring</li><li>Asp Dotnet Core</li>";

// 1. Vider le contenu du UL
// 2. Inserer la liste des framwork comme des element <li> du parent technos
for (let framwork of framworks) {
  //   technos.innerHTML += `<li>${framwork}</li>`;
  technos.innerHTML = technos.innerHTML + `<li>${framwork}</li>`;
}
