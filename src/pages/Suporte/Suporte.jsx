import { useState } from "react";
import AbrirChamado from "../../components/AbrirChamado/AbrirChamado.jsx"
import CallingsTable from "../../components/CallingsTable/CallingsTable.jsx"
import NavBar from "../../components/NavBar/NavBar.jsx"
import holder4 from "../../assets/holder4.png"

const Suporte = () => {
    const [callingsData, setCallingsData]  = useState([
        {
            id: '001',
            categoria: 'Suporte poggers',
            assunto: 'Falha ao realizar o cadastro',
            texto: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, eveniet est? Obcaecati, fugit voluptate dolore qui quaerat illum dicta ipsam laudantium iure itaque sed quis reiciendis odit maxime velit consectetur similique facilis suscipit, praesentium voluptatum, doloribus molestiae tempore laboriosam. Impedit repudiandae magni id, nihil nulla fugiat beatae veritatis at velit voluptate debitis quasi accusantium! Sint sequi sapiente maxime minima ullam cupiditate, ratione dolorum. Quam minima dolore ullam harum magnam veritatis, doloremque, doloribus voluptatum ratione explicabo odio labore fuga placeat nostrum obcaecati. Maiores, quasi cumque minus ad sed voluptas minima in. Quis dicta fuga beatae, aperiam perferendis maxime est necessitatibus dolore.',
            imagem: holder4,
            date: '21/08/2024 14:40',
            status: 'Pendente'
        },
        {
            id: '002',
            categoria: 'Suporte poggers',
            assunto: 'Erro ao enviar post',
            texto: 'aaaa',
            imagem: null,
            date: '21/08/2024 14:39',
            status: 'Fechado'
        },
        {
            id: '003',
            categoria: 'Suporte poggers',
            assunto: 'Erro ao comentar em um post',
            texto: 'aaaa',
            imagem: null,
            date: '21/08/2024 14:38',
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