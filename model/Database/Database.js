/**
 * Clase dedicada a persistencia de datos del juego en local storage.
 */
export class Database {
/**
 * Metodo para guardar en local storage el nombre, el puntaje del usuario, y ID autogenerado del jugador.  
 * @param {String} namePlayer Nombre del jugador, que sebe ser recibido por entrada del usuario del usuario.
 * @param {Integer} points Puntos totales que obtuvo el usuario.
 */
    setPlayerPoints(namePlayer, points){

        new Promise(async () => {
            const DB = new Database()
            let myDbList = [];
            let lastid = 0
            let dbList = await DB.getScoreList()
            if (!dbList){
                lastid = 1
            } else {
                myDbList = dbList
                lastid = myDbList.length + 1
            }
            
            let newItem = {id : lastid, name: namePlayer, points:points}
            await myDbList.push(newItem)

            let orderedList;
            try {
                orderedList = myDbList.sort(((a, b) => b.points - a.points));
            } catch (error){
                orderedList = myDbList
            }
            localStorage.setItem("list", JSON.stringify(orderedList))
        })
    }
/**
 * Metodo de lectura de local storage, con los puntajes registrados del juego.
 * @returns List{id : Integer, name: String, points: Integer}
 */
    getScoreList(){
        let miListaRecuperada = JSON.parse(localStorage.getItem("list"))
        return miListaRecuperada
    } 
}