/*
 * Escribe un programa que reciba un texto y transforme lenguaje natural a
 * "lenguaje hacker" (conocido realmente como "leet" o "1337"). Este lenguaje
 *  se caracteriza por sustituir caracteres alfanuméricos.
 * - Utiliza esta tabla (https://www.gamehouse.com/blog/leet-speak-cheat-sheet/)
 *   con el alfabeto y los números en "leet".
 *   (Usa la primera opción de cada transformación. Por ejemplo "4" para la "a")
 */

/*Lenguaje Hacker
A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z 
4, I3, [, |), 3, ph, 6, #, 1, ], |<, 1, /\/\, |\|, 0, |>, 0_, I2, 5, 7, (_), \/, \/\/, ><, j, 2 
*/

const LETTERS = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

const HACKER_LETTERS = [
  "4",
  "I3",
  "[",
  "|)",
  "3",
  "ph",
  "6",
  "#",
  "1",
  "]",
  "|<",
  "1",
  "//\\",
  "||",
  "0",
  "|>",
  "0_",
  "I2",
  "5",
  "7",
  "(_)",
  "/",
  "//",
  "><",
  "j",
  "2",
];

const prompt = require("prompt-sync")();

const translate = () => {
  let userInput = prompt(
    "Introduzca el mensaje a traducir a lenguaje hacker:  "
  );
  userInput = userInput.toUpperCase();
  for (let i of userInput) {
    for (let j = 0; j < LETTERS.length; ++j) {
      if (i == LETTERS[j]) userInput = userInput.replace(i, HACKER_LETTERS[j]);
    }
  }
  console.log(userInput);
};

translate();
