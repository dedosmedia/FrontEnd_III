import React from 'react';
import Perro from './Perro';


const App = () => {
    return (
        <>
            <h1>Clientes vet.....</h1>
            <Perro nombre="Teo" edad="8" tamanio="35" raza="Pug" sexo="M"/>
            <Perro nombre="Lola" edad="1" tamanio="30" raza="Bulldog" sexo="H"/>
        </>
    );
}

export default App;
