import React, { useState } from 'react'
import IndiretaFilho from './indiretaFilho'

export default function IndiretaPai(props) {
    
    const [nome, setNome] = useState ('?')
    const [idade, setIdade] = useState (0)
    const [nerd, setNerd] = useState (false)

    function fornecerInfo(nome, idade, nerd) {
        setNome(nome)
        setIdade(idade)
        setNerd(nerd)
    }

    return (
        <div>
            <div>
                <span>{nome} </span>
                <span><strong>{idade} </strong></span>
                <span> {nerd ? 'Verdadeiro' : 'Falso'}</span>
            </div>
            <IndiretaFilho whenClick={fornecerInfo}></IndiretaFilho>
        </div>
    )
}