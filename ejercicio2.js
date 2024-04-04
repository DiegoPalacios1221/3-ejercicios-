var monto = 0, descuento = 0;

monto = prompt("Ingrese el monto que desea hacerle descuento"); 
 if (monto > 100){
   descuento = monto * 0.9;
 }

else {
   descuento = monto * 0.2;

}

alert("El valor con el descuento aplicado es: " + descuento);
