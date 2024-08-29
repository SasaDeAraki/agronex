import TableRow from '../TableRow/TableRow';
import './CallingsTable.css';

const CallingsTable = ({callingsData, updateCallingStatus}) => {

    const countStatuses = (callingsData) => {
        const counts = {aberto: 0, pendente: 0, fechado: 0};
        
        callingsData.forEach(calling => {
            switch (calling.status.toLowerCase()) {
                case 'aberto':
                    counts.aberto++;
                    break;
                case 'pendente':
                    counts.pendente++;
                    break;
                case 'fechado':
                    counts.fechado++;
                    break;
                default:
                    break;
            }
        });

        return counts;
    }

    const { aberto, pendente, fechado } = countStatuses(callingsData);

    return (
        <div>
            <div className='container-tabela'>
                <div className='contador-de-chamados'>
                    <span>Abertos: {aberto}</span>
                    <span>Pendentes: {pendente}</span>
                    <span>Fechados: {fechado}</span>
                </div>
                <table className='tabela-chamados'>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Assunto</th>
                            <th>Última atualização</th>
                            <th>Estado</th>
                        </tr>
                    </thead>
                    <tbody>
                        {callingsData.map((calling, index) => (
                            <TableRow 
                                key={index}
                                id={calling.id}
                                categoria={calling.categoria}
                                assunto={calling.assunto}
                                texto={calling.texto}
                                imagem={calling.imagem}
                                date={calling.date}
                                status={calling.status}
                                updateCallingStatus={updateCallingStatus}
                                callingsData={callingsData}
                            />
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default CallingsTable