import analyzer from './analyzer.js';

//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`
const textoEscrito = document.querySelector('textarea');//LIGA AL TEXTAREA
const btnLimpiar = document.getElementById('reset-button');//LIGA AL BOTON PARA REINICIAR METRICAS Y TEXTO
//const resultadoCaracterContador = analyzer.getCharacterCount(textoEscrito.value);

textoEscrito.addEventListener('keyup', function(){
  //DETECTA EL TEXTO AL ESCRIBIRLO HAY QUE ENVIAR EL TEXTO A CADA FUNCION
  
  //Recuento de palabras: 0; data-testid="word-count"
  const resultadoPalabras = analyzer.getWordCount(textoEscrito.value);
  document.querySelector('[data-testid="word-count"]').innerHTML = 'Recuento de palabras: ' + resultadoPalabras;

  //Recuento de caracteres: 0; data-testid="character-count
  const resultadoCaracterContador = analyzer.getCharacterCount(textoEscrito.value);
  //const resultadoCaracterContador = analyzer.getCharacterCount(event.key);
  document.querySelector('[data-testid="character-count"]').innerHTML = 'Recuento de caracteres: ' + resultadoCaracterContador;

  //Recuento de caracteres excluyendo espacios y signos: 0; data-testid="character-no-spaces-count"
  //analyzer.getCharacterCountExcludingSpaces(textoEscrito.value);
  const resultadoNoEspacios = analyzer.getCharacterCountExcludingSpaces(textoEscrito.value);
  //const resultadoNoEspacios = analyzer.getCharacterCountExcludingSpaces(event.key);
  document.querySelector('[data-testid="character-no-spaces-count"]').innerHTML = 'Recuento de caracteres excluyendo espacios y signos: ' + resultadoNoEspacios;

  //analyzer.getAverageWordLength(textoEscrito.value);
  //Longitud media de las palabras: 0; data-testid="word-length-average";
  const resultadoPalabraProm = analyzer.getAverageWordLength(textoEscrito.value);
  document.querySelector('[data-testid="word-length-average"]').innerHTML = 'Longitud media de las palabras: ' + resultadoPalabraProm;

  //Recuento de números: 0; data-testid="number-count
  const resultadoContadorNum = analyzer.getNumberCount(textoEscrito.value);
  document.querySelector('li[data-testid="number-count"]').innerHTML = 'Números: ' + resultadoContadorNum;

  const resultadoSuma = analyzer.getNumberSum(textoEscrito.value);
  document.querySelector('li[data-testid="number-sum"]').innerHTML = 'Suma números: ' + resultadoSuma;
});

btnLimpiar.addEventListener('click', function(){
  //REINICIAR METRICAS Y TEXT AREA
  textoEscrito.value = "";
  analyzer.inicializarContadores();
  document.querySelector('[data-testid="word-count"]').innerHTML = 'Recuento de palabras: 0'
  document.querySelector('[data-testid="character-count"]').innerHTML = 'Recuento de caracteres: 0';
  document.querySelector('[data-testid="character-no-spaces-count"]').innerHTML = 'Recuento de caracteres excluyendo espacios y signos: 0';
  document.querySelector('[data-testid="number-count"]').innerHTML = 'Números: 0';
  document.querySelector('[data-testid="number-sum"]').innerHTML = 'Suma números: 0';
  document.querySelector('[data-testid="word-length-average"]').innerHTML = 'Longitud media de las palabras: 0';
});