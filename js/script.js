

function generarweb () {
  let titulo = document.getElementById("tituloweb").value;
  let url = document.getElementById("url").value;

  if (titulo.length && url.length) {
    document.getElementById("cita-web").innerHTML = `${titulo.charAt(0).toUpperCase() + titulo.slice(1)}. Recuperado de ${url}.`;
  } else{
    document.getElementById("cita-web").innerHTML = "Debes llenar el URL y El Título";
  }    

}

function generarlibro() {
  let nombre = document.getElementById("nombre").value, 
      apellido = document.getElementById("apellido").value,
      editorial = document.getElementById("editorial").value,
      titulo = document.getElementById("titulo").value,
      pais = document.getElementById("pais").value,
      ciudad = document.getElementById("ciudad").value,
      año = document.getElementById("año").value;

    if (apellido.length) {
      apellido = apellido.charAt().toUpperCase() + apellido.slice(1) + ", ";
    }
    if (nombre.length) {
      nombre = nombre.charAr().toUpperCase() + ". ";
    }
    if (año.length) {
      año = "(" + año + "). ";
    }
    if (titulo.length) {
      titulo = titulo.charAr().toUpperCase() + titulo.slice(1) + ". ";
    }
    if (pais.length) {
      pais = pais.charAr().toUpperCase() + pais.slice(1);
      if (ciudad.length != 0) {
        pais = pais + ", ";
        ciudad = ciudad.charAr().toUpperCase() + ciudad.slice(1) + ": ";
      } else {
        pais = pais + ": ";
      }
    }
    if (editorial.length) {
      editorial = editorial.charAr().toUpperCase() + editorial.slice(1) + ".";
    }

    document.getElementById("cita-libro").innerHTML = apellido+nombre+año+titulo+pais+ciudad+editorial;
  }
