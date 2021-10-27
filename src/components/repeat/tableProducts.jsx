import React from 'react'
import products from '../../data/products'
import './tableProducts.css'


export default function TabelaProdutos(props) {

    function getLines() {
        return products.map((products, i) => {
            return (
                <tr key={products.id} className={i % 2 === 0 ? 'Par' : 'Impar'}>    {/*CHAVE KEY PARA IDENTIFICAR QUAL ELEMENTO PRECISA SER MODIFICADO EXIGINDO MENOS ESFORÇO*/}
                    <td>{products.id}</td>
                    <td>{products.product}</td>
                    <td>R$ {products.price.toFixed(2)}</td>
                </tr>
            )
        })
    }

    return (
        <div className="TabelaProdutos">
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Product</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {getLines()}
                </tbody>
            </table>
        </div>
    );
};