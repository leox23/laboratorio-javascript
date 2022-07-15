import { GameController } from "../controller/GameController.js";

export const gameView = () => {
  const controller = new GameController();

  const cardContainer = document.createElement("div");
  cardContainer.className = "card text-center";
  cardContainer.style = "padding:15vh;";
  document.querySelector("body").appendChild(cardContainer);

  const cardBody = document.createElement("div");
  cardBody.className = "card-body";
  document.querySelector(".card").appendChild(cardBody);

  const actualPointsTitle = document.createElement("h4");
  actualPointsTitle.className = "card-title";
  actualPointsTitle.innerText = "Puntaje actual:";
  actualPointsTitle.style = "margin-bottom:-10px";
  document.querySelector(".card-body").appendChild(actualPointsTitle);

  const actualPoints = document.createElement("h1");
  actualPoints.className = "card-title";
  actualPoints.innerText = "aqui van los puntos";
  actualPoints.id = "points";
  document.querySelector(".card-body").appendChild(actualPoints);
  
/*
######################################################################
  Pregunta y detalles de nivel
######################################################################
*/
  const question = document.createElement("h2");
  question.className = "card-title";
  //question.innerText = "aqui va mi pregunta";; para remover
  question.id = "question";
  document.querySelector(".card-body").appendChild(question);

  const levelAndPoints = document.createElement("p");
  levelAndPoints.className = "card-text";
  levelAndPoints.id = "round";
  //levelAndPoints.innerText = "texto de nivel y puntos"; para remover
  document.querySelector(".card-body").appendChild(levelAndPoints);

  /*
######################################################################
  Respuestas
######################################################################
*/
  const radioContainers = document.createElement("div");
  radioContainers.className =
    "radioButtons text-start d-flex justify-content-center flex-column align-items-center";
  radioContainers.style = `
    flex-direction: row!important;
    justify-content: center;`;
  document.querySelector(".card-body").appendChild(radioContainers);

  for (let i = 0; i < 2; i++) {
    const pairAnsContainer = document.createElement("div");
    pairAnsContainer.className = "pair-answer";
    document.querySelector(".radioButtons").appendChild(pairAnsContainer);

    for (let j = 0; j < 2; j++) {
      const answerContainer = document.createElement("div");
      answerContainer.className = "answerContainer";
      answerContainer.style = `
        padding: 10px;
        border: 1px solid #000;
        border-radius: 5px;`;
      document.querySelectorAll(".pair-answer")[i].appendChild(answerContainer);

      if (j == 0) {
        const spacer = document.createElement("div");
        spacer.style = `
          height: 10px;
          width: 50px;`;
        document.querySelectorAll(".pair-answer")[i].appendChild(spacer);
      }
    }

    if (i == 0) {
      const spacer = document.createElement("div");
      spacer.style = `
        height: 10px;
        width: 70px;`;
      document.querySelector(".radioButtons").appendChild(spacer);
    }
  }

  for (let k = 0; k < 4; k++) {
    const formRadioContainer = document.createElement("div");
    formRadioContainer.className = "form-check";
    document
      .querySelectorAll(".answerContainer")
      [k].appendChild(formRadioContainer);

    const radioCircle = document.createElement("input");
    radioCircle.className = "form-check-input";
    radioCircle.type = "radio";
    radioCircle.name = "flexRadioDefault";
    radioCircle.id = "flexRadioDefault" + k;
    document.querySelectorAll(".form-check")[k].appendChild(radioCircle);

    const radioLabel = document.createElement("label");
    radioLabel.className = "form-check-label";
    radioLabel.style = "width: 100%;";
    radioLabel.htmlFor = "flexRadioDefault" + k;
    document.querySelectorAll(".form-check")[k].appendChild(radioLabel);
  }

  const br = document.createElement("br");
  document.querySelector(".card-body").appendChild(br);

  controller.inflateNextQuestion()

  /*
######################################################################
  Footer
######################################################################
*/
  const btnResponder = document.createElement("a");
  btnResponder.className = "btn btn-primary";
  btnResponder.innerText = "Responder!";
  btnResponder.style = "margin: 0px 20px;";
  //btnResponder.addEventListener("click",/*TODO pendiente*/)
  document.querySelector(".card-body").appendChild(btnResponder);

  const btnRetirarse = document.createElement("a");
  btnRetirarse.className = "btn btn-primary";
  btnRetirarse.innerText = "Retirarse";
  btnRetirarse.style = "margin: 0px 20px;";
  //btnResponder.addEventListener("click",/*TODO pendiente*/)
  document.querySelector(".card-body").appendChild(btnRetirarse);

  const cardFooter = document.createElement("div");
  cardFooter.className = "card-footer text-muted";
  cardFooter.innerText =
    "🚨 Recuerda que si tu respuesta es erronea, perderas el puntaje. Sino estas seguro, retirate! 🚨";
  document.querySelector(".card").appendChild(cardFooter);
}
