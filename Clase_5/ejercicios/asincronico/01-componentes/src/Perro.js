import React from 'react';


const Perro = ( { edad, sexo, raza, tamanio, nombre } ) => {

    return (
        <React.Fragment>
        <h2>Nombre: { nombre }</h2>
        <ul>
            <li>Tamaño: {tamanio}</li>
            <li>Edad: {edad}</li>
            <li>Sexo: {sexo}</li>
            <li>Raza: {raza}</li>
        </ul>
        </React.Fragment>
    );
}

export default Perro;