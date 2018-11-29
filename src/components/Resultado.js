import React,{Component} from 'react';
import {TransitionGroup, CSSTransition} from 'react-transition-group';

class Resultado extends Component {

    render() {
        const resultado= this.props.Resultado;
        const mensaje = (!resultado) ?'elije un año marca plan' : 'el total es';
        return (
            <div className="gran-total">
                {mensaje}
                <TransitionGroup component="span" className="resultado">
                    <CSSTransition  className="resultado" key={resultado} timeout={{enter:"500", exit:"500"}}>
                    <span>{resultado}</span>
                    </CSSTransition>
                </TransitionGroup>
            </div>
        );
    }
}

export default Resultado;