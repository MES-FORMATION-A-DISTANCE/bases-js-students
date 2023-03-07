let t1 = [2, 6, 8, 15, 39, 11];
let t2 = [21, 33, 12, 19, 0];
let t3 = [17, 18, 46];

console.log(t1);
console.log(t2);
console.log(t3);

// tableau : input
// nombre : input
// du resultat : output
function sommeDesMultipleDe(nombre, tableau) {
  let sommeMultiples = 0;
  for (let i = 0; i < tableau.length; i++) {
    if (tableau[i] % nombre === 0) {
      sommeMultiples = sommeMultiples + tableau[i];
    }
  }
  return sommeMultiples;
}

let multiple3T1 = sommeDesMultipleDe(3, t1);

let multiple3T2 = sommeDesMultipleDe(3, t2);

let multiple3T3 = sommeDesMultipleDe(3, t3);

let somme = multiple3T1 + multiple3T2 + multiple3T3;

console.log(`La somme des multiples de 3 est ${somme}`);
