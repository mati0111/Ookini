function calcularprecio(preciounitarioo, cantidad) {
    const total = preciounitarioo * cantidad;
    return total;
}


 function puedereservar(tazasdisponibles) {
return tazasdisponibles > 0;
 }

const botonreservas = document.querySelector("#boton-reservas");
const contadorTazas = document.querySelector("#contador-tazas");

botonreservas.addEventListener("click", function () {
  const tazasActuales = Number(contadorTazas.textContent);

  if (puedereservar(tazasActuales)) {
    contadorTazas.textContent = tazasActuales - 1;
    console.log("reserva realiza exitosamente");
    alert("reserva realizada exitosamente");
  } else {
    botonreservas.textContent = "sin cupos";
    botonreservas.disabled = true;
  }
});
