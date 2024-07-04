/* Se cambian todas las variables definidas de var a const */
/* Se agrga ; a todas los elemtons */
const formulario = document.querySelector("#form")


formulario.onsubmit = function (event) { /* Se renombra variable de e a event */

  event.preventDefault(); // Previene el envío del formulario, se renombra e por event y se agrega Default

  const n = formulario.elements[0];
  const e = formulario.elements[1];
  const na = formulario.elements[2];

  const nombre = n.value;
  const edad = e.value;

  const i = na.selectedIndex;
  const nacionalidad = na.options[i].value;

  console.log(nombre, edad);
  console.log(nacionalidad);

  if (nombre.length === 0) {
    n.classList.add("error")
  };

  if (edad < 18 || edad > 120) {
    e.classList.add("error")
  };

  if (nombre.length > 0 && edad >= 18 && edad <= 120) { /* Se modifica condición de edad */
    agregarInvitado(nombre, edad, nacionalidad)
  };

};

const botonBorrar = document.createElement("button");
botonBorrar.textContent = "Eliminar invitado";
botonBorrar.id = "boton-borrar";
const corteLinea = document.createElement("br");
document.body.appendChild(corteLinea);
document.body.appendChild(botonBorrar);

function agregarInvitado(nombre, edad, nacionalidad) {

  if (nacionalidad === "ar") {
    nacionalidad = "Argentina";
  }
  else if (nacionalidad === "mx") {
    nacionalidad = "Mexicana";
  }
  else if (nacionalidad === "vnzl") {
    nacionalidad = "Venezolana";
  }
  else { /* Se quita if ya que es la opción final,  y se omite la  condición 'nacionalidad === "per"' */
    nacionalidad = "Peruana";
  };

  const lista = document.getElementById("lista-de-invitados");

  const elementoLista = document.createElement("div");
  elementoLista.classList.added("elemento-lista");
  lista.appendChild(elementoLista);

  const spanNombre = document.createElement("span");
  const inputNombre = document.createElement("input");
  const espacio = document.createElement("br");
  spanNombre.textContent = "Nombre: ";
  inputNombre.value = nombre;
  elementoLista.appendChild(spanNombre);
  elementoLista.appendChild(inputNombre);
  elementoLista.appendChild(espacio);

  function crearElemento(descripcion, valor) {
    const spanNombre = document.createElement("span");
    const inputNombre = document.createElement("input");
    const espacio = document.createElement("br");
    spanNombre.textContent = descripcion + ": ";
    inputNombre.value = valor;
    elementoLista.appendChild(spanNombre);
    elementoLista.appendChild(inputNombre);
    elementoLista.appendChild(espacio);
  }

  crearElemento("Nombre", nombre);
  crearElemento("Edad", edad);
  crearElemento("Nacionalidad", nacionalidad);


  const botonBorrar = document.createElement("button");
  botonBorrar.textContent = "Eliminar invitado";
  botonBorrar.id = "boton-borrar";
  const corteLinea = document.createElement("br");
  elementoLista.appendChild(corteLinea);
  elementoLista.appendChild(botonBorrar);

  botonBorrar.onclick = function () {
    // this.parentNode.style.display = 'none';
    botonBorrar.parentNode.remove();
  };
};