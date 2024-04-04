let numero1 = 0, numero2 = 0, resultado = 0;

numero1 = parseFloat(prompt("Ingrese el numero 1"));
numero2 = parseFloat(prompt("ingrese el numero 2"));

if (numero1 > numero2 ){
    resultado = numero1 + numero2 ;

    alert("El resultado es: " + resultado);

}
else if (numero1 < numero2){
    resultado = Math.pow(numero1, 2) + Math.pow(numero2, 2);

    alert("El resultado es: " + resultado);
}
else {
    alert("Los numeros son iguales");

}