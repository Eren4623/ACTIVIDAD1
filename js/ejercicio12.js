function suma() {
    //obtiene el valor del elemento con id num1 y num2
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    //convierte los valores a enteros y los suma
    var resultado = parseInt(num1) + parseInt(num2);
    //muestra el resultado en el elemento con id resultado
    document.getElementById("resultado").innerHTML = resultado;
}

//agregar una funcion dividir que al dividir entre 0 mande un error
//