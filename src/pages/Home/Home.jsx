import { useState } from "react";
import Carrossel from "../../components/Carrossel/Carrossel"
import FAB from "../../components/FAB/FAB";
import Feed from "../../components/Feed/Feed"
import NavBar from "../../components/NavBar/NavBar"
import agricultor1 from '../../assets/agricultor1.png'
import agricultor2 from '../../assets/agricultor2.png'
import agricultor3 from '../../assets/agricultor3.png'
import agricultor4 from '../../assets/agricultor4.png'
import agricultor5 from '../../assets/agricultor5.png'
import imagem1 from '../../assets/imagem1.png'
import batata from '../../assets/batata.png'

export default function Home() {

    const [posts, setPosts] = useState([
        {
            titulo: "Como Melhorar a Fertilidade do Solo com Compostagem",
            pfp: agricultor1,
            categoria: "Dicas de Cultivo",
            descricao: "Descubra como a compostagem pode melhorar a qualidade do solo e aumentar a produtividade das suas colheitas. Este post explica os benefícios da compostagem, como preparar a compostagem em casa e como aplicá-la de forma eficaz.",
            img: null,
            date: "09:00 30/08/2024"
        },
        {
            titulo: "Problemas com Pulgões",
            pfp: agricultor2,
            categoria: "Pedido de Ajuda",
            descricao: "Estou enfrentando uma infestação de pulgões. Alguém pode sugerir métodos naturais ou produtos eficazes para combater essas pragas? Agradeço qualquer dica ou recomendação!",
            img: imagem1,
            date: "10:30 30/08/2024"
        },
        {
            titulo: "Alerta de Geada: Proteja suas Culturas esta Noite!",
            pfp: agricultor3,
            categoria: "Alerta Climático",
            descricao: "De acordo com a previsão do tempo, teremos uma geada forte esta noite. Certifique-se de proteger suas plantas e culturas para evitar danos. Veja algumas dicas para minimizar os efeitos da geada nas suas plantações.",
            img: null,
            date: "11:15 30/08/2024"
        },
        {
            titulo: "Experiência com Cultivo de Batatas em Caixas de Madeira",
            pfp: agricultor4,
            categoria: "Curiosidade",
            descricao: "Recentemente experimentei cultivar batatas em caixas de madeira e obtive resultados surpreendentes! Compartilho minhas experiências e resultados para quem estiver interessado em experimentar essa técnica de cultivo inovadora.",
            img: batata,
            date: "13:00 30/08/2024"
        },
        {
            titulo: "Perguntas sobre Irrigação por Gotejamento: Dúvidas e Respostas",
            pfp: agricultor5,
            categoria: "Perguntas Frequentes",
            descricao: "Tenho algumas dúvidas sobre a instalação e manutenção de um sistema de irrigação por gotejamento. Se alguém tem experiência com isso e pode compartilhar dicas e melhores práticas, ficarei muito grato!",
            img: null,
            date: "14:45 30/08/2024"
        }         
    ]);

    const addPost = (newPost) =>  {
        setPosts([newPost, ...posts]);
    }

    return(
        <div>
            <NavBar />
            <FAB addPost={addPost} />
            <Carrossel />
            <Feed posts={posts} /> 
        </div>
    );
}