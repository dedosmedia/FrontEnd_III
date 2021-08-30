import React from 'react';
import './App.css';
import swal from 'sweetalert2'

class Contador extends React.Component {

  constructor( props ) {
    super( props );

    this.state = {
      counter:  this.props.init
    }
  }


  componentDidMount() { 
    console.log("El componente fue montado en el DOM");
  }

  componentDidUpdate(props, state) { 
    console.log("El componente fue actualizado");
    console.log(props);
    console.log(state);
  }


  handleDecrement = () => {
    if( this.state.counter <= 0 ) {
      swal.fire("Contador no puede ser inferior a 0")
    }
    else {
      this.setState( { counter: this.state.counter - 1 })
    } 
  }

  handleIncrement = () => {
    if( this.state.counter >= 10 ) {
      swal.fire("Contador no puede ser superior a 10")
    }
    else {
      this.setState( { counter: this.state.counter + 1 })
    } 
  }

  render() {
    return (
      <>
        <div>El conteo es: { this.state.counter }</div>
        <button onClick={ this.handleIncrement}>+</button>
        <button onClick={ this.handleDecrement}>-</button>
      </>
    )
  }

}


function App() {
  return (
    <Contador init={5}/>
  );
}

export default App;
