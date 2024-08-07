import './CallingsTable.css'

const CallingsTable = () => {
    return (
        <div>
            <div className='container-tabela'>
                <table className='tabela-chamados'>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Título</th>
                            <th>Estado</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>001</td>
                            <td>Falha ao realizar o cadastro</td>
                            <td>Aberto</td>
                        </tr>
                        <tr>
                            <td>002</td>
                            <td>Erro ao enviar post</td>
                            <td>Fechado</td>
                        </tr>
                        <tr>
                            <td>003</td>
                            <td>Erro ao comentar em um post</td>
                            <td>Aberto</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default CallingsTable