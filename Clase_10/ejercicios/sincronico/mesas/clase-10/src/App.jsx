import React, { Fragment } from 'react';


class Pedido extends React.Component {
  render(){
    return(
      "Pizza"
    )
  }
}




class App extends React.Component {

  constructor(props){
    super(props);

    this.state = {

      // Estado inicial.. no quiero mostrar el Pedido aún
      mostrar: false
    }
  }

  componentDidUpdate(){
    console.log("se actualizó");
  }

  componentDidMount(){
    setTimeout( ()=>
    { 
       console.log("pasaron 2 segundos");
       // Cambio el estado, indicando que ahora quiero mostrar el Pedido
       this.setState( { mostrar: true })
  
    }, 2000 );
  }

  handleButton = () =>{
      //  Al cancelar el pedido, cambio el estado nuevamente, indicando que no quiero mostrar el Pedido
      this.setState({mostrar: false})
      alert("Orden cancelada");
  }

  render(){
    // Línea 52, indica que solo se monta el componente <Pedido/> si mostrar es true
    // Uso un Fragment <></> porq tenemos 2 nodos al mismo nivel, y React no lo acepta.
    return (
      <>  
        <p>Pedidos: { this.state.mostrar === true && <Pedido/>} </p>
        <button onClick= {this.handleButton }>Cancelar</button>
      </>
    )
  }  
}





export default App;