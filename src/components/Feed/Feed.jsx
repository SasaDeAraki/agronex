import "./Feed.css"
import Post from "../Post/Post"
import filter from "../../assets/filter.png"
import search from "../../assets/search.png"
import holder5  from "../../assets/holder5.png"

const Feed = () => {
    return(
        <div className="container">
            <div className="containerButtons">
                <button><img src={filter}></img></button>
                <button>Pra você</button>
                <button>Região</button>
                <button><img src={search}></img></button>
            </div>
            <Post hasImage={holder5}/>
            <Post />
        </div>
    )   
}

export default Feed