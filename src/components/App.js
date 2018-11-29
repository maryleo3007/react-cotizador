import React, { Component } from 'react';
import Header from './Header';
import Formulario from './Formulario';
import { obtenerDiferenciaAnio, calcularMarca,  obtenerPlan} from '../helper';
import Resumen from './Resumen';
import Resultado from './Resultado';

class App extends Component {

  state = {
    resultado: '',
    auto: ''
  }

  cotizarSeguros = (datos) => {
    const {marca, year, plan} = datos;

    let resultado = 2000;
    //obtener diferencia de año
    const diferencia = obtenerDiferenciaAnio(year);
    resultado -= ((diferencia * 3) * resultado / 100) ;
    resultado = calcularMarca(marca) * resultado;
    let incrementoPlan = obtenerPlan(plan);
    resultado = parseFloat(resultado * incrementoPlan).toFixed(2);
    const datosAuto = {
      marca: marca,
      year: year,
      plan: plan
    }
    console.log(datosAuto.marca);
    this.setState(
      {
        resultado: resultado,
        auto: datosAuto
      })
  }

  render() {
    return (

      <div className="container">
        <Header 
          titulo = "Cotizador de Seguro"
        />
        <div className="contenedor-formulario">
          <Formulario
            cotizarSeguro = {this.cotizarSeguros}
          />          
          <Resumen 
            auto = {this.state.auto}
          />
          <Resultado 
            resultado = {this.state.resultado}
          />

        </div>
      </div>
    );
  }
}

export default App;
