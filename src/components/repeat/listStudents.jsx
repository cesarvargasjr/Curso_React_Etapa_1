import React from 'react'
import students from '../../data/students'


export default function ListaAlunos(props) {

    const listStudents = students.map((students) => {
        return (
            <li key={students.id}>          {/*CHAVE KEY PARA IDENTIFICAR QUAL ELEMENTO PRECISA SER MODIFICADO EXIGINDO MENOS ESFORÇO*/}
                {students.id}) {students.nome} - {students.nota}
            </li>
        );
    });

    return (
        <div>
            <ul style={{ listStyle: 'none' }}>
                {listStudents}
            </ul>
        </div>
    );
};