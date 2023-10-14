function generarRFC() {
    var nombre = document.getElementById("nombre").value;
    var apellidoPaterno = document.getElementById("apellidoPaterno").value;
    var apellidoMaterno = document.getElementById("apellidoMaterno").value;
    var anioNacimiento = document.getElementById("anioNacimiento").value;
    var mesNacimiento = document.getElementById("mesNacimiento").value;
    var diaNacimiento = document.getElementById("diaNacimiento").value;

    // L�gica para generar el RFC

    // Obtener las primeras letras y el segundo car�cter del apellido paterno
    var primeraLetraApellidoPaterno = apellidoPaterno.charAt(0).toUpperCase();
    var segundaLetraApellidoPaterno = apellidoPaterno.charAt(1).toUpperCase();

    // Obtener las primeras dos letras del apellido materno
    var dosLetrasApellidoMaterno = apellidoMaterno.slice(0, 2).toUpperCase();

    // Obtener las dos �ltimas cifras del a�o de nacimiento
    var dosUltimasCifrasAnio = anioNacimiento.slice(-2);

    // Formar el RFC seg�n el formato PPMNaammdd
    var rfc = `${primeraLetraApellidoPaterno}${segundaLetraApellidoPaterno}${dosLetrasApellidoMaterno}${dosUltimasCifrasAnio}${mesNacimiento}${diaNacimiento}`;


    // Mostrar el RFC generado
    document.getElementById("resultado").innerText = "RFC generado: " + rfc;
}
