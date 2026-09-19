// -------------------------
// LISTA DE TAREAS
// -------------------------

const inputTarea = document.getElementById("nuevaTarea");
const botonAgregar = document.getElementById("botonAgregar");
const listaTareas = document.getElementById("listaTareas");

// Array para guardar las tareas
let tareas = [];

// Evento del botón agregar
botonAgregar.addEventListener("click", agregarTarea);


// Función para agregar una tarea
function agregarTarea() {

    let textoTarea = inputTarea.value;

    if (textoTarea === "") {
        alert("Por favor escribe una tarea");
        return;
    }

    // Agregamos la tarea al array
    tareas.push(textoTarea);

    // Creamos un elemento li
    let nuevaTarea = document.createElement("li");

    nuevaTarea.textContent = textoTarea;


    // Botón completar
    let botonCompletar = document.createElement("button");

    botonCompletar.textContent = "Completar";

    botonCompletar.addEventListener("click", function () {
        nuevaTarea.classList.toggle("completada");
    });


    // Botón eliminar
    let botonEliminar = document.createElement("button");

    botonEliminar.textContent = "Eliminar";

    botonEliminar.addEventListener("click", function () {
        nuevaTarea.remove();
    });


    // Agregamos los botones a la tarea
    nuevaTarea.appendChild(botonCompletar);
    nuevaTarea.appendChild(botonEliminar);


    // Agregamos la tarea a la lista
    listaTareas.appendChild(nuevaTarea);


    // Limpiamos el input
    inputTarea.value = "";
}



// -------------------------
// CALCULADORA
// -------------------------

const numero1 = document.getElementById("numero1");
const numero2 = document.getElementById("numero2");

const botonSumar = document.getElementById("sumar");
const botonRestar = document.getElementById("restar");
const botonMultiplicar = document.getElementById("multiplicar");
const botonDividir = document.getElementById("dividir");

const resultado = document.getElementById("resultado");


// Función sumar
function sumar() {

    let num1 = Number(numero1.value);
    let num2 = Number(numero2.value);

    resultado.textContent = num1 + num2;
}


// Función restar
function restar() {

    let num1 = Number(numero1.value);
    let num2 = Number(numero2.value);

    resultado.textContent = num1 - num2;
}


// Función multiplicar
function multiplicar() {

    let num1 = Number(numero1.value);
    let num2 = Number(numero2.value);

    resultado.textContent = num1 * num2;
}


// Función dividir
function dividir() {

    let num1 = Number(numero1.value);
    let num2 = Number(numero2.value);

    if (num2 === 0) {
        resultado.textContent = "No se puede dividir por cero";
    } else {
        resultado.textContent = num1 / num2;
    }
}


// Eventos de los botones

botonSumar.addEventListener("click", sumar);

botonRestar.addEventListener("click", restar);

botonMultiplicar.addEventListener("click", multiplicar);

botonDividir.addEventListener("click", dividir);