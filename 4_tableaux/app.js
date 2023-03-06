// // 1. Mauvaise pratique
// let note1 = 12;
// let note2 = 15;
// let note3 = 17;
// let note4 = 9;
// let note5 = 15;
// let note6 = 8;

// // Qu'est-ce qui se passe si on a plus notes?
// let somme = note1 + note2 + note3 + note4 + note5 + note6;

// // Qu'est-ce qu'on pour connaitre le nombre des notes?
// let moyenne = somme / 6;

// console.log(`Somme : ${somme}`);
// console.log(`Moyenne : ${moyenne}`);

// Bonne pratique
let notes = [12, 15, 17, 9, 15, 8];
// let somme = notes[0] + notes[1] + notes[2] + notes[3] + notes[4] + notes[5];
let somme = 0;
for (let i = 0; i < notes.length; i++) {
  // i=0; somme=0+notes[0] = 0 + 12 =12
  // i=1; somme=12+notes[1] = 12+15 = 27
  // i=2; somme=27+notes[2]= 27+17 = 44
  // i=3; somme=44+notes[3] = 44+ 9 = 53
  // i=4; somme=53+notes[4] = 53 + 15 = 68
  // i=5; somme=68+notes[5] = 68+8 = 76
  // i= 6;
  somme = somme + notes[i];
}

let moyenne = somme / notes.length;
console.log(`Somme : ${somme}`);
console.log(`Moyenne : ${moyenne}`);
