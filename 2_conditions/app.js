let age = parseInt(prompt("Votre age svp : "));

// Si l'age > =  18 alors
// IL peut participer
//Sinon
// Il dégage

// age> = 18 => true(vrai)/false(faux)
// > : Strictement supérieur
// < : Strictement inférieur
// > = : Supérieur ou égal
// < = : Inférieur ou égal
//  = = : Egalité
// = = = : Egalité stricte
let estMajeur = age >= 18; // true/false
if (estMajeur) {
  alert("Vous pouvez entrer.");
} else {
  alert("Dégage!!!!");
}

// let distance = 10;
// let temps = 2;
// let vitesse = distance / temps; // 5
// distance = 20;
// temps = 5;
//5 => Attention "vitesse = distance / temps" n'est pas une égalité
// vitesse;
