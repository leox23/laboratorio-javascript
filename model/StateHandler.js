
/**
 * Esta clase es para manejar el estado de la aplicacion,
  se usara desde la clase GameController y LayoutInflater
  para llevar continuidad del progreso actual del jugador
 */
export class StateHandler {
    getState() {
        const body = document.querySelector("body")
        let state = {
            level : body.getAttribute("level"),
            setOfQAIndex : body.getAttribute("setindex"),
            points : body.getAttribute("points")
        }
        return state
    }
    /**
     * Este metodo es para guardar el nivel del usuario como atributo de la etiqueta body.
     * @param {Integer} level El valor del nivel actual en el que esta el jugador.
     */
    setStateLevel(level) {
        const body = document.querySelector("body")
        body.setAttribute("level", level);
    }

    /**
     * Para establecer cual es la pregunta con respuestas que fue seleccionada para la pregunta y respuestas presentadas en la pantalla actual, esto es para poder conseguir la respuesta correcta cuando el usuario responda.
     * @param {Integer} setOfQAIndex Es el indice seleccionado del array del set de preguntas del nivel actual.
     */
    setStateSetOfQAIndex(setOfQAIndex) {
        const body = document.querySelector("body")
        body.setAttribute("setindex", setOfQAIndex);
    }

    /**
     * Para establecer los puntos actuales del jugador
     * @param {Integer} points Los puntos que tiene acumulados el jugador
     */
    setStatePoints(points) {
        const body = document.querySelector("body")
        body.setAttribute("points", points);
    }
}