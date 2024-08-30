import React, { useState } from "react"
import "./InfoCard.css"
import holder2 from "../../assets/holder2.jpg"
import holder4 from "../../assets/holder4.png"
import Arrow1 from "../../assets/Arrow 1.png"
import Arrow2 from "../../assets/Arrow 2.png"
import samuel from '../../assets/samuel.png'
import lain from '../../assets/lain.png'

const InfoCard = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const cards = [
        {
            imagem: samuel,
            cor: '#B84343',
            nome: 'Samuel Viana',
            funcao: 'Front-End, Design, Parte lógica',
            descricao: 'Oi! Eu sou o Samuel, um dos criadores deste projeto. Foi uma experiência interessante criar um site nessas proporções, que pode não ser muito grande, mas com certeza é maior do que qualquer coisa que eu já tenha feito antes, acabei passando bastante sufoco mas também aprendendo bastante no caminho!!'
        },
        {
            imagem: holder4,
            cor: '#E58BDC',
            nome: 'Larissa Queiroz',
            funcao: 'Front-End, Back-End',
            descricao: 'maconha :D'
        },
        {
            imagem: lain,
            cor: 'rgb(149 164 233)',
            nome: 'Tecnologias utilizadas',
            funcao: 'HTML, CSS, JS, React, Bootstrap, Algorítmos, Vite'
        }
    ]

    const prevCard = () => {
        setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : cards.length - 1));
    };

    const nextCard = () => {
        setCurrentIndex((prevIndex) => (prevIndex < cards.length - 1 ? prevIndex + 1 : 0));
    }

    const { imagem, cor, nome, funcao, descricao } = cards[currentIndex];

    return(
        <div className="i-card">
            <div className="i-card-container" style={{backgroundColor: cor}}>
                <img src={Arrow2} id="previous-button" onClick={prevCard} className="i-card-button"></img>
                <div className="i-card-picture">
                    <img alt="Foto" src={imagem}></img>
                </div>
                <div className="i-card-content">
                    <h1>{nome}</h1>
                    <h3>{funcao}</h3>
                    <p>{descricao}</p>
                </div>
                <img src={Arrow1} id="next-button" onClick={nextCard} className="i-card-button"></img>
            </div>
        </div>
            
    )
}

export default InfoCard