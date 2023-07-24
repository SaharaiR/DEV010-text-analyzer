import analyzer from './analyzer.js';

//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`
const textoEscrito = document.querySelector('user-input');//LIGA AL TEXTAREA
const btnLimpiar = document.getElementById('btnLimpiar');//LIGA AL BOTON PARA REINICIAR METRICAS Y TEXTO
//const resultadoCaracterContador = analyzer.getCharacterCount(textoEscrito.value);

textoEscrito.addEventListener('keyup', function(){
  //DETECTA EL TEXTO AL ESCRIBIRLO HAY QUE ENVIAR EL TEXTO A CADA FUNCION

  //Recuento de caracteres: 0; data-testid="character-count
  const resultadoCaracterContador = analyzer.getCharacterCount(textoEscrito.value);
  document.querySelector('[data-testid="character-count"]').innerHTML = 'Recuento de caracteres: ' + resultadoCaracterContador;

  analyzer.getCharacterCountExcludingSpaces(textoEscrito.value);

  analyzer.getAverageWordLength(textoEscrito.value);

  //Recuento de números: 0; data-testid="number-count
  const resultadoContadorNum = analyzer.getNumberCount(textoEscrito.value);
  document.querySelector('[data-testid="number-count"]').innerHTML = 'Recuento de números: ' + resultadoContadorNum;

  analyzer.getNumberSum(textoEscrito.value);
});

btnLimpiar.addEventListener('click', function(){
  //REINICIAR METRICAS Y TEXT AREA
  textoEscrito.value = " ";
  document.querySelector('[data-testid="word-count"]').innerHTML = 'Recuento de palabras: 0'
  document.querySelector('[data-testid="character-count"]').innerHTML = 'Recuento de caracteres: 0';
  document.querySelector('[data-testid="character-no-spaces-count"]').innerHTML = 'Recuento de caracteres excluyendo espacios y signos: 0';
  document.querySelector('[data-testid="number-count"]').innerHTML = 'Recuento de números: 0';
  document.querySelector('[data-testid="number-sum"]').innerHTML = 'Suma total de los números: 0';
  document.querySelector('[data-testid="word-length-average"]').innerHTML = 'Longitud media de las palabras: 0';
});