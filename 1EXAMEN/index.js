
/*================================
EJERCICIO 1
=================================*/
function ejercicio1(string) {
    var array = [];
    for (var caracter of string) {
        if (caracter == '(') {
            array.push(caracter);
        }
        if (caracter == ')') {
            if (array.length == 0) {
                return false;
            }
            array.pop();
        }
    }
    return array.length === 0;
}



/*================================
EJERCICIO 2
=================================*/
// function ejercicio2(arrayFechas, fechaInicio, fechaFin) {

// }

// console.log(ejercicio2());



/*================================
EJERCICIO 3
=================================*/
function ejercicio3(arrayNum) {
    var total = 1;
    for (var i = 0; i < arrayNum.length; i++) {
        total *= arrayNum[i];
    }
    return total;
}



/*================================
EJERCICIO 4
=================================*/
function ejercicio4(filas, columnas, color, objeto) {
    var array=[];
    var tabla = document.createElement("table");

    for (var i = 0; i < filas; i++) {
        var rows = document.createElement("tr");
        for (var j = 0; j < columnas; j++) {
            var cols = document.createElement("td");
            var textoCelda = document.createTextNode("Examen");
            cols.appendChild(textoCelda);
            rows.appendChild(cols);
        }
        rows.setAttribute("style", "background-color:" + color + "");
        tabla.appendChild(rows);
    }
    tabla.setAttribute("border", "2");
    objeto.appendChild(tabla);

    var rows = tabla.getElementsByTagName("tr");
    for (i = 0; i < filas; i++) {
        row = tabla.rows[i];
        row.onclick = function () {
            var celda = this.getElementsByTagName("td")[2];
            celda.textContent="";
        };
    }
}

// ejercicio4(4, 4, "red", document.getElementById("div"));




