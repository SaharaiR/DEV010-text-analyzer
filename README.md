# Analizador de texto

## Índice

* [1. Analizador de texto
* [2. Contribuciones
* [3. Funcionalidades](#3-funcionalidades)
* [4. Boilerplate](#4-boilerplate)
* [5. Criterios de aceptación mínimos del proyecto](#5-criterios-de-aceptación-mínimos-del-proyecto)
* [6. Pruebas](#6-pruebas)
* [7. Pistas, tips y lecturas complementarias](#7-pistas-tips-y-lecturas-complementarias)
* [8. Consideraciones para pedir tu Project Feedback](#8-consideraciones-para-pedir-tu-project-feedback)
* [9. Objetivos de aprendizaje](#9-objetivos-de-aprendizaje)
* [10. Funcionalidades opcionales](#10-funcionalidades-opcionales)

***

## 1. Consideraciones generales

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

## 3. Funcionalidades
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

***

#### Deploy

Hacer que los sitios estén publicados (o _desplegados_) para que usuarias de
la web puedan acceder a él es algo común en proyectos de desarrollo de software.

En este proyecto, utilizaremos _Github Pages_ para desplegar nuestro sitio web.

El comando `npm run deploy` puede ayudarte con esta tarea y también puedes
 consultar su [documentación oficial](https://docs.github.com/es/pages).

## 5. Desarrollo


### Control de Versiones (Git y GitHub)

* **GitHub: Creación de cuenta y repos, configuración de llaves SSH**

  - [ ] La estudiante creó una cuenta en Github.

  - [ ] La estudiante configuró su cuenta de Github con una llave SSH.

* **Git: Control de versiones con git (clone, add, commit, push)**

  - [ ] La estudiante creó un _fork_ para su proyecto.

  - [ ] La estudiante clonó su repositorio usando una llave SSH.

  - [ ] La estudiante creó _commits_ y los guardó en Github.

* **GitHub: Despliegue con GitHub Pages**

  - [ ] La aplicación está desplegada en Github Pages.

### Centrado en el usuario

* **Diseñar y desarrollar un producto o servicio poniendo a las
usuarias en el centro**

### Diseño de producto

* **Diseñar en distintos niveles de fidelidad**

  - [ ] La estudiante creó prototipos de baja fidelidad para la UI (interfaz gŕafica).

* **Seguir los principios básicos de diseño visual**

  - [ ] Se tuvieron en cuenta las reglas básica del
  [diseño visual](https://coda.io/d/Bootcamp-UX-Contenido_dqkqk2rV9Z2/Reglas-basicas-de-diseno-visual_suVcO)
  para diseñar la UI (interfáz gráfica)

## 6. Pruebas

Este proyecto cuenta con 3 conjuntos de pruebas que te ayudarán a conocer si
cumples los criterios mínimos de aceptación.

### Pruebas unitarias

Una prueba unitaria es una técnica de prueba de software en la que se comprueba
que cada componente individual de un programa o sistema funciona correctamente
de manera aislada. En otras palabras, se prueba cada unidad de código por
separado para asegurarse de que cumpla con los requisitos y especificaciones.

Las pruebas unitarias de este proyecto ejecutarán los métodos `getWordCount`,
`getCharacterCount`, `getCharacterCountExcludingSpaces`, `getNumbersCount`,
`getNumbersSum` y `getAverageWordLength` con diferentes argumentos y se
confirmará que los valores retornados sean los esperados.

Puedes ejecutar estas pruebas con el comando `npm run test` como se muestra
en la siguiente imagen:

![npm run test](https://github-production-user-asset-6210df.s3.amazonaws.com/12631491/240650584-c8267968-d631-4fbb-b05f-458a970544b7.gif "npm run test")

El _boilerplate_ incluye tareas que ejecutan [eslint](https://eslint.org/) y
[htmlhint](https://github.com/yaniswang/HTMLHint) para verificar el `HTML` y
`JavaScript` con respecto a una guías de estilos. Ambas tareas se ejecutan
automáticamente antes de ejecutar las pruebas unitarias cuando usamos el comando
`npm run test`. En el caso de `JavaScript` estamos usando un archivo de
configuración de `eslint` que se llama `.eslintrc` que contiene un mínimo de
información sobre el parser que usar (qué version de JavaScript/ECMAScript), el
entorno (browser en este caso) y
las [reglas recomendadas (`eslint:recommended`)](https://eslint.org/docs/rules/).
En cuanto a reglas/guías de estilo en sí,
usaremos las recomendaciones _por defecto_ de tanto `eslint` como `htmlhint`.

### Pruebas de criterios mínimos de aceptación

Estas pruebas analizarán tus archivos
[`index.html`](src/index.html),
[`index.js`](src/index.html),
[`analyzer.js`](src/analyzer.js)
y
[`style.css`](src/style.css)
para verificar que cumples con los
[criterios minimos de aceptacion](#5-objetivos-de-aprendizaje-y-criterios-de-aceptación-mínimos-del-proyecto).
Cada criterio esta relacionado con un objetivo de aprendizaje.

Puedes ejecutar todas estas pruebas con el comando `npm run test:oas`
como se muestra en la siguiente imagen:

![npm run test oas](https://github-production-user-asset-6210df.s3.amazonaws.com/12631491/240650602-f0ca9170-7563-4edc-9e78-874fa012c4fd.gif "npm run test oas")

Puedes ejecutar las pruebas de cada grupo de objetivos de aprendizaje de
manera individual con los siguientes comandos:

* `npm run test:oas-html`
* `npm run test:oas-css`
* `npm run test:oas-web-api`
* `npm run test:oas-js`

#### Pruebas end-to-end

Una prueba end-to-end (E2E) es una técnica de prueba de software en la que
se verifica el funcionamiento de todo el sistema desde el inicio hasta el
final. En otras palabras, se prueba el flujo completo del software, simulando
la interacción del usuario con la aplicación, para asegurarse de que todas las
partes del sistema funcionan correctamente en conjunto.

Puedes ejecutar estas pruebas con el comando `npm run test:e2e` como se muestra
en la siguiente imagen:

![npm run test e2e](https://github-production-user-asset-6210df.s3.amazonaws.com/12631491/240650622-a4da630e-8d39-4dd8-9fde-1a38c31a53e2.gif "npm run test e2e")

### Github actions

Este repositorio usa una GitHub Action para ejecutar automáticamente
las pruebas unitarias, pruebas de criterios mínimos de aceptación y
y pruebas end-to-end cada vez que se hagas un _push_ en la rama
_main_ de tu repositorio.

Puedes consultar el resultado de esta Github Action
en la pestaña _Actions_ de tu repositorio en Github
como se muestra en la siguiente imagen:

![Github Action](https://github-production-user-asset-6210df.s3.amazonaws.com/12631491/240650640-a8a8ed26-6f48-4053-8b3b-7dec7e35a9f8.gif "Github Action")

## 7. Pistas, tips y lecturas complementarias

### Prepara tu PC para trabajar

Antes de comenzar instala lo siguiente:

1. [Node.js](https://nodejs.org/)
2. [git](https://git-scm.com/download/) Si estas en Linux es muy probable que
  ya este instalado 👀.
  Para conocer más de git visita
  [este enlace](https://curriculum.laboratoria.la/es/topics/scm/01-git)
3. Un editor de código, te sugerimos [Code](https://code.visualstudio.com/)

Después en [GitHub](https://github.com/):

1. Crear una cuenta. Conoce más de GitHub en este
  [link](https://curriculum.laboratoria.la/es/topics/scm/02-github/01-github)
2. Realiza un fork de este proyecto
3. Configura tu SSH Key  en GitHub. Puedes revisar este
[video](https://www.youtube.com/watch?v=g0ZV-neSM7E) o
[artículo](https://docs.github.com/es/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)

Luego en una [shell](https://curriculum.laboratoria.la/es/topics/shell)
ejecuta lo siguiente. Si estas en Windows puedes usar Git Bash:

1. Clona el fork en tu PC
2. Ubica la shell en el proyecto que clonaste
3. Instala las dependencias del proyecto con `npm install`
4. Instala `playwright` con `npx playwright install chromium --with-deps`
5. Para arrancar el servidor web `npm start` y dirígete a
   `http://localhost:3000` en tu navegador.
6. A codear se ha dicho! :rocket:

### Recursos y temas relacionados

Súmate al canal de Slack [#project-text-analyzer](https://claseslaboratoria.slack.com/archives/C058GP6K9NY)

## 8. Consideraciones para pedir tu Project Feedback

Antes de agendar tu Project Feedback con un coach, asegúrate que tu proyecto:

* [ ] Cumple con todos los criterios mínimos de aceptación al ejecutar `npm run test:oas`
* [ ] Cumple con todas las pruebas unitarias al ejecutar `npm run test`
* [ ] Cumple con todas las pruebas _end to end_ al ejecutar `npm run test:e2e`
* [ ] Esta libre de _errores_ de `eslint` al ejecutar `npm run test`
* [ ] Está subido a GitHub.
* [ ] Esta desplegado en GitHub Pages.
* [ ] Tiene un README con la definición del producto.

Recuerda que debes hacer una autoevaluación de _objetivos de aprendizaje_ y
_life skills_ desde tu dashboard de estudiante.

Si no has completado todo lo anterior, no consideramos que estás lista para
tu sesión de Project Feedback.

## 9. Objetivos de aprendizaje

Reflexiona y luego marca los objetivos que has llegado a entender y aplicar en tu proyecto. Piensa en eso al decidir tu estrategia de trabajo.

### HTML

- [ ] **Uso de HTML semántico**

  <details><summary>Links</summary><p>

  * [HTML semántico](https://curriculum.laboratoria.la/es/topics/html/02-html5/02-semantic-html)
  * [Semantics - MDN Web Docs Glossary](https://developer.mozilla.org/en-US/docs/Glossary/Semantics#Semantics_in_HTML)
</p></details>

### CSS

- [ ] **Uso de selectores de CSS**

  <details><summary>Links</summary><p>

  * [Intro a CSS](https://curriculum.laboratoria.la/es/topics/css/01-css/01-intro-css)
  * [CSS Selectors - MDN](https://developer.mozilla.org/es/docs/Web/CSS/CSS_Selectors)
</p></details>

- [ ] **Modelo de caja (box model): borde, margen, padding**

  <details><summary>Links</summary><p>

  * [Box Model & Display](https://curriculum.laboratoria.la/es/topics/css/01-css/02-boxmodel-and-display)
  * [The box model - MDN](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/The_box_model)
  * [Introduction to the CSS box model - MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model)
  * [CSS display - MDN](https://developer.mozilla.org/pt-BR/docs/Web/CSS/display)
  * [display - CSS Tricks](https://css-tricks.com/almanac/properties/d/display/)
</p></details>

### Web APIs

- [ ] **Uso de selectores del DOM**

  <details><summary>Links</summary><p>

  * [Manipulación del DOM](https://curriculum.laboratoria.la/es/topics/browser/02-dom/03-1-dom-methods-selection)
  * [Introducción al DOM - MDN](https://developer.mozilla.org/es/docs/Web/API/Document_Object_Model/Introduction)
  * [Localizando elementos DOM usando selectores - MDN](https://developer.mozilla.org/es/docs/Web/API/Document_object_model/Locating_DOM_elements_using_selectors)
</p></details>

- [ ] **Manejo de eventos del DOM (listeners, propagación, delegación)**

  <details><summary>Links</summary><p>

  * [Introducción a eventos - MDN](https://developer.mozilla.org/es/docs/Learn/JavaScript/Building_blocks/Events)
  * [EventTarget.addEventListener() - MDN](https://developer.mozilla.org/es/docs/Web/API/EventTarget/addEventListener)
  * [EventTarget.removeEventListener() - MDN](https://developer.mozilla.org/es/docs/Web/API/EventTarget/removeEventListener)
  * [El objeto Event](https://developer.mozilla.org/es/docs/Web/API/Event)
</p></details>

- [ ] **Manipulación dinámica del DOM**

  <details><summary>Links</summary><p>

  * [Introducción al DOM](https://developer.mozilla.org/es/docs/Web/API/Document_Object_Model/Introduction)
  * [Node.appendChild() - MDN](https://developer.mozilla.org/es/docs/Web/API/Node/appendChild)
  * [Document.createElement() - MDN](https://developer.mozilla.org/es/docs/Web/API/Document/createElement)
  * [Document.createTextNode()](https://developer.mozilla.org/es/docs/Web/API/Document/createTextNode)
  * [Element.innerHTML - MDN](https://developer.mozilla.org/es/docs/Web/API/Element/innerHTML)
  * [Node.textContent - MDN](https://developer.mozilla.org/es/docs/Web/API/Node/textContent)
</p></details>

### JavaScript

- [ ] **Tipos de datos primitivos**

  <details><summary>Links</summary><p>

  * [Valores primitivos - MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Data_structures#valores_primitivos)
</p></details>

- [ ] **Strings (cadenas de caracteres)**

  <details><summary>Links</summary><p>

  * [Strings](https://curriculum.laboratoria.la/es/topics/javascript/06-strings)
  * [String — Cadena de caracteres - MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String)
</p></details>

- [ ] **Variables (declaración, asignación, ámbito)**

  <details><summary>Links</summary><p>

  * [Valores, tipos de datos y operadores](https://curriculum.laboratoria.la/es/topics/javascript/01-basics/01-values-variables-and-types)
  * [Variables](https://curriculum.laboratoria.la/es/topics/javascript/01-basics/02-variables)
</p></details>

- [ ] **Uso de condicionales (if-else, switch, operador ternario, lógica booleana)**

  <details><summary>Links</summary><p>

  * [Estructuras condicionales y repetitivas](https://curriculum.laboratoria.la/es/topics/javascript/02-flow-control/01-conditionals-and-loops)
  * [Tomando decisiones en tu código — condicionales - MDN](https://developer.mozilla.org/es/docs/Learn/JavaScript/Building_blocks/conditionals)
</p></details>

- [ ] **Uso de bucles/ciclos (while, for, for..of)**

  <details><summary>Links</summary><p>

  * [Bucles (Loops)](https://curriculum.laboratoria.la/es/topics/javascript/02-flow-control/02-loops)
  * [Bucles e iteración - MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Loops_and_iteration)
</p></details>

- [ ] **Funciones (params, args, return)**

  <details><summary>Links</summary><p>

  * [Funciones (control de flujo)](https://curriculum.laboratoria.la/es/topics/javascript/02-flow-control/03-functions)
  * [Funciones clásicas](https://curriculum.laboratoria.la/es/topics/javascript/03-functions/01-classic)
  * [Arrow Functions](https://curriculum.laboratoria.la/es/topics/javascript/03-functions/02-arrow)
  * [Funciones — bloques de código reutilizables - MDN](https://developer.mozilla.org/es/docs/Learn/JavaScript/Building_blocks/Functions)
</p></details>

- [ ] **Pruebas unitarias (unit tests)**

  <details><summary>Links</summary><p>

  * [Empezando con Jest - Documentación oficial](https://jestjs.io/docs/es-ES/getting-started)
</p></details>

- [ ] **Módulos de ECMAScript (ES Modules)**

  <details><summary>Links</summary><p>

  * [import - MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/import)
  * [export - MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/export)
</p></details>

- [ ] **Uso de linter (ESLINT)**

- [ ] **Uso de identificadores descriptivos (Nomenclatura y Semántica)**

### Control de Versiones (Git y GitHub)

- [ ] **Git: Instalación y configuración**

- [ ] **Git: Control de versiones con git (init, clone, add, commit, status, push, pull, remote)**

- [ ] **GitHub: Creación de cuenta y repos, configuración de llaves SSH**

- [ ] **GitHub: Despliegue con GitHub Pages**

  <details><summary>Links</summary><p>

  * [Sitio oficial de GitHub Pages](https://pages.github.com/)
</p></details>

### Centrado en el usuario

- [ ] **Diseñar y desarrollar un producto o servicio poniendo a las usuarias en el centro**

### Diseño de producto

- [ ] **Diseñar en distintos niveles de fidelidad**

- [ ] **Seguir los principios básicos de diseño visual**

## 10. Funcionalidades opcionales

Si terminaste con todas las [funcionalidades requeridas](#3-funcionalidades),
intenta implementar las siguientes funcionalidades opcionales para
profundizar en los objetivos de aprendizaje del proyecto:

* Que el recuento de palabras y caracteres sea 0 para una entrada de
  texto vacía.
* Que el recuento de palabras y caracteres sea 0 para una entrada de
  texto con solo espacios.
* Que el recuento de palabras y caracteres sea 0 para una entrada de
  texto con solo caracteres de puntuación.

Puedes habilitar las pruebas unitarias y en _end to end_ de estos casos
en los archivos [test/analyzer.spec.js](test/analyzer.spec.js) y
[read-only/test/e2e/app.spec.js](read-only/test/e2e/app.spec.js).
También tendrás que ajustar las pruebas ya existentes de las
funcionalidades requeridas.
