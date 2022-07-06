// Carlos Jose Linares Rodriguez
// KarlangaXZ Estudiante de ing. software
/**
 * (TRABAJO PRACTICO)
 *
 * 
 */
function agregarNotas() {

    let nom = document.getElementById('nombre').value;
    let not1 = document.getElementById('nota1').value;
    let not2 = document.getElementById('nota2').value;
    let not3 = document.getElementById('nota3').value;
    let not4 = document.getElementById('nota4').value;

    //Validadr el campo nombre
    if (nom === "") {

        swal("Ingrese el nombre del Estudiante", "El campo de nombre no puede ser vacio", "warning"); return false;
    }
    // Validar las notas si estan vacias
    if (not1 === "" || not2 === "" || not3 === "" || not4 === "") {

        swal("Ingese las notas por favor", "La notas no pueden ser vacios", "warning"); return false;

    }
    //Validar las notas, no mayor de 21 puntos, solo asta 20
    if (not1 >= 25 || not2 >= 25 || not3 >= 25 || not4 >= 25) {
        alert("la nota no puede ser mas de 20")
        return false;
    }

    //Suma de las calificaciones
    var sump = (parseInt(not1) + parseInt(not2) + parseInt(not3) + parseInt(not4))
    //Promediar la suma de las notas entre 3
    var prom = (parseFloat(not1) + parseFloat(not2) + parseFloat(not3) + parseFloat(not4)) / 4;

    //Variable obserbacion
    var obs = 0;
    //Promedio mayor o igual a 17.5 entonces aprobado, caso contrario reprobado.
    if (prom >= 17.5) {
        obs = value = "!Aprobado¡ &#x2714";

    } else {
        obs = value = "!Desaprobado¡ &#x274c";

    }

    const tabla = document.getElementById('addtabla');

    const fila = document.createElement('tr');


    fila.innerHTML = `<td> ${nom} </td><td> ${not1} </td><td> ${not2} </td><td> ${not3} </td><td> ${not4} </td><td> ${sump} </td><td> ${prom.toFixed(1)} </td><td> ${obs} </td>`;





    tabla.appendChild(fila);

    if (prom > 17.5) {
        document.querySelector("#addtabla tr:last-child td:nth-child(5)").style.background = "#B3DEBA";
    } else {
        document.querySelector("#addtabla tr:last-child td:nth-child(5)").style.background = "#FFCABA";
    }
    if (not1 > 17.5) {
        document.querySelector("#addtabla tr:last-child td:nth-child(2)").style.color = "blue";
    } else {
        document.querySelector("#addtabla tr:last-child td:nth-child(2)").style.color = "red";
    }
    if (not2 > 17.5) {
        document.querySelector("#addtabla tr:last-child td:nth-child(3)").style.color = "blue";
    } else {
        document.querySelector("#addtabla tr:last-child td:nth-child(3)").style.color = "red";
    }
    if (not3 > 17.5) {
        document.querySelector("#addtabla tr:last-child td:nth-child(4)").style.color = "blue";
    } else {
        document.querySelector("#addtabla tr:last-child td:nth-child(4)").style.color = "red";
    }
    if (not4 > 17.5) {
        document.querySelector("#addtabla tr:last-child td:nth-child(4)").style.color = "blue";
    } else {
        document.querySelector("#addtabla tr:last-child td:nth-child(4)").style.color = "red";
    }



    document.getElementById('nombre').value = '';
    document.getElementById('nota1').value = '';
    document.getElementById('nota2').value = '';
    document.getElementById('nota3').value = '';
    document.getElementById('nota4').value = '';


}
