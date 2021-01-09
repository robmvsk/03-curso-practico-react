//es la capa de presentacion
import React from 'react';

//va a ser un return explicito, que no necesito llamar a return y encapsularlo entre parentesis para regresar la info
//aquellos componentes que tienen una parte muy particular que se va a ver en el navegador.
//logica muy basica que se va a mostrar en el navegador o en la aplicacion
//No traen logica, no tiene ciclo de vida, ni siquiera traen propiedades, usan un return explícito o directo.
const Presentational = () => <h1>Hola Mundo</h1>;

export default Presentational;
