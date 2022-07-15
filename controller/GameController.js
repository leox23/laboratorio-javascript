import { allContentQA } from "../model/Q&AProvider/Q&AProvider.js";
import { levelDefinition } from "../model/Q&AProvider/levelDefinition.js";

export class GameController {
  //datos dinamicos del juego se colocan aparte para no recargar nada.
  inflateNextQuestion(level = 0) {
    
    //seleccionar random cualquiera de las preguntas
    //redondear abajo, num double random del 0 al 4 (aqui el largo del array)
    let setSelectedIndex = Math.floor(Math.random() * 4);
    let questionSelected = allContentQA[level][setSelectedIndex].question;

    //inflar pregunta
    const question = document.querySelector("#question");
    question.innerText = questionSelected;

    //inflar detalles de nivel
    const levelAndPoints = document.querySelector("#round");
    levelAndPoints.innerText = `📑 Nivel actual: ${levelDefinition[level].name}  |  Ganaras ${levelDefinition[level].points}pts en este round (${levelDefinition[level].number})`;

    //inflar Respuestas    
    let correctAnswer = allContentQA[level][setSelectedIndex].answer1;
    let allAnswers = [
      allContentQA[level][setSelectedIndex].answer1,
      allContentQA[level][setSelectedIndex].answer2,
      allContentQA[level][setSelectedIndex].answer3,
      allContentQA[level][setSelectedIndex].answer4,
    ];
    for (let i = 0; i < 4; i++) {
      const radioLabel = document.querySelectorAll(".form-check-label")[i];
      radioLabel.innerText = allAnswers[i];
    }
  }
  
/*
######################################################################
  chekear respuesta 
######################################################################
*/
  checkAnswer(answer) {
    console.log("checkeando si es respuesta correcta########");
    //ir a la siguiente 

    //verificando si -> inflateNextQuestion(), level = 0)
    /*
    if (!answer) {
      alert("⚠️Es necesario seleccionar una de las respuestas!⚠️");
    } else {
      //lo que sucede cuando si esta seleccionada una
      selected = radios[i].id.substr(-1);
      if (answer == correctAnsIndex) {
        //puntos por round
        points += pointsPerRound[round];
        round++;
      } else {
        alert(
          "❌❌❌❌❌❌❌Respuesta incorrecta❌❌❌❌❌❌❌\n                      💢Acabas de perder todo tu puntaje💢"
        );
        round = 0;
        level = "";
        checkPosition = 0;
        points = 0;
        window.location.href = "index.html";
      }
    }
  */
  }
  retreat() {
    console.log("me retiro del juego con los puntos que tengo");
  }
}

/*
######################################################################
  fin checkear respuesta
######################################################################
*/

/*
  if (round == 5) {
    document.getElementById("points").innerHTML = points + " pts ⭐";
    namePlayer = prompt(
      "Has respondido la ultima pregunta! Tu puntaje fue de " +
        points +
        " pts!\nDanos tu nombre y te registraremos en los puntaje maximos!"
    );
    writeDB(namePlayer, points);
  }
}
//redondear abajo, numero random del 1 al 5
question = Math.floor(Math.random() * 4);
correctAnswer = contentQA[round][question][1];
allAnswers = [
  contentQA[round][question][1],
  contentQA[round][question][2],
  contentQA[round][question][3],
  contentQA[round][question][4],
];
//sort answers
allAnswers.sort(function () {
  return Math.random() - 0.5;
});
correctAnsIndex = allAnswers.indexOf(correctAnswer);
writeGameInterface();

function retreat() {
  if (points == 0) {
    ok = confirm(
      "Aun no tienes puntos y ¡esta pregunta esta facil!, ¿quieres intentar responder?"
    );
    if (ok == false) {
      window.location.href = "index.html";
    }
    return;
  }
  namePlayer = prompt(
    "Ok! te retiras, obtuviste " +
      points +
      "⭐ pts!\nDanos tu nombre y te registraremos en los puntaje maximos!"
  );

  writeDB(namePlayer, points);
}
*/
