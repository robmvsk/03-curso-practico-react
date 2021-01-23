//añadiendo las configuraciones necesarias para que funcione nuestro proyect
import React from 'react';
//La libreria que sirve para empujar todo lo que hagamos con React hacia el Navegador
import ReactDOM from 'react-dom';

//NO vamos a crear un Componente, sino que vamos a utilizar ReactDOM para pasarle este componente al navegador
//que componente?, nuestro componente HelloWorld, para lo cual dbemos importarlo
//import HelloWorld from './components/HelloWorld';

import App from './containers/App';

//render, recibe 2 parametros: uno es el componente, y otro es donde vamos a empujar ese componente (debe ser un elemento de HTML)
//en getLementById, definimos a que elemento de html le pasamos el componente HelloWorld
ReactDOM.render( <App />, document.getElementById('app') );

//con esto ya tenemos nuestro archivo de entrada, con la configuracion completa

//para compeltar, es necesario saber de donde obtenermos el id, en este caso llamado app?
//lo sacamos del archivo indexed.html de la carpeta public
