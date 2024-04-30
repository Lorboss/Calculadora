// Muestra un mensaje de bienvenida
alert("Hola, bienvenido y bienvenida a la calculadora");

// Solicita al usuario que ingrese el primer numero y lo convierte en punto flotante
var numero1 = parseFloat(prompt("Por favor ingresa un numero del 0 al infinito"));

// Muestra el numero ingresado por el usuario
alert("Elegiste el numero " + numero1);

// Solicita al usuario que ingrese el segundo numero y lo convierte en punto flotante
var numero2 = parseFloat(prompt("Por favor ingresa un segundo numero del 0 al infinito"));

// Muestra el numero ingresado por el usuario
alert("Tu segundo numero es " + numero2);

// Solicita al usuario que elija una operacion
alert("Elige la operacion que deseas hacer con los numeros " + numero1 + " y " + numero2);

// Solicita al usuario que elija una operacion y la convierte en un numero entero
var operacion = parseInt(prompt("Elige una opcion. \n1 es suma.\n2 es resta. \n3 es multiplicacion. \n4 es division."));

// Variable para almacenar el resultado de la operacion
var resultado;

// Variable para almacenar el nombre de la operacion realizada
var nombre

// Verifica que operacion ah elegido el usuario y realiza la operacion correcpondiente
if(operacion == 1){
    resultado = numero1 + numero2;
    nombre = " la suma es " + resultado;
}else if(operacion == 2){
    resultado = numero1 - numero2;
    nombre = " la resta es " + resultado;
}else if(operacion == 3){
    resultado = numero1 * numero2;
    nombre = " la multiplicacion es " + resultado;
}else if(operacion == 4){
    if(numero2 !==0 ){
        resultado = numero1 / numero2;
        nombre = " la division es " + resultado;
    }else{
        nombre = " no se puede dividir por cero";
    }
}else{
    nombre = " operacion no valida";
}

// Muestra el resultado de la operacion
alert(nombre);

// Muestra los numeros ingresados por el usuario y muestra la operacion
document.write("Los numeros que ingresaste fueron " + numero1 + " y " + numero2 + " y el resultado de la operacion de " + nombre);