import './App.css';
import React from 'react';


class Contador extends React.Component {
  constructor(props){
    super(props);
    console.log(this.props);

    this.state = {
      // ¿Se puede hacer esto o como lo haría?
      acc: 0,
    }
    this.incrementar = this.incrementar.bind(this);
  }

  componentDidMount(){
    console.log("Componente se montó al DOM");
    this.setState({ acc: this.props.init})
  }

  componentDidUpdate(){
    console.log("Componente se actualizó");
  }

  componentWillUnmount(){
    console.log("Componente se desmontará")
  }
  incrementar() {
    this.setState( { acc: this.state.acc+1 });
  }

  render(){
      return (      
        <h1 onClick={this.incrementar}>Acumulador: {this.state.acc} </h1>
      )
  }
}


class App extends React.Component {
 
  constructor(props){
    super(props);
    this.state = {
      mostrar: true
    }
  }
  componentDidMount(){
    setTimeout(()=>{ 
      this.setState({ mostrar: false})
     }, this.props.ms)
  }

  render(){
    
    return this.state.mostrar ? <Contador init={this.props.init} />:null;
    
  }
}

export default App;
