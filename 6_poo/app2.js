//avion_de_chasse : snake case/underscore case
// AvionDeChasse : pascal case(class et fonctions constructeurs en JS)
// avionDeChasse : camel case(variables,objets et fonctions/méthodes en JS)
// avion-de-chasse : kebab case
class Rectangle {
  constructor(valeurLongueur, valeurLargeur) {
    this.longueur = valeurLongueur;
    this.largeur = valeurLargeur;
  }

  calculAire() {
    return this.longueur * this.largeur;
  }

  calculPerimetre() {
    return 2 * (this.longueur + this.largeur);
  }
}

let rect1 = new Rectangle(500, 250);
console.log(`Longueur1 : ${rect1.longueur}`);
console.log(`Largeur1 : ${rect1.largeur}`);
console.log(`Aire1 : ${rect1.calculAire()}`);
console.log(`Perimetre : ${rect1.calculPerimetre()}`);

let rect2 = new Rectangle(900, 400);
console.log(`Longueur2 : ${rect2.longueur}`);
console.log(`Largeur2 : ${rect2.largeur}`);
console.log(`Aire2 : ${rect2.calculAire()}`);
console.log(`Perimetre2 : ${rect2.calculPerimetre()}`);

let rect3 = new Rectangle(5000, 1500);
console.log(`Longueur3 : ${rect3.longueur}`);
console.log(`Largeur3 : ${rect3.largeur}`);
console.log(`Aire3 : ${rect3.calculAire()}`);
console.log(`Perimetre3 : ${rect3.calculPerimetre()}`);
