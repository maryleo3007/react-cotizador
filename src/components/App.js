import React, { Component } from 'react';
import Header from './Header';
import Formulario from './Formulario';

class App extends Component {

  cotizarSeguros = (datos) => {
    console.log(datos);
    
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

        </div>
      </div>
    );
  }
}

export default App;
