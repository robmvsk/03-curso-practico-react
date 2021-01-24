import React from 'react';
import PropTypes from 'prop-types';
import '../assets/styles/components/CarouselItem.scss';
import playIcon from '../assets/static/play-icon.png';
import plusIcon from '../assets/static/plus-icon.png';


//sustituir src="../assets/play-icon.png" por  src={playIcon}
//sustituir src="../assets/plus-icon.png" por  src={plusIcon}

//agregando los props, pasados por hooks
const CarouselItem = ( { cover, title, year, contentRating, duration } ) => (
    <div className="carousel-item">
        <img className="carousel-item__img" src={cover} alt={title} />
        <div className="carousel-item__details">
            <div>
                <img className="carousel-item__details--img" src={playIcon} alt="Play Icon" /> 
                <img className="carousel-item__details--img" src={plusIcon} alt="Plus Icon" /> 
            </div>
            <p className="carousel-item__details--title">{title}</p>
            <p className="carousel-item__details--subtitle">{`${year} ${contentRating} ${duration} minutos`}</p>
        </div>
    </div>
);

//Antes del export defaut, se validan los tipos de datos de los props que recibe este componente: cover, title, year, contentRating, y duration 
//definimos los tipos de datos de este componente
CarouselItem.propTypes = {  //OJO: se cambi de PropTypes a propTypes
    cover: PropTypes.string,  //se define que este elemento llega como un string al campo de cover
    title: PropTypes.string,
    year: PropTypes.number,  //se define que este elemento llega como un numero al campo year
    contentRating: PropTypes.string,
    duration: PropTypes.number,  //de cambio de string a number
}

/*
const CarouselItem = () => (
    <div className="carousel-item">
        <img className="carousel-item__img" src="https://images.pexels.com/photos/789822/pexels-photo-789822.jpeg?auto=format%2Ccompress&cs=tinysrgb&dpr=2&h=750&w=1260" alt />
        <div className="carousel-item__details">
            <div>
                <img className="carousel-item__details--img" src={playIcon} alt="Play Icon" /> 
                <img className="carousel-item__details--img" src={plusIcon} alt="Plus Icon" /> 
            </div>
            <p className="carousel-item__details--title">Título descriptivo</p>
            <p className="carousel-item__details--subtitle">2019 16+ 114 minutos</p>
        </div>
    </div>
);

*/

export default CarouselItem;
