let codePin = prompt("Veuillez définir un code PIN : ");

let codePinATester = "";

// ! = =
const NOMBRE_TENTATIVES = 5;
let tentatives = 0;
while (codePinATester !== codePin && tentatives !== NOMBRE_TENTATIVES) {
  codePinATester = prompt(
    "Veuillez saisir le code PIN pour déverouiller l'appareil : "
  );
  tentatives++;
  if (codePinATester !== codePin) {
    alert("Code PIN incorrect. Veuillez ressayer.");
  } else {
    alert("Appareil débloqué.");
  }
}

if (tentatives === NOMBRE_TENTATIVES) {
  alert(
    `Appareil bloqué car vous avez saisir ${tentatives} fois de mauvais code PIN`
  );
}
