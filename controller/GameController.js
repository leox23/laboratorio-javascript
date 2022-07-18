import { allContentQA } from "../model/Q&AProvider/Q&AProvider.js";
import { levelDefinition } from "../model/Q&AProvider/levelDefinition.js";
import { LayoutInflater } from "./LayoutInflater.js";
import { AppNavigation } from "./AppNavigation.js";
import { Database } from "../model/Database/Database.js";
import { StateHandler } from "../model/StateHandler.js";

/**
 * Clase dedicada al manejo de deciciones de respuesta y retirada en el juego.
 */
export class GameController {

  /**
   * Metodo dedicado a comprobar si la respuesta del usuario es correcta. Tiene logica interna de lo que sucedera de a cuerdo a ello.
   * @param {String} answer Respuesta seleccionada por el usuario.
   */
  checkAnswer(answer) {
    const gameState = new StateHandler();
    const navigate = new AppNavigation();

    let level = gameState.getState().level
    let setindex = gameState.getState().setOfQAIndex
    let points = gameState.getState().points
    let correctAnswer = allContentQA[level][setindex].answer1;

    if (answer == correctAnswer) {
      if (level == 4) {
        const navigate = new AppNavigation();
        const DB = new Database();

        points = parseInt(points) + parseInt(levelDefinition[level].points);

        document.getElementById("points").innerHTML = points + " pts🎟";
        let namePlayer = prompt(
          "Has respondido la ultima pregunta! Tu puntaje fue de " +
            points +
            " pts!\nDanos tu nombre y te registraremos en los puntaje maximos!"
        );
        
        DB.setPlayerPoints(namePlayer, points);

        sleep(200).then(() => {
          navigate.gotoMaxPointsView();
        });
      } else {
        level++;
        setindex++;
        points = parseInt(points) + parseInt(levelDefinition[level - 1].points);
        gameState.setStateLevel(level)
        gameState.setStateSetOfQAIndex(setindex)
        gameState.setStatePoints(points)
        const layout = new LayoutInflater();
        layout.inflateNextQuestion(level);
      }
    } else {
      alert(
        "❌❌❌❌❌❌❌Respuesta incorrecta❌❌❌❌❌❌❌\n                      💢Acabas de perder todo tu puntaje💢"
      );
      navigate.gotoMainMenuView();
    }
  }

/**
 * Metodo dedicado al manejo del boton retirarse, en distintos contextos.
 */
  retreat() {
    const navigate = new AppNavigation();
    const DB = new Database();
    const gameState = new StateHandler();
    let points = gameState.getState().points

    if (points == 0) {
      let ok = confirm(
        "Aun no tienes puntos y ¡esta pregunta esta facil!, ¿igual quieres salir?"
      );
      if (ok) navigate.gotoMainMenuView();
    } else {
      let ok = confirm("¿Seguro quieres retirarte? conservaras los puntos.");
      if (ok) {
        let namePlayer = prompt(
          "Ok! te retiras, obtuviste " +
            points +
            "🎟 pts!\nDanos tu nombre y te registraremos en los puntaje maximos!"
        );

        DB.setPlayerPoints(namePlayer, points);

        sleep(200).then(() => {
          navigate.gotoMaxPointsView();
        });
      }
    }
  }  
}

/**
 * Funcion para manejar espera en ciertos contextos.
 * @param {Integer} time Milisegundos a esperar
 * @returns Booleano de tiempo terminado
 */
function sleep(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}