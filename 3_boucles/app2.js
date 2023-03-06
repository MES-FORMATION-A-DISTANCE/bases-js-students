let codePin = prompt("Veuillez définir un code PIN : ");

let codePinATester = "";

// ! = =

while (codePinATester !== codePin) {
  codePinATester = prompt(
    "Veuillez saisir le code PIN pour déverouiller l'appareil : "
  );
  if (codePinATester !== codePin) {
    alert("Code PIN incorrect. Veuillez ressayer.");
  } else {
    alert("Appareil débloqué.");
  }
}
