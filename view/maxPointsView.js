export function  maxPointsView() {
    console.log("entre al la vista del juego");

    const container = document.createElement("div");
    container.className = "container d-flex justify-content-center";
    container.style = "padding-top:18vh;";
    document.querySelector("body").appendChild(container);

    const titlePoints = document.createElement("h2");
    titlePoints.className = "card-title";
    titlePoints.innerHTML = "🌟⚜️Puntajes Maximos⚜️🌟";
    document.querySelector(".container").appendChild(titlePoints);

    const container2 = document.createElement("div");
    container2.className = "container d-flex justify-content-center";
    container2.style = "width:50%;";
    document.querySelector("body").appendChild(container2);

    const table = document.createElement("table");
    table.className = "table";
    document.querySelectorAll(".container")[1].appendChild(table);

    const thead = document.createElement("thead");
    document.querySelector(".table").appendChild(thead);

    const tr = document.createElement("tr");
    document.querySelector("thead").appendChild(tr);

    let trStrings = ["🔰#", "🎮 Jugador 🕹", "🌠 Puntaje", "🧬 ID"];
    trStrings.forEach((text) => {
      console.log(text);
      const th = document.createElement("th");
      th.scope = "col";
      th.innerHTML = text;
      document.querySelector("tr").appendChild(th);
    });

    const br1 = document.createElement("br");
    const br2 = document.createElement("br");
    document.querySelectorAll(".container")[1].appendChild(br1);
    document.querySelectorAll(".container")[1].appendChild(br2);

    const footerContainer = document.createElement("div");
    footerContainer.className = "container d-flex justify-content-center";
    footerContainer.id = "footerContainer";
    document.querySelector("body").appendChild(footerContainer);

    const cardBody = document.createElement("a");
    cardBody.className = "btn btn-primary";
    cardBody.innerHTML = "Pantalla de inicio";
    document.querySelector("#footerContainer").appendChild(cardBody);
  }