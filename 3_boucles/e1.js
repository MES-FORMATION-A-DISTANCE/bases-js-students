let nombre = parseInt(
  prompt("Entrez le nombre dont vous voulez afficher la table: ")
);
for (let i = 2; i <= 15; i++) {
  console.log(`${nombre} x ${i} = ${nombre * i}`);
}
