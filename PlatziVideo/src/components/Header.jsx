import React from 'react';
import '../assets/styles/components/Header.scss'
//hacemos referencia a las imagenes, se le pone un nombre a la imagen, en este caso le llamamos logo
import logo from '../assets/static/logo-platzi-video-BW2.png';
import userIcon from '../assets/static/user-icon.png';

//arrow function con un return explicito
//importante: en react no podemos usar la palabra reservada class d ejavascript, por lo que
//renombramos class por className, presionar Alt + seleccionar cada palabra y luego sustituir
//cerrar las etiquetas de <img...>  por <img.... />

//y se cambia src="../assets/logo-platzi-video-BW2.png" por src={logo}
//y se cambia src="../assets/user-icon.png" por src=userIcon
const Header = () => (
    <header className="header">
        <img className="header__img" src={logo} alt="Platzi Video" />
        <div className="header__menu">
        <div className="header__menu--profile">
            <img src={userIcon} alt="" />
            <p>Perfil</p>
        </div>
        <ul>
            <li><a href="/">Cuenta</a></li>
            <li><a href="/">Cerrar Sesión</a></li>
        </ul>
        </div>
    </header>
);

export default Header;