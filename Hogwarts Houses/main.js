/*
 * Crea un programa que simule el comportamiento del sombrero selccionador del
 * universo mágico de Harry Potter.
 * - De ser posible realizará 5 preguntas (como mínimo) a través de la terminal.
 * - Cada pregunta tendrá 4 respuestas posibles (también a selecciona una a través de terminal).
 * - En función de las respuestas a las 5 preguntas deberás diseñar un algoritmo que
 *   coloque al alumno en una de las 4 casas de Hogwarts:
 *   (Gryffindor, Slytherin , Hufflepuff y Ravenclaw)
 * - Ten en cuenta los rasgos de cada casa para hacer las preguntas
 *   y crear el algoritmo seleccionador:
 *   Por ejemplo, en Slytherin se premia la ambición y la astucia.
 */

/*Choices:
1->Gryffindor
2->Ravenclaw
3->Slytherin
4->Hufflepuf*/

const hogwartsHouses = [0, 0, 0, 0]; /*index:
0->Gryffindor
1->Ravenclaw
2->Slytherin
3->Hufflepuf*/
const USER_CHOICES = {};
const QUESTIONS = [
  {
    type: "input",
    name: "nombre",
    message: "¿Cómo te llamas?",
  },
  {
    type: "list",
    name: "1",
    message:
      "Digamos que tiene un examen la próxima semana, ¿cómo se va a preparar?",
    choices: [
      "1-Estudiando mucho",
      "2-No me hace falta estudiar...",
      "3-Buscando formas para copiar si hiciese falta",
      "4-Quedando con mis compañeros para estudiar",
    ],
  },
  {
    type: "list",
    name: "2",
    message: "¿Cómo se define a si mismo?",
    choices: ["1-Valiente", "2-Inteligente", "3-Ambicioso", "4-Amable"],
  },
  {
    type: "list",
    name: "3",
    message: "Escoga uno: ",
    choices: ["1-Dragon", "2-Hipogrifo", "3-Basilisco", "4-Minotauro"],
  },
  {
    type: "list",
    name: "4",
    message:
      "Si su habitación en Hogwarts se está quemando y pudiera rescatar solo una cosa, ¿cuál sería?",
    choices: [
      "1-Una reliquia familiar",
      "2-Libro favorito",
      "3-No rescataría nada...",
      "4-Mascota",
    ],
  },
  {
    type: "list",
    name: "5",
    message: "Si le dan un pedazo de papel, ¿qué hace con él?",
    choices: [
      "1-Un avion de papel bien molon",
      "2-Escribe",
      "3-Lo rompe en pedazos",
      "4-Dibuja en el",
    ],
  },
  {
    type: "list",
    name: "6",
    message: "¿Qué cosa le fastidia más?",
    choices: [
      "1-La falta de lealtad",
      "2-La pereza",
      "3-La ignorancia",
      "4-La mentira",
    ],
  },
  {
    type: "list",
    name: "7",
    message: "Están atacando a tu mejor amigo... ¿Qué haces?",
    choices: [
      "1-Ayudarle sin pensarlo",
      "2-Pensar antes de actuar",
      "3-Salir corriendo y salvarme",
      "4-Intentar calmar a todos",
    ],
  },
  {
    type: "list",
    name: "8",
    message: "Elige una estación",
    choices: ["1-Verano", "2-Otoño", "3-Invierno", "4-Primavera"],
  },
];
const cliInput = () => {
    console.log(
        "\x1b[1m Bienvenido al sombrero seleccionador... \n A continuacion podra ser elegido en una"
        + " de las siguientes casas: \n \x1b[0m"
        + "\x1b[31m Gryffindor \x1b[0m \x1b[34m Ravenclaw \x1b[0m \x1b[32m Slytherin \x1b[0m \x1b[33m Hufflepuff \x1b[0m"
        + "\nBuena Suerte!"
        );
  const inquirer = require("inquirer");
  inquirer
    .prompt(QUESTIONS)
    .then((answers) => {
      //console.log(JSON.stringify(answers, null, 2));
      for (key in answers) {
        /* Rellenamos la puntuacion de las casas dependiendo de la opcion escogida */
        if (answers[key][0] == "1") ++hogwartsHouses[0];
        else if (answers[key][0] == "2") ++hogwartsHouses[1];
        else if (answers[key][0] == "3") ++hogwartsHouses[2];
        else if (answers[key][0] == "4") ++hogwartsHouses[3];
      }
      let max = Math.max(...hogwartsHouses);
      let countHowManyAreMax = 0;
      /* Buscamos cuantas casas tienen la misma cantidad de puntos que la mas alta*/
      for (let i = 0; i < hogwartsHouses.length; ++i) {
        if (hogwartsHouses[i] == max) ++countHowManyAreMax;
      }
      if (countHowManyAreMax == 1) {
        let houseWinner;
        for(let i=0; i < hogwartsHouses.length; ++i){
            if(hogwartsHouses[i] == max)
            if(i == 0) houseWinner = "\x1b[31m Gryffindor \x1b[0m";
            else if(i == 1) houseWinner = "\x1b[34m Ravenclaw \x1b[0m";
            else if (i == 2) houseWinner = "\x1b[32m Slytherin \x1b[0m";
            else if(i == 3) houseWinner ="\x1b[33m Hufflepuff \x1b[0m";
        }
        console.log(
          "La casa de " + houseWinner +
           " es la que mejor se adapta a ti."
        );
      } else {
        const hogwartsHousesOptions = [];
        for (let i = 0; i < hogwartsHouses.length; ++i) {
          if (hogwartsHouses[i] == max) {
            if (i == 0) hogwartsHousesOptions.push("Gryffindor");
            else if (i == 1) hogwartsHousesOptions.push("Ravenclaw");
            else if (i == 2) hogwartsHousesOptions.push("Slytherin");
            else if (i == 3) hogwartsHousesOptions.push("Hufflepuff");
          }
        }
        console.log(
          "No se puede determinar una casa única que mejor se adapte a ti. Podrías considerar las siguientes casas : \n" +
            hogwartsHousesOptions.toString()
        );
      }

      setTimeout(() => console.log("Bienvenido a Hogwarts!"), 4000);
   
    })
    .catch((error) => {
      if (error.isTtyError) {
        console.log("Your console environment is not supported!");
      } else {
        console.log(error);
      }
    });
};

cliInput();
