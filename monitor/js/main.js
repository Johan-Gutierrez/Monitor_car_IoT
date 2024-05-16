
let respuesta = document.getElementById('respuesta');

function callApiRequest(){

    // Hacer una petición para un usuario con ID especifico
axios.get('https://13.59.60.173/iot-car-control/back-end/apis/getRegistro.php')
.then(function (response) {
  // manejar respuesta exitosa
  console.log(response);

  let respuestaservidor = response.data == "a"?"ADELANTE":response.data == "r"?"ATRAS":response.data == "i"?"IZQUIERDA":response.data == "d"?"DERECHA": response.data == "p"?"PARAR":"LETRA NO CONOCIDA";
  respuesta.innerHTML = "Respuesta: <strong>" +respuestaservidor;
})
.catch(function (error) {
  // manejar error
  console.log(error);
})
.finally(function () {
  // siempre sera executado
});
}

// Repite la función cada 2 segundos
setInterval(callApiRequest, 2000);


