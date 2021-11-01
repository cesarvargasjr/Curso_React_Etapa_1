import React from 'react'
import Filho from './diretaFilho'

export default function Pai (props) {
    return (
       <div>
           <Filho nome="Cesar" idade={20} bool={true}/>
           <Filho nome="Gabriel" idade={17} bool={false}/>
       </div> 
    )
}