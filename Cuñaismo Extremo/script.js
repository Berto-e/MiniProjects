

const frase = document.getElementById('frase')
const fraseBtn = document.getElementById('fraseBtn')
const frases =  {
    "0": "(Ves un coche de lujo) -  Me lo han aparcao",
    "1": "¿Otro año sin novio/a?",
    "2": "En mis tiempos sí que sabíamos divertirnos, no como ahora",
    "3": "Así no se corta el jamón, que le quitas toda la gracia",
    "4": "Jefe!! Hoy invita el niño!!",
    "5": "(Se rompe un plato) - Ese lo lavo yo",
    "6": "Jefe! La multa cuando puedas",
    "7": "(cuando va a pedir otra cerveza porque se la ha terminado) - Es que tenía un agujero el vaso.",
    "8": "(Se llevan 15 cervezas de la mesa) - Joder el niño como bebe",
    "9": "(vemos una pareja besandose por la calle) - Si te cansas pide cambio",
    "10": "(tarda el café con leche) - ¿Están ordeñando a la vaca?",
    "11": "Tráenos la dolorosa cuando puedas, jefe",
    "12": "no te comes la grasa? eso es lo mejor del jamon",
    "13": "(traen la cuenta) - Pero jefe!! Que hemos roto?",
    "14": "(Cuando el pollo está poco hecho)- niño, está el filete piando",
    "15": "Una buena mili te hacia falta a ti",
    "16": "Este nos va a sacar de pobres",
    "17": "Jefe una de secreto, pero no se lo digas a nadie que es secreto",
    "18": "(Antes de pagar al cajero en el supermercado) - ¿Hay que pagarlo?",
    "19": "(comida de Año Nuevo) - Joder, no os veía desde el año pasado",
    "20": "(Se aproxima el camarero) - A ver por cuánto salió la broma"
}



fraseBtn.addEventListener('click', generateJoke)

generateJoke()

function generateJoke() {
  const fraseIndex = Math.random() * Object.keys(frases).length
  frase.innerHTML = frases[Math.floor(fraseIndex)]
}









