import React, {Component} from 'react';
import Formulario from './Formulario';

class Resumen extends Component {

    render() {
        const {marca,year,plan} = this.props.datos;

        return (
            <div className="resumen">
                <h1>marca: {marca}</h1>
                <h2>año: {year}</h2>
                <h3>plan: {plan}</h3>

            </div>
        );
    }
}

export default Resumen;