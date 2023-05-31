const inputUrlImagen = document.querySelector("#entrada-url");
const divImagenes = document.querySelector("#imagenes");
const inputPosBorrar = document.querySelector("#posicion-borrar");

const imagenesAgregadas = [];


/**
 * Agrega una imagen al final del conjunto de imagenes en la pagina
 */
function agregarImagen(){
    imagenesAgregadas.push(inputUrlImagen.value);
    actualizarImagenes();
    /* divImagenes.innerHTML += `<img src="${inputUrlImagen.value}" alt="">`; */
}




/**
 * Borra la ultima imagen de la pagina
 */
function borrarUltimaImg(){
    imagenesAgregadas.pop();//solamente en la logica de la aplicacion
    actualizarImagenes();
}


/**
 * Actualiza las imagenes en la pagina
 */
function actualizarImagenes() {
    console.log(imagenesAgregadas);
    divImagenes.innerHTML = "";
    for (let i = 0; i < imagenesAgregadas.length; i++) {
        divImagenes.innerHTML += `
            <img src="${imagenesAgregadas[i]}" alt="img-${i}">
        `;
    }
}


/**
 * Borra la imagen en la posicion requerida
 */
function borrarImgEnPosicion(){
    imagenesAgregadas.splice(inputPosBorrar.value, 1);
    actualizarImagenes();
}