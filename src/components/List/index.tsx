import React from "react";

function List () {
    const tarefas = [
        {
            tarefa: 'JavaScript',
            tempo: '00:50:00'
        },
        {
            tarefa: 'TypeScript',
            tempo: '01:00:00'
        }
    ]
    return (
        <aside>
            <h2> Estudos do dia </h2>
            <ul>
            {tarefas.map((item, index) => (
                <li key={index}>
                    <h3>{item.tarefa}</h3>
                    <span>{item.tempo}</span>
                </li>
                
            ))} 
            </ul>
        </aside>
    )
}

export default List;