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

    const btnResponder = document.querySelectorAll("a")[0];
    btnResponder.addEventListener("click", () => {
      // seleccionar todos los radios inputs
      const radios = document.querySelectorAll(".form-check-input");
      var checkPosition = "";
      console.log("antes de entrar al for valgo: " + checkPosition);
      //verificar cual de todos esta selecionado
      for (let i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
          checkPosition = i;
          radios[i].checked = false;
          break;
        }
      }

      // extrayendo string de respuestas
      const answerNode = document.querySelectorAll(".form-check-label")[checkPosition]
      const answer = answerNode.innerText

      //mandarlo a verificacion
      appControler.checkAnswer(answer)
    });

    const btnRetirarse = document.querySelectorAll("a")[1];
    btnRetirarse.addEventListener("click", appControler.retreat);
  }

  setMaxPointsBButtonsNavigation() {
    const appNavigation = new AppNavigation();
    
    const gotoMain = document.querySelectorAll("a")[0];
    gotoMain.addEventListener("click", appNavigation.gotoMainMenuView);
  }
}
