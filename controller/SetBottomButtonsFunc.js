import { GameController } from "./GameController.js";
import { AppNavigation } from "./AppNavigation.js";

export class SetBottomButtonsFunc {
  setMainMenuViewBButtonsNavigation() {
    const appNavigation = new AppNavigation();

    const btnPlay = document.querySelectorAll("a")[0];
    btnPlay.addEventListener("click", appNavigation.gotoGameView);

    const btnMaxScores = document.querySelectorAll("a")[1];
    btnMaxScores.addEventListener("click", appNavigation.gotoMaxPointsView);
  }

  setGameViewBButtonsFunctions() {
    const appControler = new GameController();
    console.log("entre a bb game");

    const btnResponder = document.querySelectorAll("a")[0];
    btnResponder.addEventListener("click", appControler.checkAnswer);

    const btnRetirarse = document.querySelectorAll("a")[1];
    btnRetirarse.addEventListener("click", appControler.retreat);
  }

  setMaxPointsBButtonsNavigation() {
    const appNavigation = new AppNavigation();
    
    const gotoMain = document.querySelectorAll("a")[0];
    gotoMain.addEventListener("click", appNavigation.gotoMainMenuView);
  }
}
