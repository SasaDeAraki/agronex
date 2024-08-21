import TableRow from '../TableRow/TableRow';
import './CallingsTable.css';
import React from 'react';
import { format } from 'date-fns';

const CallingsTable = () => {
    const callingsData  = [
        {
            id: '001',
            title: 'Falha ao realizar o cadastro',
            lastUpdate: '21/08/2024 14:40',
            status: 'Aberto'
        },
        {
            id: '002',
            title: 'Erro ao enviar post',
            lastUpdate: '21/08/2024 14:39',
            status: 'Fechado'
        },
        {
            id: '003',
            title: 'Erro ao comentar em um post',
            lastUpdate: '21/08/2024 14:38',
            status: 'Aberto' 
        }
    ]

 
    return (
        <div>
            <div className='container-tabela'>
                <table className='tabela-chamados'>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Título</th>
                            <th>Última atualização</th>
                            <th>Estado</th>
                        </tr>
                    </thead>
                    <tbody>
                        {callingsData.map((calling, index) => {
                            return(
                                <TableRow 
                                key={index}
                                id={calling.id}
                                title={calling.title}
                                lastUpdate={calling.lastUpdate}
                                status={calling.status}
                            />
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default CallingsTable