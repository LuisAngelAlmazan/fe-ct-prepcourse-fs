/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function devolverPrimerElemento(array) {
   if (array.length > 0) {
      // Retornar el primer elemento del arreglo
      return array[0];
  } else {
      // En caso de que el arreglo esté vacío, puedes retornar null, undefined u otro valor que consideres apropiado.
      return null;
  }
   // Retornar el primer elemento del arreglo recibido por parámetro.
   // Tu código:
}

function devolverUltimoElemento(array) {
   let ultimoElemento = array[array.length - 1];
   return ultimoElemento;
      // Retornar el último elemento del arreglo recibido por parámetro.
   // Tu código:
}


function obtenerLargoDelArray(array) {
   longitud=array.length;
   return longitud;// Retornar la longitud del arreglo recibido por parámetro.
   // Tu código:
}

function incrementarPorUno(array) {
   
   // Utilizar el método map para incrementar cada elemento en 1
   const arregloIncrementado = array.map(array => array + 1);

   // Retornar el nuevo arreglo
   return arregloIncrementado;// El arreglo recibido por parámetro contiene números.
   // Retornar un arreglo con los elementos incrementados en +1.
   // Tu código:
}

function agregarItemAlFinalDelArray(array, elemento) {
   
   array.push(elemento);

    // Retorna el arreglo actualizado
    return array;
// Agrega el "elemento" al final del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
}

function agregarItemAlComienzoDelArray(array, elemento) {
   array.unshift(elemento);

    // Retorna el arreglo actualizado
    return array;
   // Agrega el "elemento" al comienzo del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
}

function dePalabrasAFrase(palabras) {
   
   if (!Array.isArray(palabras)) {
      throw new Error('El argumento debe ser un arreglo de strings');
    }
  
    // Utilizamos el método join para concatenar las palabras con un espacio entre ellas
    return palabras.join(' ');
  
   // El argumento "palabras" es un arreglo de strings.
   // Retornar un string donde todas las palabras estén concatenadas
   // con un espacio entre cada palabra.
   // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'.
   // Tu código:
}

function arrayContiene(array, elemento) {
   if (!Array.isArray(array)) {
      throw new Error('El primer argumento debe ser un arreglo');
    }
  
    // Utilizamos el método includes para verificar la existencia del elemento en el arreglo
    return array.includes(elemento);// Verifica si el elemento existe dentro del arreglo recibido.
   // Retornar true si está, o false si no está.
   // Tu código:
}

function agregarNumeros(arrayOfNums) {
   
   if (!Array.isArray(arrayOfNums)) {
      throw new Error('El parámetro debe ser un arreglo de números');
    }
  
    // Verificamos que todos los elementos del arreglo sean números
    if (!arrayOfNums.every((num) => typeof num === 'number')) {
      throw new Error('Todos los elementos del arreglo deben ser números');
    }
  
    // Utilizamos el método reduce para sumar todos los elementos
    const suma = arrayOfNums.reduce((total, num) => total + num, 0);
  
    return suma;
   // El parámetro "arrayOfNums" debe ser un arreglo de números.
   // Suma todos los elementos y retorna el resultado.
   // Tu código:
}

function promedioResultadosTest(resultadosTest) {
   
      if (!Array.isArray(resultadosTest)) {
        throw new Error('El parámetro debe ser un arreglo de números');
      }
    
      // Verificamos que todos los elementos del arreglo sean números
      if (!resultadosTest.every((nota) => typeof nota === 'number')) {
        throw new Error('Todos los elementos del arreglo deben ser números');
      }
    
      // Si el arreglo está vacío, retornamos 0 para evitar dividir por 0
      if (resultadosTest.length === 0) {
        return 0;
      }
    
      let suma = 0;
    
      // Utilizamos un bucle para sumar todos los elementos del arreglo
      for (let i = 0; i < resultadosTest.length; i++) {
        suma += resultadosTest[i];
      }
    
      // Calculamos el promedio dividiendo la suma por la cantidad de elementos
      const promedio = suma / resultadosTest.length;
    
      return promedio;
    
  // El parámetro "resultadosTest" es un arreglo de números.
   // Itera (en un bucle) los elementos del arreglo y devuelve el promedio de las notas.
   // Tu código:
}

function numeroMasGrande(arrayOfNums) {
   if (!Array.isArray(arrayOfNums)) {
      throw new Error('El parámetro debe ser un arreglo de números');
    }
  
    // Verificamos que todos los elementos del arreglo sean números
    if (!arrayOfNums.every((num) => typeof num === 'number')) {
      throw new Error('Todos los elementos del arreglo deben ser números');
    }
  
    // Si el arreglo está vacío, lanzamos un error
    if (arrayOfNums.length === 0) {
      throw new Error('El arreglo no puede estar vacío');
    }
  
    // Utilizamos el método Math.max para encontrar el número más grande
    const numeroMasGrande = Math.max(...arrayOfNums);
  
    return numeroMasGrande;
    // El parámetro "arrayOfNums" es un arreglo de números.
   // Retornar el número más grande.
   // Tu código:
}

