import React from 'react';
import '../assets/styles/components/Categories.scss';

//children puede ser un componente o una lista de componentes
//que se lo pasamos mediante las props.
//pero en este caso en lugar de pasarlo por props, se manda directamente
// y como se estan destructurando los parametros de props, en lugar de usar props
//se cambia <h3 className="categories__title">Mi lista</h3> por <h3 className="categories__title"> {title} </h3>
const Categories = ( {children, title} ) => (
    <div className="categories">
        <h3 className="categories__title"> {title} </h3>
        {children}
    </div>
    
);

export default Categories;