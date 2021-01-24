import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import Footer from '../components/Footer';
import useInitialState from '../hooks/useInitialState';

import '../assets/styles/App.scss';  //con simplemente importar el style ya esta funcionando automaticamente

const API = 'http://localhost:3000/initialState';

//Como tenemos el return explicito, debemos cambiarlo para que sea implicito
const App = () => {
    //Consume la API, mediante el custom hook
    const videos = useInitialState(API);
    console.log(`resultado-videos: {}`, videos.length);
    
    return (
        videos.length === 0 ? <h1>Loading...</h1> : (
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

                {
                    videos.trends?.length > 0 && 
                    <Categories title="Tendencias">
                        <Carousel>
                            {
                                videos.trends?.map(item =>
                                    <CarouselItem key={item.id}  {...item} />
                                )
                            }
                            
                        </Carousel>
                    </Categories>
                }  

                {
                    videos.originals?.length > 0 && 
                    <Categories title="Originales de Platzi videos">
                        <Carousel>
                            {
                                videos.originals?.map(item =>
                                    <CarouselItem key={item.id}  {...item} />
                                )
                            }

                        </Carousel>
                    </Categories>
                }

                <Footer />
            </div>
        )
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