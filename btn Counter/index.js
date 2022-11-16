/*
El contador debe iniciar en 0. ---
Debe tener un botón para agregar una unidad (+) y quitar una unidad (-).
No debe permitir número negativos. Se puede utilizar la property "Disabled"
Debe tener un límite de 50. Se puede utilizar la property "Disabled"
Al alcanzar cualquiera de los límites debe generar una interacción con el user. (Mensaje en pantalla que arranque en display:none y cambie de display, pueden utilizar un alert, etc)

*/
const add = document.getElementById("add");
const subtract = document.getElementById("subtract");
const display = document.getElementById("display");


let counter = 0;

add.addEventListener("click", () => {
    if( counter < 50 ){
        counter++;
        display.innerHTML = `Counter N° ${counter}`;
    }
    subtract.disabled = false;
    if( counter === 50){
        alert("MAX NUMBER");
        add.disabled = true;
    }

});

subtract.addEventListener("click", () => {
    if( counter > 0 ){
        counter--;
        display.innerHTML = `Counter N° ${counter}`;
        add.disabled = false;
    }

    if( counter === 0){

        alert("MIN NUMBER");
        subtract.disabled = true;
    }
});



