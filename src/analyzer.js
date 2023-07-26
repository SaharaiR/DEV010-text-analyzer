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
    contadorPalabras = contadorPalabras - 1;
    return contadorPalabras;
  },
  getCharacterCount: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres que se encuentran en el parámetro `text` de tipo `string`.
    //contadorCaracter = text.trim();
    //contadorCaracter++;
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
      return promedioPalabra.toFixed(2);
    }
    
  },
  getNumberCount: (text) => {
    //TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.
    //for(let i = 0; i < text.length; i++){
    //if((text.charCodeAt(i) >= 48 && text.charCodeAt(i) <= 57)){
    if(isNaN(text) || text === " "){
      return contadorNumeros;
    }
    else{
      contadorNumeros++;
      return contadorNumeros;
    }
    //}
  },
  getNumberSum: (text) => {
    //TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.
    let numero = 0;
    if(isNaN(text) || text === " "){
      return sumaNumeros;
    }else{
      numero = parseInt(text,10);
      sumaNumeros += numero;
      return sumaNumeros;
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
