let taille = 0;
while (taille <= 0) {
  taille = parseInt(prompt("Taille : "));
  if (taille <= 0) {
    alert("La taille doit etre > 0");
  }
}

let nombres = []; // nombres.push(4) =[4] => nombres.push(2), [4,2]
for (let i = 0; i < taille; i++) {
  let valeur = parseInt(prompt(`Nombre ${i + 1} : `));
  // nombres[i]=valeur
  nombres.push(valeur);
}

let nombreARechercher = parseInt(prompt("Entrez le nombre à rechercher : "));
let occurences = 0;

for (let i = 0; i < nombres.length; i++) {
  if (nombres[i] === nombreARechercher) {
    occurences++;
    // occurences=occurences+1
    // occurences +=1
  }
}

if (occurences > 0) {
  alert(`${nombreARechercher} existe ${occurences} fois dans le tableau.`);
} else {
  alert(`${nombreARechercher} n'existe pas dans le tableau.`);
}
