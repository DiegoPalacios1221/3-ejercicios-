var estudiante = 0;
var calificacion = 0, asistencias = 0;

estudiante = prompt("Ingrese el nombre del estudiante");
calificacion = prompt("Ingrese un valor de 1 a 5 para la calificacion correctas del estudiante");
asistencias = prompt("Ingrese del 1 al 5 las asistencias del estudiante");

if (asistencias > 4) {
    alert("El estudiante " + estudiante + " ha aprobado");
    
}
  
else {
    alert("El estudiante " +  estudiante  + " ha reprobado");
}
