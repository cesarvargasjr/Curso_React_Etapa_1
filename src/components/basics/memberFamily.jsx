import React from 'react'

export default function MemberFamily(props) {
    return (
        <div>{props.nome} <strong>{props.sobrenome}</strong></div>
    )
}