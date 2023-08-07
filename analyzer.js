//Declaracion de contadores
let contadorCaracter = 0;
let contadorNumeros = 0;
let contadorPalabras = 0;
let sumaNumeros = 0;
let contadorNoEspacios = 0;
let promedioPalabra = 0;
const analyzer = {
  getWordCount: (text) => {
    //TODO: esta función debe retornar el recuento de palabras que se encuentran en el parámetro `text` de tipo `string`.
    /*Separamos el texto captado del textArea con el método SPLIT e indicando con expresion regular
    los espacios, retorna la longitud cada vez que se encuentra el espacio*/
    /*Explicación de la expresión regular:
    // -> Inicio y fin de la expresión regular
    \s -> Encuentra los espacios
    + -> Uno o más que el anterior*/
    contadorPalabras = text.split(/\s+/).length;
    return contadorPalabras;
  },
  getCharacterCount: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres que se encuentran en el parámetro `text` de tipo `string`.
    /*Regresa la longitud de todo el texto captado en el textArea*/
    contadorCaracter = text.length;
    return contadorCaracter;
  },
  getCharacterCountExcludingSpaces: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres excluyendo espacios y signos de puntuación que se encuentran en el parámetro `text` de tipo `string`.
    /*Con el método REPLACE y la expresión regular para reemplazar todos los espacios y signos de puntuación
    por '' (nada, jeje) para dejar los puros caracteres y regresar la longitud o sea el numero de caracteres*/
    const textSinEspacio = text.replace(/\s|[.,/#!$%^&*;:{}=\-_`~()]/g,'');
    contadorNoEspacios = textSinEspacio.length;
    return contadorNoEspacios;
  },
  getAverageWordLength: (text) => {    
    //TODO: esta función debe retornar la longitud media de palabras que se encuentran en el parámetro `text` de tipo `string`.
    /*Primero separamos las palabras y se guardan en cada posicion, lo recorremos con el for para
    obtener la longitud de cada palabra, y para obtener el promedio dividimos la longitud entre 
    el numero de palabras, regresamos el resultado convirtiendo a flotante y redondeando a 2 decimales */
    const palabras = text.split(/\s+/);
    let longitud = 0;
    for(let i = 0; i < palabras.length; i++){
      longitud += palabras[i].length;
      promedioPalabra = longitud/palabras.length;
    }
    return parseFloat(promedioPalabra.toFixed(2),0);
  },
  getNumberCount: (text) => {
    //TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.
    //const posibleNumero = text.match(/\d+\.\d+/g);
    //const posibleNumero = text.match(/\d+\.\d+|\d+/g);
    /*con el método MATCH y la expresion regular, encontramos todos los numeros enteros, decimales
    descarta no-numeros, si no hay coincidencia con la expresión regular retornamos 0, si hay
    coincidencia retornamos cuantos numeros encontro */
    /*Explicación de la expresión regular:
    \b -> Aseguar que recorrerá toda la cadena para encontrar los numeros posibles
    d+ -> Coincide uno o más dígitos
    () -> Detecta un grupo (que viene siendo los decimales)
    \.\d+ -> Detecta los decimales
    ? -> Indica que el token anterior puede ser opcional
    /g -> "Bandera globlal" Hace que encuentré todas las posibles coincidencias*/
    const posibleNumero = text.match(/\b\d+(\.\d+)?\b/g);
    if(posibleNumero === null){
      return 0;
    }else{
      contadorNumeros = posibleNumero.length;
      return contadorNumeros;
    }
  },
  getNumberSum: (text) => {
    //TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.
    //const numeros = text.match(/\d+\.\d+/g);
    //const numeros = text.match(/^\d*\.?\d+$/);
    /*Con la misma expresión regular y método MATCH encontramos los numeros posibles, y utilizamos
    el método REDUCE para hacer las sumas de los números encontrados, conviritiendo a float por si
    encuentra números decimales, regresamos el valor de la suma */
    const numeros = text.match(/\b\d+(\.\d+)?\b/g);
    //ejemplo de reduce: const sum = arr.reduce((a, b) => a + parseInt(b), 0);
    /*lo que yo entiendo de reduce ARRAYaREDUCIR.(valorAcumulado, valorNuevo => valorAcumulado +
      numeroActual(por eso ESTE hay que convertirlo)) */
    if(numeros === null){
      return 0;
    }else{
      sumaNumeros = numeros.reduce((numeroAnterior, numeroActual) => numeroAnterior + parseFloat(numeroActual),0);
      return parseFloat(sumaNumeros.toFixed(2),0);
    }
  },
  inicializarContadores: function () {
    /*Al presionar el botón LIMPIAR regresamos los contadores a 0 */
    contadorNumeros = 0;
    contadorCaracter = 0;
    sumaNumeros = 0;
    contadorNoEspacios = 0;
    contadorPalabras = 0;
    promedioPalabra = 0;
  }
};

export default analyzer;
