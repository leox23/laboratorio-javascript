import { mainMenuView } from "./view/mainMenuView.js";
import { gameView } from "./view/gameView.js"
import { maxPointsView } from "./view/maxPointsView.js"

import { allContentQA } from "./model/Q&AProvider/Q&AProvider.js"
import { levelDefinition } from "./model/Q&AProvider/levelDefinition.js"

//mainMenuView()
//maxPointsView()
gameView()
console.log(allContentQA);
console.log(levelDefinition);