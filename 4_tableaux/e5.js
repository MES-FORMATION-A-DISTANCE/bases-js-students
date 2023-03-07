let t1 = [2, 6, 8, 15, 39, 11];
let t2 = [21, 33, 12, 19, 0];
let t3 = [17, 18, 46];

console.log(t1);
console.log(t2);
console.log(t3);

// DRY : Don't repeat yourself
let multiple3T1 = 0;
for (let i = 0; i < t1.length; i++) {
  if (t1[i] % 3 === 0) {
    multiple3T1 = multiple3T1 + t1[i];
  }
}

let multiple3T2 = 0;
for (let i = 0; i < t2.length; i++) {
  if (t2[i] % 3 === 0) {
    multiple3T2 = multiple3T2 + t2[i];
  }
}

let multiple3T3 = 0;
for (let i = 0; i < t3.length; i++) {
  if (t3[i] % 3 === 0) {
    multiple3T3 = multiple3T3 + t3[i];
  }
}

let somme = multiple3T1 + multiple3T2 + multiple3T3;

alert(`La somme des multiples de 3 est ${somme}`);
