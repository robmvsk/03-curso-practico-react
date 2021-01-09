import React, {Component} from 'react';

class Stateful extends Component {
    //aqui va a estar parte de la logica del ciclo de vida de la app
    //donde estan los estados y los eventos que vamos a manejar
    constructor(props) {
        super(props);  // las inicializamos
        //aqui podemos hacer building de las funciones o eventos que vamos a manejar
        //tambien podemos asignar el estado
        this.state = {
            hello: "Hola Mundo :) "
        }
    };
    //tambien el render que nos va a empujar la info que vamos a mostrar en la app
    //parte presentacional
    render() {  //se tiene el html que vamos a empujar a nuestra aplicacion
        return(
            <Fragment>
                <h1>Hola Mundo :)</h1>
                <React.StrictMode>
                    <h2>{this.state.hello}</h2>
                </React.StrictMode>
            </Fragment>
        );
    /*
        con React.StrictMode: StrictMode is a tool for highlighting potential problems in an application. 
        Like Fragment, StrictMode does not render any visible UI. 
        It activates additional checks and warnings for its descendants.

        Note:

        Strict mode checks are run in development mode only; 
        they do not impact the production build.
    */
    }
};

export default Stateful;  //dejamos un enter despues, al final del archivo, porque????
