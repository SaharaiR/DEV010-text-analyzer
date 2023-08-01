# Analizador de texto

## Índice

<<<<<<< HEAD
* [1. Consideraciones generales](#1-consideraciones-generales)
* [2. Preámbulo](#2-preámbulo)
* [3. Funcionalidades](#3-funcionalidades)
* [6. Pruebas](#6-pruebas)
=======

>>>>>>> 10d107941b667ef6e139991519092898827d2637

***

## 1. Consideraciones generales

<<<<<<< HEAD
* Este proyecto lo realicé .
* El rango de tiempo estimado para completar el proyecto es de 1 a 3 Sprints.
* Enfócate en aprender y no solamente en "completar" el proyecto.
* Te sugerimos que no intentes saberlo todo antes de empezar a codear.
  No te preocupes demasiado ahora por lo que _todavía_ no entiendas.
  Irás aprendiendo.
=======
*Es un analizador gratuito para brindar información básica de la estructura de un texto, bajo las siguientes métricas
*Recuento de palabras
*Recuento de caracteres
*Recuento de caracteres excluyendo espacios y signos
*Recuento de números
*Suma total de los numeros
*Longitud media de las palabras.
      Escribir en el área de texto, el texto a analizar.<br> Los cálculos se muestran en tiempo real, en los
      espacios indicados a medida que se escribe el texto.<br>
      Para reiniciar los cálculos de la métrica y limpiar el área de texto presiona el botón LIMPIAR.
>>>>>>> 10d107941b667ef6e139991519092898827d2637

## 2. Funcionalidades
*La página web está conformada por un área de texto, los cálculos se muestran en tiempo real y en los espacios indicados a medida que se escribe el texto.
*Tiene un botón LIMPIAR para reiniciar los cálculos de las métricas y limpiar el área.

## 4. Boilerplate

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
```

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

## 5. Desarrollo
Empecé con la configuración de Github y mucha lectura acerca de diferentes temas técnicos
