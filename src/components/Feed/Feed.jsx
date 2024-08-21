import "./Feed.css"
import Post from "../Post/Post"
import filter from "../../assets/filter.png"
import search from "../../assets/search.png"


const Feed = ({ posts }) => {    
    return(
        <div className="Container">
            <div className="containerButtons">
                <button><img src={filter}></img></button>
                <button>Pra você</button>
                <button>Região</button>
                <button><img src={search}></img></button>
            </div>
            <div>
                {posts.map((post, index) => (
                    <Post 
                        key={index}
                        titulo={post.titulo}
                        pfp={post.pfp}
                        categoria={post.categoria}
                        descricao={post.descricao}
                        img={post.img}
                        date={post.date}
                    />
                ))}
            </div>
        </div>
    )
}

export default Feed