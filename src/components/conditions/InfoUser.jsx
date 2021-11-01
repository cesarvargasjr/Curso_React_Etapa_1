import React from 'react'
import If, { Else } from './if'

export default function InfoUsuario(props) {
    const usuario = props.usuario || {}
    return (
        <div>
            {/*<If test={usuario && usuario.nome}>
                Seja Bem Vindo <strong>{usuario.nome}</strong>!
            </If>
            <If test={!usuario || !usuario.nome}>
                Seja Bem Vindo <strong>AMIGO</strong>!
    </If>*/}

            <If test={usuario && usuario.nome}>
                Seja Bem Vindo <strong>{usuario.nome}</strong>!
                <Else>
                    Seja Bem Vindo <strong>AMIGO</strong>
                </Else>
            </If>    
        </div>
    )
}