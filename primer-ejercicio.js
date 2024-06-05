/*De un operario se conoce su sueldo y años de antigüedad. Se pide crear un 
programa que lea los datos de entrada y muestre en consola el valor booleano 
de las siguientes comparaciones:*/

const sueldoDolares= 3000;
const tiempoAntiguedad= 18;

// i. ¿El sueldo es inferior a $2000 US y su antigüedad es igual o superior a 10 años?
// ii. ¿El sueldo es inferior a $2000 US o su antigüedad es menor a 10 años?
// iii. ¿El sueldo es mayor o igual a $2000 US?


const primerPunto= sueldoDolares < 2000 && tiempoAntiguedad >= 10;
const segundoPunto= sueldoDolares < 2000 || tiempoAntiguedad < 10;
const tercerPunto= sueldoDolares >= 2000;

console.log(`¿El sueldo es inferior a $2000 US y su antigüedad es igual o superior a 10 años? ${primerPunto}`);
console.log(`¿El sueldo es inferior a $2000 US o su antigüedad es menor a 10 años? ${segundoPunto}`);
console.log(`¿El sueldo es mayor o igual a $2000 US? ${tercerPunto}`)

