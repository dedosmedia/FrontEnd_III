import React from 'react';
import swal from 'sweetalert2';


class Rejuvenecedor extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            nombre: "",
            edad: 0,
        };
    }

    handleSubmit = (event) => {
        event.preventDefault();

        console.log("Manejar submit")
        if( this.state.nombre.length < 1) {
            swal.fire("Nombre debe tener al menos 1 caracter")
        }
        this.setState( { edad: this.state.edad-10 })

    }

    handleChange = (event) => {
        
        const key = event.target.name;
        const value = event.target.value;
        
        // ES6 syntax... crear key del objeto a partir de una variable
        this.setState({ [key]: value });
    }

    render() {
        return (
            <>
            <form onSubmit={this.handleSubmit}>
                <input type="text" name="nombre" onChange={this.handleChange}></input>
                <input type="number" name="edad" onChange={this.handleChange} value={this.state.edad}></input>
                <button>Enviar</button>
            </form>
            <p>Edad actual: {this.state.edad }</p>
            </>
        )
    }

}


export default Rejuvenecedor;