import { allContentQA } from "../model/Q&AProvider/Q&AProvider.js";
import { levelDefinition } from "../model/Q&AProvider/levelDefinition.js";
import { Database } from "../model/Database/Database.js";
import { StateHandler } from "../model/StateHandler.js";

export class LayoutInflater {
  //datos dinamicos del juego se colocan aparte para no recargar nada.
  inflateNextQuestion() {
    const s = new StateHandler();
    let level = s.getState().level
    let points = s.getState().points

    const body = document.querySelector("body");

    //seleccionar random cualquiera de las preguntas
    //redondear abajo, num double random del 0 al 4 (aqui el largo del array)
    let setSelectedIndex = Math.floor(Math.random() * 4);
    let questionSelected = allContentQA[level][setSelectedIndex].question;

    //inflar pregunta
    const question = document.querySelector("#question");
    question.innerText = questionSelected;

    //inflar puntos/leer de body
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

    s.setStateSetOfQAIndex(setSelectedIndex)
  }
/*
######################################################################
  Listar los jugadores y puntos de la base de datos 
######################################################################
*/
  inflateHighScores() {
    const DB = new Database();
    let list = DB.getScoreList();

    const tbody = document.createElement("tbody");
    tbody.id = "contentScore";
    document.querySelector("table").appendChild(tbody);

    for (var i = 0; i < list.length; i++) {
      //escribiendo fila a fila la tabla
      const tr = document.createElement("tr");
      tr.style =
        list[i].id == list.length
          ? "background-color: rgb(170, 249, 168);"
          : "background-color: white;";
      tr.id = `tr${i}`;
      document.querySelector("#contentScore").appendChild(tr);

      const th = document.createElement("th");
      th.scope = "row";
      th.innerText = i < 3 ? i + 1 + " 🎖" : i + 1;
      document.querySelector(`#tr${i}`).appendChild(th);

      const td1 = document.createElement("td");
      td1.innerText = list[i].name;
      document.querySelector(`#tr${i}`).appendChild(td1);
      const td2 = document.createElement("td");
      td2.innerText = list[i].points;
      document.querySelector(`#tr${i}`).appendChild(td2);
      const td3 = document.createElement("td");
      td3.innerText = list[i].id;
      document.querySelector(`#tr${i}`).appendChild(td3);
    }
  }
}
