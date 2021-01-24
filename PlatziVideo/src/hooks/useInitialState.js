import {useState, useEffect } from 'react';

//Custom Hooks
//este hook, se vuelve AGNOSTICA, cuando no tiene codigo duri la url de la api
const useInitialState = (API) => {
    //A la aplicacion, le vamos agregar el estado:
    const [videos, setVideos] = useState([]);  //recibe los elementos para inicializar el EStado, en este caso una lista de videos

    //va a ir a la Fake API, para obtener la info que requiere el estado:
    useEffect(() => {
        fetch('http://localhost:3000/initialState'  /*, {
            method: 'GET',
            mode: 'cors',
            redirect: 'follow',
            cache: 'reload',
            headers: new Headers({
             'Content-Type': 'application/json'
             
            })} */)
             //Recibe una API
            .then(response => response.json()) //CONSUME LA API y la deja en json la respuesta. cuando la api resuelva la informacion, trasformamos la respuesta en json que es la forma que nuestra Aplicacion puede entenderlo
            
            .then(data => setVideos(data))  //TOMA LA RESPUESTA (data) Y SE LA PASA AL ESTADO. el siguiente llamado es tomar la informacion generada (el json anterior) llamada data y pasarle data al estado video mediante setVideos 
    }, [] )  //use Effect, tiene un SEGUNDO PARAMETRO (que si no se lo pasas se genera un ciclo INFINITO). otro parámetro, el cual se encarga de estar escuchando alguna propiedad que pueda cambiar y así volver a ejecutarse. Si nosotros no le pasamos esta propiedad, va a crear un loop infinito.

    console.log(`Lista de Video: \n {}`,videos);

    return videos;
};

export default useInitialState;


/*
para correr la Fake API:
$ json-server -d 5000 -w initialState.json

Hace que se retrase 5 segundos la carga...

Referencia:
https://cursos.mejorcodigo.net/article/el-fetch-api-en-javascript-43

Parámetros De Request

Podemos personalizar aún más las peticiones utilizando lo siguiente:

method - GET, POST, PUT, DELETE, HEAD
url - URL de la petición
headers - el objeto de los encabezados
referrer - remitente de la solicitud
mode - cors, no-cors, same-origin
credentials - ¿enviar cookies con la peticiónt? omit, same-origin
redirect - follow, error, manual
integrity - valor de la integridad
cache - modo cache (default, reload, no-cache)

*/