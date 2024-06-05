const pVerdadera= true;
const qVerdadera= true;
const pFalsa=false;
const qFalsa=false;


//Ejercicio a

//Columna NOT p

resultadoa1= !pVerdadera, qVerdadera;
console.log("a.1 NOT p", resultadoa1);

resultadoa2= !pVerdadera, qFalsa;
console.log("a.2 NOT p", resultadoa2);

resultadoa3 = !pFalsa, qVerdadera;
console.log("a.3 NOT p", resultadoa3);

resultadoa4= !pFalsa, qFalsa;
console.log("a.4 NOT p", resultadoa4);

//Columna NOT p AND q

resultadoa5= !pVerdadera && qVerdadera;
console.log("a.5 NOT p AND Q", resultadoa5);

resultadoa6= !pVerdadera && qFalsa;
console.log("a.6 NOT p AND Q", resultadoa6);

resultadoa7= !pFalsa && qVerdadera;
console.log("a.7 NOT p AND Q", resultadoa7);

resultadoa8= !pFalsa && qFalsa;
console.log("a.8 NOT p AND Q", resultadoa8);

//Ejercicio b

//b.1 NOT p
resultadob1= !pVerdadera, qVerdadera;
console.log("b.1 NOT p", resultadob1);

resultadob2= !pVerdadera, qFalsa;
console.log("b.2 NOT p", resultadob2);

resultadob3= !pFalsa, qVerdadera;
console.log("b.3 NOT p", resultadob3);

resultadob4= !pFalsa, qFalsa;
console.log("b.4 NOT p", resultadob4);



//b.2 NOT q

resultadob5= pVerdadera, !qVerdadera;
console.log("b.5 NOT q", resultadob5);

resultadob6= pVerdadera, !qFalsa;
console.log("b.6 NOT q", resultadob6);

resultadob7 =pFalsa, !qVerdadera;
console.log("b.7 NOT q", resultadob7);

resultadob8= pFalsa, !qFalsa;
console.log("b.8 NOT q", resultadob8);

//b.3 NOT p AND NOT q
resultado= !pVerdadera && !qVerdadera;
console.log("b.3.1 NOT p AND NOT q", resultado);

resultado= !pVerdadera && !qFalsa;
console.log("b.3.2 NOT p AND NOT q", resultado);

resultado= !pFalsa && !qVerdadera;
console.log("b.3.3 NOT p AND NOT q", resultado);

resultado= !pFalsa && !qFalsa;
console.log("b.3.4 NOT p AND NOT q", resultado);







