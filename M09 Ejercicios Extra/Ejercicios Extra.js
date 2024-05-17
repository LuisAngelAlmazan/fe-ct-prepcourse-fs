/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
function deObjetoAarray(objeto) {
   var arregloResultado = [];

   // Iterar sobre las claves del objeto
   for (var clave in objeto) {
       // Verificar si la clave realmente pertenece al objeto y no a su prototipo
       if (objeto.hasOwnProperty(clave)) {
           // Crear un nuevo arreglo con la clave y su valor, luego agregarlo al arreglo resultado
           arregloResultado.push([clave, objeto[clave]]);
       }
   }

   return arregloResultado;
}

function numberOfCharacters(string) {
   var contadorLetras = {};

   // Recorrer el string
   for (var i = 0; i < string.length; i++) {
       var letra = string[i];

       // Verificar si la letra es un carácter alfabético
       if (/[a-zA-Z]/.test(letra)) {
           letra = letra.toLowerCase(); // Convertir la letra a minúscula para evitar diferencias entre mayúsculas y minúsculas

           // Verificar si la letra ya está en el contador
           if (contadorLetras.hasOwnProperty(letra)) {
               // Incrementar el contador si la letra ya existe en el objeto
               contadorLetras[letra]++;
           } else {
               // Si la letra no está en el contador, inicializar su contador en 1
               contadorLetras[letra] = 1;
           }
       }
   }

   // Ordenar el objeto por las claves (letras) alfabéticamente
   var letrasOrdenadas = Object.keys(contadorLetras).sort();
   var resultado = {};

   // Construir el objeto resultado con las letras ordenadas y sus respectivas cantidades
   letrasOrdenadas.forEach(function(letra) {
       resultado[letra] = contadorLetras[letra];
   });

   return resultado;
}
function capToFront(string) {
   var mayusculas = '';
   var minusculas = '';

   // Recorrer el string para separar las letras mayúsculas y minúsculas
   for (var i = 0; i < string.length; i++) {
       if (string[i] === string[i].toUpperCase()) {
           mayusculas += string[i];
       } else {
           minusculas += string[i];
       }
   }

   // Devolver las letras mayúsculas seguidas de las minúsculas
   return mayusculas + minusculas;
}

function asAmirror(frase) {
   // Dividir la frase en palabras
   var palabras = frase.split(' ');

   // Invertir cada palabra
   var palabrasInvertidas = palabras.map(function(palabra) {
       return palabra.split('').reverse().join('');
   });

   // Unir las palabras invertidas en un nuevo string
   var resultado = palabrasInvertidas.join(' ');

   return resultado;
}

function capicua(numero) {
   // Convertir el número a string
   var numeroStr = numero.toString();
   // Invertir el string
   var numeroInvertido = numeroStr.split('').reverse().join('');
   
   // Comparar el número original con el número invertido
   if (numeroStr === numeroInvertido) {
       return "Es capicua";
   } else {
       return "No es capicua";
   }
}

function deleteAbc(string) {
   // Utilizar replace() con una expresión regular para eliminar las letras "a", "b" y "c"
   var nuevoString = string.replace(/[abc]/g, '');

   return nuevoString;
}

function sortArray(arrayOfStrings) {
   // Utilizar sort() con una función de comparación personalizada
   var newArray = arrayOfStrings.slice(); // Crear una copia del arreglo para no modificar el original
   newArray.sort(function(a, b) {
       // Comparar las longitudes de los strings a y b
       return a.length - b.length;
   });

   return newArray;
}


function buscoInterseccion(array1, array2) {
   // Filtrar los elementos del primer arreglo que están presentes en el segundo arreglo
   var interseccion = array1.filter(function(elemento) {
       return array2.includes(elemento);
   });

   return interseccion;
}


/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   deObjetoAarray,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};
