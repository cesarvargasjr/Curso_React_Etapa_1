import React from 'react'
import './App.css'

import FirstFunction from './components/basics/first'
import ComParametro from './components/basics/parameters'
import Fragment from './components/basics/fragments'
import Card from './components/layout/card'
import Sorteio from './components/basics/aleatorio'
import Family from './components/basics/family'
import MemberFamily from './components/basics/memberFamily'
import ListaAlunos from './components/repeat/listStudents'
import TabelaProdutos from './components/repeat/tableProducts'


export default function App(props) {
    return (
        <div className="App">
            <h1>FUNDAMENTOS REACT</h1>

            <div className="Cards">

                <Card titulo="#7 - TABELA PRODUTOS:" color="#1f099c">
                    <TabelaProdutos></TabelaProdutos>
                </Card>

                <Card titulo="#6 - LISTA DE ALUNOS (REPETIÇÃO):" color="#0fada0">
                    <ListaAlunos></ListaAlunos>
                </Card>

                <Card titulo="#5 - COMPONENTE COM FILHOS:" color="#d39309">
                    <Family sobrenome="Vargas">
                        <MemberFamily nome="Cesar" />
                        <MemberFamily nome="Jonas" />
                        <MemberFamily nome="Gabriel" />
                    </Family>
                </Card>

                <Card titulo="#4 - SORTEIO NÚMERO:" color="#1baf34">
                    <Sorteio />
                </Card>

                <Card titulo="#3 - FRAGMENTO:" color="#3c7cb8">
                    <Fragment />
                </Card>

                <Card titulo="#2 - COM PARÂMETRO:" color="#5e187a">
                    <ComParametro
                        titulo="NOTA ALUNO:"
                        aluno="CESAR" nota={9.5} />
                </Card>

                <Card titulo="#1 - FRAGMENTO:" color="#e61616">
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