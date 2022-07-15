import { mainMenuView } from "../view/mainMenuView.js";
import { gameView } from "../view/gameView.js"
import { maxPointsView } from "../view/maxPointsView.js"
import { GameController } from "./GameController.js";

export class AppNavigation {

    init(){
        const c = new GameController();
        console.log("inicie por init");
        //mainMenuView()

        //esto debe ir dentro de main menu
        gameView()
        c.inflateNextQuestion()
    }

    clearView() {
        document.querySelector("body").innerHTML = ""
    }

    gotoMainMenuView(){
        console.log("entre en el main menu");
        const a = new AppNavigation();
        a.clearView()
        mainMenuView()
    }

    gotoGameView(){
        const a = new AppNavigation();  
        const c = new GameController();
        a.clearView()
        gameView()
        c.inflateNextQuestion()
    }

    gotoNextQuestion(){
        console.log("aplicando siguiente pregunta");
    }

    gotoMaxPointsView(){
        const a = new AppNavigation();
        a.clearView()
        maxPointsView()
    }

}