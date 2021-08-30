import React, { Component } from 'react'
import Button from './Button'
import "./App.css";

export default class App extends Component {
  
  /* ESPACIO DE TRABAJO
  - Armar la estructura para una Class Component
  - Hacer un state con el arreglo de los colores
  - Vamos a usar una funcion shuffle mas abajo y vamos a enviarla por props... que
    formas tenemos para no perder el contexto?
  */

    datos = "Hola mundo";
  
    state = {
      colors: ["RED","BLUE","YELLOW", "GREEN","ORANGE","MAGENTA","BROWN","LIME"]
    }
  
    constructor(props){
      super(props);
      
      /*
      this.state = {
          colors: ["RED","BLUE","YELLOW", "GREEN","ORANGE","MAGENTA","BROWN","LIME"]
      }
      */

      this.handleClick = this.handleClick.bind(this);
      this.test();
    }

    test(){
      console.log(this.datos);

    }

  /* ESPACIO DE TRABAJO
  Funcion Shuffle
  Aqui deberan hacer una funcion que me retorne un nuevo arreglo con los
  colores mezclados
  */
  shuffle = (array) => {
    array.sort(() => Math.random() - 0.5);    
  }
/* con arrow function ... no necesita bind
  handleClick = ()=>{
    this.shuffle(this.state.colors);
    console.log(this.state.colors);
    // con spread operator
    // this.setState( { ...this.state} )
    
    // creando un nuevo objeto
    this.setState( {colors: this.state.colors})
  }
  */

  // con una función normal y usnado bind
  handleClick() {
    console.log(this);
    this.shuffle(this.state.colors);
    console.log(this.state.colors);
    // con spread operator
    // this.setState( { ...this.state} )
    
    // creando un nuevo objeto
    this.setState( {colors: this.state.colors})
  }

  render() {
    return (
      
      <div className="container">
        <div className="panel">
          { console.log(this) }    
          {this.state.colors.map(color => <div key={color} className={color}>{color}</div>)}
        </div>
        <Button fn={this.handleClick} />
      </div>

    )
  }
}
