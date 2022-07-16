import { ListenerSetter } from "../controller/ListenerSetter.js";

/**
 * Funcion que contiene la creacion de toda la vista del menu principal.
 */
export const mainMenuView = () => {
  const bButtonsFunctions = new ListenerSetter();
/*
######################################################################
  Containers y headers
######################################################################
*/
  const container = document.createElement("div");
  container.className = "container";
  container.style = `
    display:flex;
    flex-direction: column;
    border-radius:3px;
    height: fit-content;
    width:700px !important;
    padding:30px;
    background:white;`;
  document.querySelector("body").appendChild(container);

  const card = document.createElement("div");
  card.className = "card text-center";
  card.id = "card";
  document.querySelector(".container").appendChild(card);

  const cardHeader = document.createElement("div");
  cardHeader.className = "card-header";

  const cardBody = document.createElement("div");
  cardBody.className = "card-body";
  cardBody.id = "cardBody";
  document.querySelector("#card").append(cardHeader, cardBody);

  const cardTitle = document.createElement("h1");
  cardTitle.className = "card-title";
  cardTitle.innerHTML = "¿Quien Quiere ser Millonario?";

  const cardText = document.createElement("p");
  cardText.className = "card-text";
  cardText.id = "cardText";
  cardText.textContent = "Donde tu cultura general te hara ganar dinero!";

/*
######################################################################
  Footer y botones de navegacion
######################################################################
*/
  const btnPlay = document.createElement("a");
  btnPlay.className = "btn btn-dark";
  btnPlay.style = `
    margin: 0px 10px;
    `;
  btnPlay.innerHTML = "Jugar ya!";

  const btn2 = document.createElement("a");
  btn2.className = "btn btn-dark";
  btn2.innerHTML = "Maximos Puntajes";
  btn2.style = `
    margin: 0px 10px;
    `;
  document
    .querySelector("#cardBody")
    .append(cardTitle, cardText, btnPlay, btn2);

  const cardFooter = document.createElement("div");
  cardFooter.className = "card-footer text-muted";
  cardFooter.innerHTML = "💬 ¿Eres conocedor? eso esta por verse...";
  document.querySelector("#card").appendChild(cardFooter);

/*
######################################################################
    Set listeners
######################################################################
*/
  bButtonsFunctions.setMainMenuViewBButtonsNavigation();
};
