import "./Feed.css"
import Post from "../Post/Post"
import filter from "../../assets/filter.png"
import search from "../../assets/search.png"
import holder5  from "../../assets/holder5.png"
import holder3  from "../../assets/holder3.jpg"

const Feed = () => {    
    const postPreset = [
        {
            titulo: 'Exemplo de post',
            pfp: holder3,
            categoria: 'Pecuária',
            descricao: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae dicta ea nulla quisquam unde deleniti nobis omnis totam aut rem laboriosam cum, quam optio velit porro aspernatur. Ratione quo veritatis, sunt provident exercitationem distinctio harum tempora amet repellendus animi dolore inventore id fugiat ipsam explicabo dolorem eveniet delectus. Dolorum esse omnis sit, natus perspiciatis totam, earum recusandae maiores accusantium officiis fugit reiciendis molestiae consectetur suscipit. Earum nisi error aspernatur, enim porro officiis tenetur unde, laboriosam quisquam velit quidem mollitia? Voluptas eaque, cumque odit praesentium deserunt tenetur eligendi esse alias voluptatem, inventore blanditiis libero eveniet itaque architecto rerum unde debitis totam!',
            img: null
        },
        {
            titulo: 'Post sobre agricultura',
            pfp: holder5,
            categoria: 'Agricultura',
            descricao: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius culpa tempora tempore expedita odit iusto vitae id fugiat recusandae, modi enim voluptas non in aperiam iure? Illo, cum, asperiores quis nostrum repudiandae minus laudantium nihil exercitationem dolorem nisi non odit blanditiis temporibus doloribus animi porro? Perspiciatis in debitis excepturi pariatur!',
            img: holder3
        }
    ];


    return(
        <div className="Container">
            <div className="containerButtons">
                <button><img src={filter}></img></button>
                <button>Pra você</button>
                <button>Região</button>
                <button><img src={search}></img></button>
            </div>
            <div>
                {postPreset.map((post, index) => (
                    <Post 
                        key={index}
                        titulo={post.titulo}
                        pfp={post.pfp}
                        categoria={post.categoria}
                        descricao={post.descricao}
                        img={post.img}
                    />
                ))}
            </div>
        </div>
    )   
}

export default Feed