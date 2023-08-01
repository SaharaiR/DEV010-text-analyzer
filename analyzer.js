let contadorCaracter = 0;
let contadorNumeros = 0;
let contadorPalabras = 0;
let sumaNumeros = 0;
let contadorNoEspacios = 0;
let promedioPalabra = 0;
const analyzer = {
  getWordCount: (text) => {
    //TODO: esta función debe retornar el recuento de palabras que se encuentran en el parámetro `text` de tipo `string`.
    contadorPalabras = text.split(/\s+/).length;
    //contadorPalabras = contadorPalabras - 1;
    return contadorPalabras;
  },
  getCharacterCount: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres que se encuentran en el parámetro `text` de tipo `string`.
    contadorCaracter = text.length;
    return contadorCaracter;
  },
  getCharacterCountExcludingSpaces: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres excluyendo espacios y signos de puntuación que se encuentran en el parámetro `text` de tipo `string`.
    //contadorNoEspacios = text.replac
    const textSinEspacio = text.replace(/\s|[.,/#!$%^&*;:{}=\-_`~()]/g,'');
    contadorNoEspacios = textSinEspacio.length;
    return contadorNoEspacios;
  },
  getAverageWordLength: (text) => {    
    //TODO: esta función debe retornar la longitud media de palabras que se encuentran en el parámetro `text` de tipo `string`.
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
    const numeros = text.match(/\b\d+(\.\d+)?\b/g);
    //const sum = arr.reduce((a, b) => a + parseInt(b), 0);
    if(numeros === null){
      return 0;
    }else{
      sumaNumeros = numeros.reduce((numeroAnterior, numeroActual) => numeroAnterior + parseFloat(numeroActual),0);
      return parseFloat(sumaNumeros.toFixed(2),0);
    }
  },
  inicializarContadores: function () {
    contadorNumeros = 0;
    contadorCaracter = 0;
    sumaNumeros = 0;
    contadorNoEspacios = 0;
    contadorPalabras = 0;
    promedioPalabra = 0;
  }
};

export default analyzer;
