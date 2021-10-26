import React from 'react'
import './App.css'

import FirstFunction from './components/basics/first'
import ComParametro from './components/basics/parameters'
import Fragment from './components/basics/fragments'
import Card from './components/layout/card'
import Sorteio from './components/basics/aleatorio'


export default function App(props) {
    return (
        <div className="App">
            <h1>FUNDAMENTOS REACT</h1>

            <div className="Cards">
                <Card titulo="SORTEIO NÚMERO:" color="#1baf34">
                    <Sorteio />
                </Card>

                <Card titulo="FRAGMENTO:" color="#3c7cb8">
                    <Fragment />
                </Card>

                <Card titulo="COM PARÂMETRO:" color="#5e187a">
                    <ComParametro
                        titulo="NOTA ALUNO:"
                        aluno="CESAR" nota={9.5} />
                </Card>

                <Card titulo="FRAGMENTO:" color="#e61616">
                    <FirstFunction></FirstFunction>
                </Card>
            </div>
        </div>
    )
}



/*
>>>>> EXEMPLO DE FORMA MAIS REDUZIDA: <<<<<

export default _ =>
        <div id="app">
            <h1>FUNDAMENTOS REACT</h1>

            <Fragment/>

            <ComParametro
                titulo = "NOTA ALUNO:"
                aluno = "CESAR" nota = {9.5}/>

            <FirstFunction></FirstFunction>
    </div>
*/