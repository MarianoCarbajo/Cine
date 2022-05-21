/*• Diseñar un algoritmo que recorra las
butacas de una sala de cine y determine
cuántas butacas desocupadas hay
• Suponga que para modelar este
problema, se utiliza un arreglo con
valores lógicos
• La presencia de un valor verdadero (true) en
el arreglo indica que la butaca está ocupada
• La presencia de un valor falso (false) en el
arreglo indica que la butaca está desocupada*/
/*
let cine: boolean[] = [true, false, false, true];
let sillasDesocupadas: number = 0;
for (let indice: number = 0; indice < cine.length; indice++) {
  if (cine[indice] === false) {
    sillasDesocupadas++;
  }
}
console.log("La cantidad de butacas desocupadas es " + sillasDesocupadas);
*/
let cantidadButacas: number = Number(prompt("Ingrese la cantidad de butacas"));
let butacas: boolean[] = new Array(cantidadButacas);

let butacasDesocupadas: number = 0;
for (let indice: number = 0; indice < cantidadButacas; indice++) {
  butacas[indice] = Boolean(
    prompt("¿La butaca " + (indice + 1) + " está ocupada? (vacio=No)")
  );
  if (butacas[indice] === false) {
    butacasDesocupadas++;
  }
}
console.log("La cantidad de butacas desocupadas es " + butacasDesocupadas);
