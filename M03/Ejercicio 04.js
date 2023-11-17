/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*4️⃣ EJERCICIO 04 4️⃣*/

// ⛔️ Recuerda que debes utilizar el objeto global "Math".

function elevarAlCuadrado(num) {
   cuadrado = Math.pow(num, 2);
   return cuadrado;// Retorna el valor de "num" elevado al cuadrado.
   // Tu código:
}

function elevarAlCubo(num) {
   cubo = Math.pow(num, 3);
   return cubo;
   // Retorna el valor de "num" elevado al cubo.
   // Tu código:
}

function elevar(num, exponent) {
   cuadrado = Math.pow(num, exponent);
   return cuadrado;// Retorna el valor de "num" elevado al exponente "exponent".
   // Tu código:
}

function redondearNumero(num) {
   redondeo = Math.round(num);
   return redondeo;// Redondea "num" al entero más próximo y retórnalo.
   // Tu código:
}

function redondearHaciaArriba(num) {
   redondeo = Math.ceil(num);
   return redondeo;
   // Redondea "num" hacia arriba y retórnalo.
   // Tu código:
}

function numeroRandom() {
   redondeo = Math.random();
   return redondeo;
   // Genera un número al azar entre 0 y 1 y retórnalo.
   // Tu código:
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   elevarAlCuadrado,
   elevarAlCubo,
   elevar,
   redondearNumero,
   redondearHaciaArriba,
   numeroRandom,
};
