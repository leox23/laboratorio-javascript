import { mainMenuView } from "../view/mainMenuView.js";
import { gameView } from "../view/gameView.js"
import { maxPointsView } from "../view/maxPointsView.js"

export class AppNavigation {

    init(){
        console.log("inicie por init");
        mainMenuView()
    }

    gotoMainMenuView(){
        console.log("entre en el main menu");
        mainMenuView()
    }


    gotoGameView(){
        gameView()
    }

    gotoNextQuestion(){

    }

    gotoMaxPointsView(){
        maxPointsView()
    }

    clearView() {

    }
}