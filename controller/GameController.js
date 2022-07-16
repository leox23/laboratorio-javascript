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
    console.log("checkeando si es respuesta correcta########");
    const s = new StateHandler();

    let level = s.getState().level
    let setindex = s.getState().setOfQAIndex
    let points = s.getState().points
    let correctAnswer = allContentQA[level][setindex].answer1;

    if (answer == correctAnswer) {
      if (level == 4) {
        const n = new AppNavigation();
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
          n.gotoMaxPointsView();
        });
      } else {
        level++;
        setindex++;
        points = parseInt(points) + parseInt(levelDefinition[level - 1].points);
        s.setStateLevel(level)
        s.setStateSetOfQAIndex(setindex)
        s.setStatePoints(points)
        const i = new LayoutInflater();
        i.inflateNextQuestion(level);
      }
    } else {
      alert(
        "❌❌❌❌❌❌❌Respuesta incorrecta❌❌❌❌❌❌❌\n                      💢Acabas de perder todo tu puntaje💢"
      );
      s.setStateLevel(level)
      s.setStateSetOfQAIndex(setindex)
      s.setStatePoints(points)
      const n = new AppNavigation();
      n.gotoMainMenuView();
    }
  }

/**
 * Metodo dedicado al manejo del boton retirarse, en distintos contextos.
 */
  retreat() {
    const n = new AppNavigation();
    const DB = new Database();
    const s = new StateHandler();
    const body = document.querySelector("body");
    let points = s.getState().points

    if (points == 0) {
      let ok = confirm(
        "Aun no tienes puntos y ¡esta pregunta esta facil!, ¿igual quieres salir?"
      );
      if (ok) n.gotoMainMenuView();
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
          n.gotoMaxPointsView();
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