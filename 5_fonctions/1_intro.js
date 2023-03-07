// creation des fonctions
function calculPerimetre(longueur, largeur) {
  let perimetre = 2 * (longueur + largeur);
  return perimetre;
}

function calculAire(longueur, largeur) {
  return longueur * largeur;
}

// Appel/Invocation/Utilisation
// calculPerimetre(500, 250);
let perimetre = calculPerimetre(500, 250);
console.log(`Perimetre : ${perimetre}m`);
console.log(`Perimetre2 : ${calculPerimetre(500, 250)}m`);

// calculAire(500, 250);
let aire = calculAire(500, 250);
console.log(`Aire : ${aire}m2`);
