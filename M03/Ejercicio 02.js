/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*2️⃣ EJERCICIO 02 2️⃣*/

function devolverString(string) {
   return string;
   // Debe retornar un string.
   // Tu código:
}

// ⛔️ "X" e "Y" son números.

function suma(x, y) {
   sumar = x+y;
    return sumar;// Retorna el resultado de su suma.
   // Tu código:
}

function resta(x, y) {
   restar = x-y;// Retorna el resultado de la resta.
   return restar;// Tu código:
}

function divide(x, y) {
   dividir = x/y;// Retorna el resultado de su división.
   return dividir;// Tu código:
}

function multiplica(x, y) {
   multiplicar = x*y;// Retorna el resultado de su multiplicación.
   return multiplicar;// Tu código:
}

function obtenerResto(x, y) {
   resto = x % y;
   return resto;// Obten el resto de la división de "x" entre "y".
   // Tu código:
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   devolverString,
   suma,
   resta,
   divide,
   multiplica,
   obtenerResto,
};