function multiplicarArgumentos() {
   if (arguments.length === 0) {
      return 0;
    }
  
    // Si se pasa un solo argumento, simplemente lo retornamos
    if (arguments.length === 1) {
      return arguments[0];
    }
  
    // Utilizamos reduce para multiplicar todos los argumentos
    const producto = Array.from(arguments).reduce((total, num) => total * num, 1);
  
    return producto;
   // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
   // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
   // [PISTA]: "arguments" es un arreglo.
   // Tu código:
}

function cuentoElementos(array) {
   if (!Array.isArray(array)) {
      throw new Error('El parámetro debe ser un arreglo');
    }
  
    // Utilizamos filter para obtener los elementos mayores que 18 y luego obtenemos la longitud del resultado
    const elementosMayoresQue18 = array.filter((elemento) => elemento > 18);
    const cantidad = elementosMayoresQue18.length;
  
    return cantidad;// Desarrolla una función que retorne la cantidad de elementos del arreglo cuyo valor sea mayor que 18.
   // Tu código:
}

function diaDeLaSemana(numeroDeDia) {
   
   // Verificamos si el parámetro no es un número o está fuera del rango de 1 a 7
  if (typeof numeroDeDia !== 'number' || numeroDeDia < 1 || numeroDeDia > 7) {
   throw new Error('El parámetro debe ser un número del 1 al 7');
 }

 // Verificamos si el número corresponde a un fin de semana (Sábado o Domingo)
 if (numeroDeDia === 1 || numeroDeDia === 7) {
   return 'Es fin de semana';
 } else {
   return 'Es dia laboral';
 }
   
   
   // Supongamos que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente.
   // Realiza una función que, dado el número del día de la semana, retorne: "Es fin de semana"
   // si el día corresponde a "Sábado" o "Domingo", y "Es dia laboral" en caso contrario.
   // Tu código:
}

function empiezaConNueve(num) {
   // Verificamos si el parámetro es un número entero
   
   if (!Number.isInteger(num)) {
      throw new Error('El parámetro debe ser un número entero');
    }
  
    // Convertimos el número a string para verificar el primer dígito
    const numStr = num.toString();
  
    // Verificamos si el primer dígito es 9
    return numStr.charAt(0) === '9';
  }

function todosIguales(array) {
   // Verificamos si el parámetro es un arreglo
  if (!Array.isArray(array)) {
   throw new Error('El parámetro debe ser un arreglo');
 }

 // Si el arreglo tiene 0 o 1 elementos, todos son iguales por definición
 if (array.length <= 1) {
   return true;
 }

 // Comparamos todos los elementos del arreglo con el primer elemento
 const primerElemento = array[0];
 return array.every(elemento => elemento === primerElemento);
   
   
   // Si todos los elementos del arreglo son iguales, retornar true.
   // Caso contrario retornar false.
   // Tu código:
}

function mesesDelAño(array) {
      const mesesPedido = array.filter(mes => mes === "Enero" || mes === "Marzo" || mes === "Noviembre");
    
      if (mesesPedido.length === 3) {
        return mesesPedido;
      } else {
        return "No se encontraron los meses pedidos";
      }// El arreglo contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
   // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
   // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
   // Tu código:
}

function tablaDelSeis() {
   const resultados = [];
  for (let i = 0; i <= 10; i++) {
    resultados.push(6 * i);
  }
  return resultados;// Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
   // La función devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
   // Tu código:
}

function mayorACien(array) {
   
    return array.filter(num => num > 100);
    // La función recibe un arreglo con enteros entre 0 y 200.
   // Recorrerlo y retornar un arreglo con todos los valores mayores a 100 (no incluye el 100).
   // Tu código:
}

/* ----------------------------------------------------------------------------------
💪 EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT  EXTRA CREDIT 💪
-------------------------------------------------------------------------------------*/

function breakStatement(num) {
   const resultados = [];
  for (let i = 1; i <= 10; i++) {
    num += 2;
    if (num === i) {
      return "Se interrumpió la ejecución";
    }
    resultados.push(num);
  }
  return resultados;// Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un arreglo y retornarlo.
   // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse
   // la ejecución y retornar el string: "Se interrumpió la ejecución".
   // [PISTA]: utiliza el statement 'break'.
   // Tu código:
}

function continueStatement(num) {
   const resultados = [];
   for (let i = 1; i <= 10; i++) {
     if (i === 5) {
       continue;
     }
     num += 2;
     resultados.push(num);
   }
   return resultados;
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un array y retornarlo.
   // Cuando el número de iteraciones alcance el valor 5, no se suma ese caso y
   // se continua con la siguiente iteración.
   // [PISTA]: utiliza el statement 'continue'.
   // Tu código:
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   devolverPrimerElemento,
   devolverUltimoElemento,
   obtenerLargoDelArray,
   incrementarPorUno,
   agregarItemAlFinalDelArray,
   agregarItemAlComienzoDelArray,
   dePalabrasAFrase,
   arrayContiene,
   agregarNumeros,
   promedioResultadosTest,
   numeroMasGrande,
   multiplicarArgumentos,
   cuentoElementos,
   diaDeLaSemana,
   empiezaConNueve,
   todosIguales,
   mesesDelAño,
   tablaDelSeis,
   mayorACien,
   breakStatement,
   continueStatement,
};
