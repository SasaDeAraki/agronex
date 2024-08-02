import "./InfoCard.css"
import holder2 from "../../assets/holder2.jpg"
import Arrow1 from "../../assets/Arrow 1.png"
import Arrow2 from "../../assets/Arrow 2.png"

const InfoCard = () => {

    return(
            <div className="i-card-container">
                <img src={Arrow2} id="previous-button" className="i-card-button"></img>
                <div className="i-card-picture">
                    <img alt="Foto" src={holder2}></img>
                </div>
                <div className="i-card-content">
                    <h1>Samuel Viana</h1>
                    <h3>Front End</h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Error molestias, et maiores est eaque sit necessitatibus eveniet quod pariatur autem sint repudiandae rerum rem assumenda illo aperiam voluptatem! Doloremque nemo velit quaerat ullam mollitia placeat voluptatibus error iusto animi repellat, esse, rerum nisi exercitationem facere ab sit possimus cum pariatur libero quisquam minus quis modi accusantium. Tempora inventore amet delectus libero molestias eaque excepturi aliquid facere corrupti dignissimos id, pariatur magnam! Neque, aliquam repudiandae velit totam explicabo in laborum laudantium. At impedit quas ratione eligendi commodi rerum culpa repudiandae ipsam. Doloribus unde beatae itaque, eum aspernatur deserunt facilis quas ducimus.
                    </p>
                </div>
                <img src={Arrow1} id="next-button" className="i-card-button"></img>
            </div>
    )
}

export default InfoCard