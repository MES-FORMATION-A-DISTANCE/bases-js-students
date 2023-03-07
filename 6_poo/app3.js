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

  afficherRectangle() {
    console.log("***************");
    console.log("** Rectangle **");
    console.log("****************");
    console.log(`Longueur : ${this.longueur}`);
    console.log(`Largeur : ${this.largeur}`);
    console.log(`Aire : ${this.calculAire()}`);
    console.log(`Perimetre : ${this.calculPerimetre()}`);
    console.log("\n");
  }
}

let rect1 = new Rectangle(500, 250);
rect1.afficherRectangle();

let rect2 = new Rectangle(900, 400);
rect2.afficherRectangle();

let rect3 = new Rectangle(5000, 1500);
rect3.afficherRectangle();
