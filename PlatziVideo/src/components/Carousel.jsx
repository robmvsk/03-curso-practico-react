import React from 'react';
import '../assets/styles/components/Carousel.scss';

//el chhildren lo Destructuramos de las prodp que se le pasan al componente
const Carousel = ( {children} ) => (
    <section className="carousel">
        <div className="carousel__container">
            {children}
        </div>
    </section>

);

export default Carousel;

