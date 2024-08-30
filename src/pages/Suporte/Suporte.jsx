import { useState } from "react";
import AbrirChamado from "../../components/AbrirChamado/AbrirChamado.jsx"
import CallingsTable from "../../components/CallingsTable/CallingsTable.jsx"
import NavBar from "../../components/NavBar/NavBar.jsx"
import screenshot1 from "../../assets/Screenshot_1.png"

const Suporte = () => {
    const [callingsData, setCallingsData]  = useState([
        {
            id: '001',
            categoria: 'Erros técnicos',
            assunto: 'Falha ao realizar o cadastro',
            texto: 'Olá, Estou enfrentando problemas ao tentar acessar o sistema Agronex. As páginas não estão carregando corretamente, e o tempo de resposta está extremamente lento. Esse problema começou hoje após eu atualizar o meu navegador (Google Chrome). Já tentei algumas soluções por conta própria, mas nada funcionou até agora. Aqui está o que eu já tentei: Verifiquei que estou conectado à internet e que outros sites estão funcionando normalmente. Tentei acessar o sistema Agronex usando outros navegadores, como Firefox, mas o problema continua. Limpei o cache e os cookies do navegador e reiniciei tanto o navegador quanto o computador, mas o sistema ainda não carrega como deveria. Preciso de ajuda para resolver esse problema, pois está me impedindo de realizar minhas tarefas diárias. Em anexo, estou enviando uma captura de tela do erro que aparece.',
            imagem: screenshot1,
            date: '21/08/2024 14:40',
            status: 'Aberto'
        },
        {
            id: '002',
            categoria: 'Erros técnicos',
            assunto: 'Problemas de Carregamento de Páginas no Sistema',
            texto: 'Estou enfrentando problemas ao tentar carregar as páginas do sistema. As páginas não estão carregando corretamente ou ficam travadas durante o processo. Esse problema ocorre em diferentes momentos e parece estar afetando a navegação geral no sistema.',
            imagem: null,
            date: '29/08/2024 14:13',
            status: 'Aberto'
        },
        {
            id: '003',
            categoria: 'Alterações de conta',
            assunto: 'Solicitação de Alteração de Conta',
            texto: 'Gostaria de solicitar uma alteração em minha conta. Especificamente, preciso de assistência para: Atualizar meu endereço de email de "jose.silva@example.com" para "jose.silva.new@example.com".',
            imagem: null,
            date: '30/08/2024 14:21',
            status: 'Aberto'
        },
        {
            id: '004',
            categoria: 'Compatibilidade e navegação',
            assunto: 'Problemas de Compatibilidade com o Navegador',
            texto: 'Estou enfrentando problemas ao tentar acessar o sistema. Parece que a página não está sendo exibida corretamente em meu navegador. Gostaria de assistência para resolver questões de compatibilidade. Nome do Navegador: Google Chrome, Versão do Navegador: 114.0.5735.90. As páginas do sistema não estão carregando corretamente. O layout está desconfigurado e alguns elementos interativos não funcionam. Tentei acessar o sistema em outros navegadores, como Firefox e Microsoft Edge, e o problema persiste.',
            imagem: null,
            date: '30/08/2024 14:25',
            status: 'Aberto'
        }
    ]);

    const updateCallingStatus = (id, newStatus) => {
        const updatedCallings = callingsData.map(calling => 
            calling.id === id ? { ...calling, status: newStatus } : calling
        );
        setCallingsData(updatedCallings);
    }

    const addCalling = (newCalling) => {
        setCallingsData([...callingsData, newCalling])
    }
    
    const getNextId = () => {
        const nextId = callingsData.length > 0 ? Math.max(...callingsData.map(c => parseInt(c.id))) + 1 : 1;
        return nextId.toString().padStart(3, '0');
    }

    return(
        <div>
            <NavBar />
            <AbrirChamado addCalling={addCalling} nextId={getNextId()} />
            <CallingsTable callingsData={callingsData} updateCallingStatus={updateCallingStatus} />
        </div>
    );
}

export default Suporte