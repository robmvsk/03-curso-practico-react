import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import Footer from '../components/Footer';

import '../assets/styles/App.scss';  //con simplemente importar el style ya esta funcionando automaticamente

//Como tenemos el return explicito, debemos cambiarlo para que sea implicito
const App = () => {
    //A la aplicacion, le vamos agregar el estado:
    const [videos, setVideos] = useState([]);  //recibe los elementos para inicializar el EStado, en este caso una lista de videos

    //va a ir a la Fake API, para obtener la info que requiere el estado:
    useEffect(() => {
        //const API = 'http://localhost:3000/initialState';
        fetch('http://localhost:3000/initialState')   //Recibe una API
            .then(response => response.json())  //CONSUME LA API y la deja en json la respuesta. cuando la api resuelva la informacion, trasformamos la respuesta en json que es la forma que nuestra Aplicacion puede entenderlo
            .then(data => setVideos(data))  //TOMA LA RESPUESTA (data) Y SE LA PASA AL ESTADO. el siguiente llamado es tomar la informacion generada (el json anterior) llamada data y pasarle data al estado video mediante setVideos 
    }, [] )  //use Effect, tiene un SEGUNDO PARAMETRO (que si no se lo pasas se genera un ciclo INFINITO). otro parámetro, el cual se encarga de estar escuchando alguna propiedad que pueda cambiar y así volver a ejecutarse. Si nosotros no le pasamos esta propiedad, va a crear un loop infinito.

    console.log(`Lista de Video: \n {}`,videos);

    return (
        <div className = "App">
            <Header />
            <Search />
            
            {
                videos.mylist?.length > 0 && 
                    <Categories title="Mi Lista">
                        <Carousel>
                            <CarouselItem />
                        </Carousel>
                    </Categories>
            }

            <Categories title="Tendencias">
                <Carousel>
                    {
                        videos.trends?.map(item =>
                            <CarouselItem key={item.id}  {...item} />
                        )
                    }
                    
                </Carousel>
            </Categories>

            <Categories title="Originales de Platzi videos">
                <Carousel>
                    <CarouselItem />
                </Carousel>
            </Categories>

            <Footer />
        </div>
    )
};

/*
const App = () => (
    <div className = "App">
        <Header />
        <Search />
        
        <Categories title="Mi Lista">
            <Carousel>
                <CarouselItem />
                <CarouselItem />
                <CarouselItem />
                <CarouselItem />
            </Carousel>
        </Categories>

        <Categories title="Tendencias">
            <Carousel>
                <CarouselItem />
                <CarouselItem />
                <CarouselItem />
            </Carousel>
        </Categories>

        <Categories title="Originales de Platzi videos">
            <Carousel>
                <CarouselItem />
                <CarouselItem />
            </Carousel>
        </Categories>

        <Footer />
    </div>
);
*/

export default App;