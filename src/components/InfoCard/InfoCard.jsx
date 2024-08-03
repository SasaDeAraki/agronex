import React, { useState } from "react"
import "./InfoCard.css"
import holder2 from "../../assets/holder2.jpg"
import holder4 from "../../assets/holder4.png"
import Arrow1 from "../../assets/Arrow 1.png"
import Arrow2 from "../../assets/Arrow 2.png"

const InfoCard = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const cards = [
        {
            imagem: holder2,
            cor: '#B84343',
            nome: 'Samuel Viana',
            funcao: 'Front-End',
            descricao: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam libero dignissimos explicabo debitis. Placeat voluptas exercitationem tempora similique dolorum cum odit quibusdam, esse voluptatem perferendis suscipit totam enim a quas saepe ullam numquam libero ipsam minus iure nobis, quo incidunt dolores? Perspiciatis adipisci assumenda aliquam voluptas quae ea atque maiores. Nihil quaerat, culpa numquam ea eveniet aliquam, dicta mollitia et natus qui aliquid fugiat fugit quae modi deserunt odit voluptate soluta libero eaque? Ab quaerat amet beatae sunt asperiores fugiat neque, tempora ipsa porro quasi non, quas consectetur? Consectetur odio soluta suscipit magni, hic eaque? Beatae praesentium amet omnis odit!'
        },
        {
            imagem: holder4,
            cor: '#E58BDC',
            funcao: 'Front-End, Back-End',
            descricao: 'maconha :D'
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
                    <p>
                        {descricao}
                    </p>
                </div>
                <img src={Arrow1} id="next-button" onClick={nextCard} className="i-card-button"></img>
            </div>
        </div>
            
    )
}

export default InfoCard