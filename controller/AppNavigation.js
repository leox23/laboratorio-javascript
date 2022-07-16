import { mainMenuView } from "../view/mainMenuView.js";
import { gameView } from "../view/gameView.js"
import { maxPointsView } from "../view/maxPointsView.js"
import { GameController } from "./GameController.js";

export class AppNavigation {

    init(){
        console.log("inicie por init");
        
        const a = new AppNavigation();
        a.clearView()
        a.gotoMainMenuView()
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
        
        // attributos mantienen el estado
        const body = document.querySelector("body")
        body.setAttribute("level", 0)
        body.setAttribute("setindex", 0)
        body.setAttribute("points", 0)

        gameView()
        c.inflateNextQuestion(0)
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