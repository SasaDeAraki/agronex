
import { useState } from "react";
import AbrirChamado from "../../components/AbrirChamado/AbrirChamado.jsx"
import CallingsTable from "../../components/CallingsTable/CallingsTable.jsx"
import NavBar from "../../components/NavBar/NavBar.jsx"

const Suporte = () => {
    const [callingsData, setCallingsData]  = useState([
        {
            id: '001',
            categoria: '',
            assunto: 'Falha ao realizar o cadastro',
            texto: 'aaaa',
            imagem: null,
            date: '21/08/2024 14:40',
            status: 'Aberto'
        },
        {
            id: '002',
            categoria: '',
            assunto: 'Erro ao enviar post',
            texto: 'aaaa',
            imagem: null,
            date: '21/08/2024 14:39',
            status: 'Fechado'
        },
        {
            id: '003',
            categoria: '',
            assunto: 'Erro ao comentar em um post',
            texto: 'aaaa',
            imagem: null,
            date: '21/08/2024 14:38',
            status: 'Aberto' 
        }
    ]);

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
            <CallingsTable callingsData={callingsData} />
        </div>
    );
}

export default Suporte