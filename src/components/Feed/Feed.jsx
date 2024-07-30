import "./Feed.css"
import Post from "../Post/Post"
import PostImg from "../PostImg/PostImg"
import filter from "../../assets/filter.png"
import search from "../../assets/search.png"

const Feed = () => {
    return(
        <div className="container">
            <div className="containerButtons">
                <button><img src={filter}></img></button>
                <button>Pra você</button>
                <button>Região</button>
                <button><img src={search}></img></button>
            </div>
            <Post />
            <PostImg />
        </div>
    )   
}

export default Feed