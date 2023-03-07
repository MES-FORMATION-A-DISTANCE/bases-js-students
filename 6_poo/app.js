// Personne
// - nom
// - prenom
// - date de de naissance
// - nationalité

// marcher
// courir
// parler
// chanter
// manger

// Avion
//=======
// - Fabricant
// - Modele
// - Nombre sieges
// - Couleur

// voler
// atterir
// decoller

let personne = {
  // Attributs
  nom: "Lisangola",
  prenom: "Christian",
  profession: "Informaticien",

  // Méthodes
  nomComplet() {
    return `${this.prenom} ${this.nom}`;
  },
};

console.log(personne.nom);
console.log(personne.prenom);
console.log(personne.nomComplet());

let rectangle = {
  longueur: 500,
  largeur: 250,
  calculAire() {
    return this.longueur * this.largeur;
  },
  calculPerimetre() {
    return 2 * (this.longueur + this.largeur);
  },
};

console.log(`Longueur : ${rectangle.longueur}`);
console.log(`Largeur : ${rectangle.largeur}`);
console.log(`Aire : ${rectangle.calculAire()}`);
console.log(`Aire : ${rectangle.calculPerimetre()}`);
