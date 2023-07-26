let contadorCaracter = 0;
let contadorNumeros = 0;
let contadorPalabras = 0;
let sumaNumeros = 0;
let contadorNoEspacios = 0;
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
    contadorCaracter++;
    return contadorCaracter;
  },
  getCharacterCountExcludingSpaces: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres excluyendo espacios y signos de puntuación que se encuentran en el parámetro `text` de tipo `string`.
    if(/[.,/#!$%\^&\*;:{}=\-_`~()]/.text || /\s/.text){
      contadorNoEspacios++;
      return contadorNoEspacios;
    }else{
      return contadorNoEspacios;
    }
  },
  getAverageWordLength: (text) => {    
    //TODO: esta función debe retornar la longitud media de palabras que se encuentran en el parámetro `text` de tipo `string`.
  },
  getNumberCount: (text) => {
    //TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.
    //for(let i = 0; i < text.length; i++){
    //if((text.charCodeAt(i) >= 48 && text.charCodeAt(i) <= 57)){
    if(!isNaN(text)){
      contadorNumeros++;
      return contadorNumeros;
    }
    else{
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
  }
};

export default analyzer;
