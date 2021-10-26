

export default function Sorteio(props) {
    return (
        
            Math.floor(Math.random() * 60)        
    );
};


/*import React from 'react'

export default function Sorteio (props) {
    const min = props.min;
    const max = props.max;
    const sorteioNumero = parseInt(Math.ramdom() * (max - min)) + min;
    return (
        <div>
            <h2>SORTEIO NÚMERO:</h2>
            <p>
                <strong>Valor Mínimo:</strong> {min}
            </p>
            <p>
                <strong>Valor Máximo:</strong> {max}
            </p>
            <p>
                <strong>Valor sorteado:</strong> {sorteioNumero}
            </p>
        </div>
    );
};
*/
