import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import HolaMundo from './components/HolaMundo.jsx';  //es opcional poner o no la extension
import Button from './components/Button';
import reportWebVitals from './reportWebVitals';

/* 
ReactDOM.render(
  <React.StrictMode>
    <HolaMundo />
  </React.StrictMode>,
  document.getElementById('root')
); 
*/

/*
//para usarlo sustituimos <App /> por <HolaMundo />
ReactDOM.render(
  <React.StrictMode>
    <HolaMundo />
  </React.StrictMode>,
  document.getElementById('root')
);
*/

//para usarlo sustituimos <App /> por <Button />, pero le vamos a mandar la propiedad o el valor a renderizar
//la propiedad o el texto se le manda desde donde se inicializa el componente.
/*
ReactDOM.render(
  <React.StrictMode>
    <Button text="da Click" />
  </React.StrictMode>,
  document.getElementById('root')
);
*/

ReactDOM.render(
  <React.StrictMode>
    <Button  />
  </React.StrictMode>,
  document.getElementById('root')
);

//Esta parte NO la tiene el profe Oscar en su curso, y yo SI la tengo
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

//Esta parte SI la tiene el profe Oscar en su curso, y yo NO la tengo
// if you want your app to work offline and load faster, you change
// unregister()   to register() below. note this comes with some pitfalls.
// Learns more about service workers: https://bit.ly/CRA-PWA
//---serviceWorker.unregister();