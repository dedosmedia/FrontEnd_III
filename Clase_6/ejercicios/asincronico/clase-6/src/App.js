import logo from './logo.svg';
import React, { Fragment } from 'react';
import './App.css';

function Padre( { children } ) { 
  return (
    <Fragment>
      { children }
    </Fragment>
  )
}

function Hijo( {prop1, prop2 } ) {
  return (
    <React.Fragment>
        <p>{prop1}</p>
        <p>{prop2}</p>
    </React.Fragment>
  );
}




function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />                
        <Padre>
            <Hijo prop1="Hola" prop2="Mundo"/>
        </Padre>

      </header>
    </div>
  );
}

export default App;
