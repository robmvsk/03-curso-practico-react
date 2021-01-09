import React from 'react'

//boton tipo Stateless
const ButtonStateless = props => {
    //el button se va a pasar por propiedades
    //para este caso el componente, SOLO va hacer render
    //del elemento que reciba por propiedades
    //hay otra forma de recibir las props, que es destructurar los datos: puedes traer el valor de text de las props
     //Destructuracion de props para extraer los valores que requiero
     const { text } = props;  //destructura solo el valor que necesitas no todas las props. tiene que llamarse igual que como las envia el objeto Button en su inicializacion
    return (
        <div>
            <button type = "button"> {props.text} </button>
            <button type = "button"> {text} </button>
        </div>
    )
};

//Leccion 7, vamos aconvertirlo de stateless a stateful, agregandole estado y eventos y mas logica
class Button extends React.Component {
    //vamos a definirle estado: pero que es el estado en react?
    //Es un Objeto al cual le podemos definir variables que puede ser de tipo string,
    //number, boolean o functions, y vamos a poder acceder a nuestro componente
    //al momento en que se inicializa.

    //objetivo del boton, vamos hacer un contador (inicializado en cero), y cada vez
    //que demos click al boton se cambiara el estado
    //capa de estado
    state = {  //state es un objeto,, ya que tiene las  { }
        count: 0,
    }

    //vamos a agregar ahora eventos, con los cuales podemos manipular nuestra app, tales como:
    //click, mouseover, pasar el scroll, y eventos de HTML
    //La unica regla, es que usa camelCase para llamarlo: 
    //en React: onClick (camel Case)/ en js u html: onclick (todo minusculas)        
    //necesitamos hacer un manejador del contador 
    //capa de ciclo de vida y/o logica del componente
    handleClick = () => {
        //dentro del manejador, se va a tener un elemento (function) que va a permitir actualizar el estado
        //y a este elemento o funcion, le vamos a poder pasar la atualizacion que necesitamos, es decir pasarle el Objeto del state pero actualizado:
        this.setState( {
            count: this.state.count + 1,  //de esta forma se hace el cambio al state
        } )
    }
    
    //capa presentacional
    render() {
        //otra forma es this.state.count
        //Destructuracion de this.state el count, en este caso el objeto state
        const { count } = this.state;

         return (
            <div>
                <h1>Manzanas: {count} </h1>
                <button type = "button" onClick={this.handleClick}> 
                    Agregar
                </button>
            </div>
        )
     }

};

export default Button;

