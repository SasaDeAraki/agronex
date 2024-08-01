import "./InfoCard.css"

const InfoCard = () => {
    return(
        <div className="i-card-container">
            <div className="i-card-picture">
                <img alt="Foto" src="#"></img>
            </div>
            <div className="i-card-content">
                <h1>Nome</h1>
                <h3>Função</h3>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam nostrum illum eius explicabo architecto esse vitae labore totam tempora quibusdam at aut, iusto, sed atque cum odio rerum dolor deserunt.
                </p>
            </div>
        </div>
    )
}

export default InfoCard