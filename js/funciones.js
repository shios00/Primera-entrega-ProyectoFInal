

function agregarCancion(){
    let nombre = prompt("Ingrese Nombre del tema:")
    let acordes = prompt("Ingrese acordes:")
    let artista = prompt("Ingrese nombre del Artista")
    nuevaLista.push(new Cancion(nombre, acordes, artista))
        console.table(nuevaLista)

}

agregarCancion();

function buscarCancionRhcp() {
    let can = prompt("Ingresa la cancion a buscar:")
    const resultado = cancionesRHCP.find(Cancion => Cancion.nombre === can)
        if (resultado){
            console.table(resultado)
        } else {
            console.warn("La cancion no se encuentra ingresada en la lista")
        }
    }


function listaCancionesRhcp(){ 
    for (const Cancion of cancionesRHCP){
      console.log(Cancion.nombre)
          }
    }


function buscarCancion() {
        const canciones = nuevaLista.concat(cancionesRHCP);
        let can = prompt("Ingresa la cancion a buscar:")
        const resultado = canciones.find(Cancion => Cancion.nombre === can)
            if (resultado){
                console.table(resultado)
            } else {
                console.warn("La cancion no se encuentra ingresada en la lista")
            }
        }

 function buscarArtista() {
            const canciones = nuevaLista.concat(cancionesRHCP);
            let can = prompt("Ingresa nombre del Artista a buscar:")
            const resultado = canciones.find(Cancion => Cancion.artista === can)
                if (resultado){
                    console.table(resultado)
                } else {
                    console.warn("El artista no se encuentra ingresado en la lista")
                }
            }