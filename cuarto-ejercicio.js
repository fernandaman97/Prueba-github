/*
Diseñe un algoritmo que lea o reciba el nombre de un empleado, su salario 
básico por horas y el número de horas trabajadas en un mes y realice lo 
siguiente:
i. Calcular su salario básico mensual
ii. Determinar si recibe o no subsidio de transportes. Un empleado 
recibe este subsidio cuando el salario mensual básico es menor o igual 
a $700.000 COP
iii. Mostrar en consola el nombre del empleado, su salario básico 
mensual y si recibe o no subsidio de transporte.
*/
let nombreCompleto = 'Juan Perez';
const salarioBasicoHoras= 7500;
const horasMes= 160;
const salarioMensual= salarioBasicoHoras* horasMes;
const subsidio= salarioMensual >= 700000; 



console.log (`El salario básico mensual es de: ${salarioMensual}`);
console.log (`Recibe subsidio de transporte? ${subsidio}`);
console.log (`El nombre del trabajador es: ${nombreCompleto}. Su salario básico mensual es de ${salarioMensual} ¿y recibe subsidio de transporte? ${subsidio}`);