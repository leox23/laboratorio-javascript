import { allContentQA } from "../model/Q&AProvider/Q&AProvider.js";
import { levelDefinition } from "../model/Q&AProvider/levelDefinition.js";
import { AppNavigation } from "./AppNavigation.js";

export class GameController {
  //datos dinamicos del juego se colocan aparte para no recargar nada.
  inflateNextQuestion(level) {
    const body = document.querySelector("body");
    //seleccionar random cualquiera de las preguntas
    //redondear abajo, num double random del 0 al 4 (aqui el largo del array)
    let setSelectedIndex = Math.floor(Math.random() * 4);
    let questionSelected = allContentQA[level][setSelectedIndex].question;

    //inflar pregunta
    const question = document.querySelector("#question");
    question.innerText = questionSelected;

    //inflar puntos
    let points = body.getAttribute("points"); //leer de body
    const actualPoints = document.querySelector("h1");
    actualPoints.innerText = `${points} pts🎟`;

    //inflar detalles de nivel
    const levelAndPoints = document.querySelector("#round");
    levelAndPoints.innerText = `📑 Nivel actual: ${levelDefinition[level].name}  |  Ganaras ${levelDefinition[level].points}pts🎟 en este round (${levelDefinition[level].number})`;

    //inflar Respuestas
    let allAnswers = [
      allContentQA[level][setSelectedIndex].answer1,
      allContentQA[level][setSelectedIndex].answer2,
      allContentQA[level][setSelectedIndex].answer3,
      allContentQA[level][setSelectedIndex].answer4,
    ];

    //aleatorizar posiciones de respuestas
    for (let i = allAnswers.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [allAnswers[i], allAnswers[j]] = [allAnswers[j], allAnswers[i]];
    }

    for (let i = 0; i < 4; i++) {
      const radioLabel = document.querySelectorAll(".form-check-label")[i];
      radioLabel.innerText = allAnswers[i];
    }

    body.setAttribute("setindex", setSelectedIndex);
  }

  /*
######################################################################
  chekear respuesta 
######################################################################
*/
  checkAnswer(answer) {
    console.log("checkeando si es respuesta correcta########");

    const body = document.querySelector("body");
    let level = body.getAttribute("level");
    let setindex = body.getAttribute("setindex");
    let points = body.getAttribute("points");
    let correctAnswer = allContentQA[level][setindex].answer1;

    if (answer == correctAnswer) {
      if (round == 4) {
        const n = new AppNavigation();
        points = parseInt(points) + parseInt(levelDefinition[level].points);
        document.getElementById("points").innerHTML = points + " pts ⭐";
        namePlayer = prompt(
          "Has respondido la ultima pregunta! Tu puntaje fue de " +
            points +
            " pts!\nDanos tu nombre y te registraremos en los puntaje maximos!"
        );

        //meterEnLaBaseDeDatos(namePlayer,points)
        //aqui mandar a la base de datos ########################################
        n.gotoMainMenuView();
      } else {
        level++;
        setindex++;
        points = parseInt(points) + parseInt(levelDefinition[level].points);
        body.setAttribute("level", level);
        body.setAttribute("setindex", setindex);
        body.setAttribute("points", points);
        const c = new GameController();
        c.inflateNextQuestion(level);
      }
    } else {
      alert(
        "❌❌❌❌❌❌❌Respuesta incorrecta❌❌❌❌❌❌❌\n                      💢Acabas de perder todo tu puntaje💢"
      );
      body.setAttribute("level", 0);
      body.setAttribute("setindex", 0);
      body.setAttribute("points", 0);
      const n = new AppNavigation();
      n.gotoMainMenuView();
    }
  }

  retreat() {
    const n = new AppNavigation();
    const body = document.querySelector("body");
    let points = body.getAttribute("points");

    if (points == 0) {
      let ok = confirm(
        "Aun no tienes puntos y ¡esta pregunta esta facil!, ¿igual quieres salir?"
      );
      if (ok) n.gotoMainMenuView();
      return;
    } else {
      let ok = confirm(
          "¿Seguro quieres retirarte? consetvaras los puntos."
      );
      if (ok) {
        let namePlayer = prompt(
          "Ok! te retiras, obtuviste " +
            points +
            "⭐ pts!\nDanos tu nombre y te registraremos en los puntaje maximos!"
        );

      //meterEnLaBaseDeDatos(namePlayer,points)
      // escribir en base de datos el puntaje del usuario##############################################

      //esperar a que guarde en la DB de datos
        
        n.gotoMaxPointsView();
      }
    }
  }
}
