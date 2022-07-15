export function  mainMenuView() {
    console.log("entre al main menu");

    const container = document.createElement("div");
    container.className = "container";
    document.querySelector("body").appendChild(container);

    const card = document.createElement("div");
    card.className = "card text-center";
    card.id = "card";
    document.querySelector(".container").appendChild(card);

    const cardHeader = document.createElement("div");
    cardHeader.className = "card-header";
    cardHeader.textContent = ""; // aqui colocarer la imagen de QQSM

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

    const btn1 = document.createElement("a");
    btn1.className = "btn btn-primary";
    btn1.innerHTML = "Jugar ya!";

    const btn2 = document.createElement("a");
    btn2.className = "btn btn-primary";
    btn2.innerHTML = "Maximos Puntajes";
    document.querySelector("#cardBody").append(cardTitle, cardText, btn1, btn2);

    const cardFooter = document.createElement("div");
    cardFooter.className = "card-footer text-muted";
    cardFooter.innerHTML = "¿Eres conocedor? eso esta por verse 😁";
    document.querySelector("#card").appendChild(cardFooter);
  }
