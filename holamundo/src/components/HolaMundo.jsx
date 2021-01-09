//podemos llamar de 2 formas los componentes: .js  o .jsx
import React from 'react';


//react utiliza clases, PERO no se va a utilizar la palabra class, sino se usara className
//en jsx, la forma correcta de asignar clases es usar:  className
const HolaMundo = () => { //este componente sera Stateless, sin ciclo de vida, ni estado
        //entonces podemos crear la logica del componente aqui:
        const hello = '!Hola Mundo¡'  //y con llaves {} se puede acceder al valor de la const hello
        //imaginemos que queremos hacer validaciones en la parte visual:
        const isTrue = true;  //cambiamos para ver que pasa

        return (
            <div className='HolaMundo'>
                <h1>Hola Mundo...</h1>
                <h2>{hello}</h2>
                <h2>Curso escencial de React</h2>
                <img src='https://arepa.s3.amazonaws.com/react.png' alt="React" />
                {
                    //creamos el bloque de validaciones, en este caso validando isTrue:
                    isTrue ? <h4>Esto es verdadero</h4> : <h5>soy Falso</h5>
                }
                {
                    //hay otra forma de hacer validaciones: cuando solo queremos que regrese un solo valor (en este caso si es true regrese el mensaje)
                    isTrue && <h4>Esto es realmente verdadero</h4>
                }
            </div>
        );
}

export default HolaMundo;
