Analizador de texto

## Índice
* [1. Consideraciones generales](#1-consideraciones-generales)
* [2. Funcionalidades](#2-funcionalidaes)
* [3. Boiler-Plate](#3-boilerPlat)
* [4. Desarrollo](#4-desarrollo)

## 1. Consideraciones generales

* Este proyecto lo realicé por individual.
* Me tomé 3 sprints para completarlo.

## 2. Funcionalidades
Es un analizador gratuito para brindar información básica de la estructura de un texto, bajo las siguientes métricas
*Recuento de palabras
*Recuento de caracteres
*Recuento de caracteres excluyendo espacios y signos
*Recuento de números
*Suma total de los numeros
*Longitud media de las palabras.

*La página web está conformada por un área de texto, los cálculos se muestran en tiempo real y en los espacios indicados a medida que se escribe el texto.
*Tiene un botón LIMPIAR para reiniciar los cálculos de las métricas y limpiar el área.

## 3. Boilerplate

Está realizado en JavaScript puro (Vanilla JavaScript), HTML y CSS, con el siguiente boilerplate:
./
├── .babelrc
├── .editorconfig
├── .eslintrc
├── .gitignore
├── README.md
├── package.json
├── src
│   ├── analyzer.js
│   ├── index.html
│   ├── index.js
│   └── style.css
└── test
    ├── .eslintrc
    └── analyzer.spec.js

### Descripción de scripts / archivos

* `README.md`: debes modificarlo para explicar la información necesaria para el
  uso de tu aplicación
  web, así como una introducción a la aplicación, su funcionalidad y decisiones
  de diseño que tomaron.
* `.github/workflows`: esta carpeta contine la configuracion para la ejecution
  de Github Actions.
* `docs/images`: contiene las imagenes de este README.
* `read-only/`: esta carpeta contiene las pruebas de criterios mínimos de
  aceptación y end-to-end.
 
* [`src/index.html`](./src/index.html): este es el punto de entrada de la aplicación
* [`src/style.css`](./src/style.css): este archivo contiiene las reglas de estilo.
* [`src/analyzer.js`](./src/analyzer.js): implementación del objeto
  `analyzer`. Este objeto (`analyzer`) contiene los siguientes métodos:
  - `analyzer.getWordCount(text)`: retorna el recuento de palabras que se encuentran en el parámetro `text`.
  - `analyzer.getCharacterCount(text)`: retorna el recuento de caracteres que se encuentran en el parámetro `text`.
  - `analyzer.getCharacterCountExcludingSpaces(text)`: esta función retorna el número de caracteres excluyendo espacios que
se encuentran en el parámetro `text`.
  - `analyzer.getNumberCount(text)`: retorna cuántos números se detectan en el parámetro `text`.
  - `analyzer.getNumberSum(text)`: función que retorna la suma de los números encontrados en el parámetro `text`.
  - `analyzer.getAverageWordLength(text)`: retorna la longitud media de palabras que se encuentran en el parámetro `text`.
  En este caso usa 2 dígitos decimales.
  - `inicializarContadores`: función que se invoca al presionar el botón de LIMPIAR y reinicia a 0 los contadores de las métricas.
* [`src/index.js`](./src/index.js): escucha los eventos del DOM,invoca las funciones.
* [`test/analyzer.spec.js`](./test/analyzer.spec.js): este archivo contiene las
pruebas unitarias para los métodos del objeto `analyzer`.

## 4. Desarrollo
*Empecé con la configuración de GitHub y VSCode.
*Leí acerca de los usos de analizadores de texto y los ámbitos dónde se utilizan para poder decidir el diseño de la aplicación.
*Realicé un boceto del HTML, para saber la distribución de los elementos.
*Implementé el diseño de HTML junto con la inforamción e hice los estilos de CSS.
*Me documenté sobre información técnica de CSS (box model, REM/EM, atributos.
*Me metí de lleno a Javascript, dando funcionamiento al botón y capturar el texto del areatext
