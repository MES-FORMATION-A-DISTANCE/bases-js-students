let langue = prompt("Veuillez saisir une langue : ");
langue = langue.toLowerCase();

// if (langue === "english") {
//   alert("Hello!");
// } else if (langue === "french") {
//   alert("Salut!!");
// } else if (langue === "spanish") {
//   alert("Holla!!");
// } else if (langue === "german") {
//   alert("Guten tag.");
// } else {
//   alert("Langue non supportée.");
// }

switch (langue) {
  case "english":
    alert("Hello!");
    break;

  case "french":
    alert("Salut!!");
    break;

  case "spanish":
    alert("Holla!!");
    break;

  case "german":
    alert("Guten tag.");
    break;

  default:
    alert("Langue non supportée.");
}
