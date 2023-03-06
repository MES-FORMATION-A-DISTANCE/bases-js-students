/**
    Écrire un programme qui permet à l’utilisateur de saisir un entier entre 1 et 12 et qui affiche le nom du mois correspondant.
    Ex:
    Mois : 4
    Résult : Avril (edited) 
 * 
 */

let mois = parseInt(prompt("Entrez un mois(entre 1 et 12) :"));

switch (mois) {
  case 1:
    alert("Janvier");
    break;
  case 2:
    alert("Février");
    break;

  case 3:
    alert("Mars");
    break;
  case 4:
    alert("Avril");
    break;

  case 5:
    alert("Mai");
    break;

  case 6:
    alert("Juin");
    break;

  case 7:
    alert("Juillet");
    break;

  case 8:
    alert("Août");
    break;

  case 9:
    alert("Septembre");
    break;

  case 10:
    alert("Octobre");
    break;

  case 11:
    alert("Novembre");
    break;

  case 12:
    alert("Décembre");
    break;

  default:
    alert("Mois invalide");
}
