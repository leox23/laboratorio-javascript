export class GameController {

  //datos dinamicos del juego se colocan aparte para no recargar nada.
  inflateNextQuestion(
    lorem = {
      pregunta: "¿Qué color se obtiene de mezclar el rojo con azul?",
      respuesta1: "Morado",
      respuesta2: "Verde",
      respuesta3: "Naranja",
      respuesta4: "Turquesa",
    }
  ) {

    console.log("entramos a inflar");
    //inflar pregunta
    const question = document.querySelector("#question");
    question.innerText = lorem.pregunta;

    //inflar detalles de nivel
    const levelAndPoints = document.querySelector("#round");
    levelAndPoints.innerText = "texto de nivel y puntos";

    //inflar Respuestas
    let arrRespuestas = [
      lorem.respuesta1,
      lorem.respuesta2,
      lorem.respuesta3,
      lorem.respuesta4,
    ];
    for (let i = 0; i < 4; i++) {
      const radioLabel = document.querySelectorAll(".form-check-label")[i];
      radioLabel.innerText = arrRespuestas[i];
    }
  }

  checkAnswer() {
    console.log("hola mundo");
  }
}

/*
const radios = document.getElementsByClassName("form-check-input");
*/
