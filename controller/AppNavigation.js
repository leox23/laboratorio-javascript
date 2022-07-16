import { mainMenuView } from "../view/mainMenuView.js";
import { gameView } from "../view/gameView.js";
import { maxPointsView } from "../view/maxPointsView.js";
import { LayoutInflater } from "./LayoutInflater.js";
import { StateHandler } from "../model/StateHandler.js";

/**
 * La navegacion de la aplicacion y ciertas adaptaciones para facilitar
  el cambio de la pantalla en la aplicacion
 */
export class AppNavigation {
/**
* Inicializa la aplicacion, establece estilos a body, y la primera pantalla a visitar.
*/
  init() {
    const body = document.querySelector("body");
    body.style = `
        background: black;
        width: 100vw;
        height: 100vh;
        display:flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        align-content: center;`;

    const a = new AppNavigation();
    a.gotoMainMenuView()
  }

/**
* Metodo usado para la limpieza de la pantalla(elementos html dentro de body), generalmente para colocar otra.
*/
  clearView() {
    document.querySelector("body").innerHTML = "";
  }

/**
 * Metodo para ir a la pantalla principal del juego.
 */
  gotoMainMenuView() {
    const a = new AppNavigation();
    a.clearView();
    mainMenuView();
  }

/**
 * Metodo que prepara todo el estado del comienzo del juego, y crea toda la pantalla del juego.
 */
  gotoGameView() {
    const a = new AppNavigation();
    const i = new LayoutInflater();
    const s = new StateHandler();
    a.clearView();
    s.setStateLevel(0)
    s.setStateSetOfQAIndex(0)
    s.setStatePoints(0)
    gameView();
    i.inflateNextQuestion(); 
  }

/**
 * Metodo para ir a la vista maximos puntajes y visualizar la vista total.
 */
  gotoMaxPointsView() {
    const a = new AppNavigation();
    const i = new LayoutInflater();
    a.clearView();
    maxPointsView();
    i.inflateHighScores();
  }
}
