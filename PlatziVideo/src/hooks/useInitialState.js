import {useState, useEffect } from 'react';

//Custom Hooks
//este hook, se vuelve AGNOSTICA, cuando no tiene codigo duri la url de la api
const useInitialState = (API) => {
    const [ videos, setVideos ] = useState( [] );

    useEffect(() => {
        //const API = 'http://localhost:3000/initialState';
        fetch(API)   //Recibe una API
            .then(response => response.json())  //CONSUME LA API y la deja en json la respuesta. cuando la api resuelva la informacion, trasformamos la respuesta en json que es la forma que nuestra Aplicacion puede entenderlo
            .then(data => setVideos(data))  //TOMA LA RESPUESTA (data) Y SE LA PASA AL ESTADO. el siguiente llamado es tomar la informacion generada (el json anterior) llamada data y pasarle data al estado video mediante setVideos 
    }, [] );  //use Effect, tiene un SEGUNDO PARAMETRO (que si no se lo pasas se genera un ciclo INFINITO). otro parámetro, el cual se encarga de estar escuchando alguna propiedad que pueda cambiar y así volver a ejecutarse. Si nosotros no le pasamos esta propiedad, va a crear un loop infinito.

    return videos;
};

export default useInitialState;
