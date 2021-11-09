import React, { Component } from 'react'
import "./contador.css"

import Display from './display'
import Botoes from './botoes'
import Form from './form'

class Contador extends Component {
    state = {
        numero: this.props.numeroInicial || 0,
        passo: this.props.passoInicial || 5,
    };

    inc = () => {
        this.setState({
            numero: this.state.numero + this.state.passo,
        });
    }

    dec = () => {
        this.setState({
            numero: this.state.numero - 1,
        })
    }

    setPasso = (novoPasso) => {
        this.setState({
            passo: novoPasso,
        })
    }

    render() {
        return (
            <div className="Contador">
                <h2>Contador</h2>
                <Display numero={this.state.numero} />
                <Form passo={this.state.passo} setPasso={this.setPasso} />
                <Botoes setInc={this.inc} setDec={this.dec} />
            </div>
        )
    }
}

export default Contador;