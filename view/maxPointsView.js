import { ListenerSetter } from "../controller/ListenerSetter.js";

/**
 * Funcion que contiene toda la creacion de la parte estatica de la pantalla Maximos Puntajes.
 */
export const maxPointsView = () => {
  const listenerSetter = new ListenerSetter();
/*
######################################################################
  Containers y headers
######################################################################
*/
  const mainContainer = document.createElement("div");
  mainContainer.className = "main-container";
  mainContainer.style = `
    display:flex;
    flex-direction: column;
    border-radius:3px;
    height:fit-content;
    width:700px;
    padding:30px;
    background:white;`;
  document.querySelector("body").appendChild(mainContainer);

  const container = document.createElement("div");
  container.className = "container d-flex justify-content-center";
  document.querySelector(".main-container").appendChild(container);

  const titlePoints = document.createElement("h2");
  titlePoints.className = "card-title";
  titlePoints.innerHTML = "⚜️Puntajes Maximos⚜️";
  document.querySelector(".container").appendChild(titlePoints);

  const container2 = document.createElement("div");
  container2.className = "container d-flex justify-content-center";
  container2.style = "width:90%;";
  document.querySelector(".main-container").appendChild(container2);

/*
######################################################################
  Tabla y nombres base de columnas
######################################################################
*/
  const table = document.createElement("table");
  table.className = "table";
  document.querySelectorAll(".container")[1].appendChild(table);

  const thead = document.createElement("thead");
  document.querySelector(".table").appendChild(thead);

  const tr = document.createElement("tr");
  document.querySelector("thead").appendChild(tr);

  let columnStrings = ["🔰", "🎮 Jugador 🕹", " Puntaje", "🧬 ID"];
  columnStrings.forEach((text) => {
    const th = document.createElement("th");
    th.scope = "col";
    th.innerHTML = text;
    document.querySelector("tr").appendChild(th);
  });

/*
######################################################################
  Footer y boton
######################################################################
*/
  const br1 = document.createElement("br");
  const br2 = document.createElement("br");
  document.querySelectorAll(".container")[1].appendChild(br1);
  document.querySelectorAll(".container")[1].appendChild(br2);

  const footerContainer = document.createElement("div");
  footerContainer.className = "container d-flex justify-content-center";
  footerContainer.id = "footerContainer";
  footerContainer.style = "padding-top: 10px;";
  document.querySelector(".main-container").appendChild(footerContainer);

  const gotoMain = document.createElement("a");
  gotoMain.className = "btn btn-dark";
  gotoMain.innerHTML = "Pantalla de inicio";
  document.querySelector("#footerContainer").appendChild(gotoMain);

/*
######################################################################
    Set Listeners
######################################################################
*/
listenerSetter.setMaxPointsBButtonsNavigation();
};
