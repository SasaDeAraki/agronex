import { useState } from "react";
import Carrossel from "../../components/Carrossel/Carrossel"
import FAB from "../../components/FAB/FAB";
import Feed from "../../components/Feed/Feed"
import NavBar from "../../components/NavBar/NavBar"
import holder5  from "../../assets/holder5.png"
import holder3  from "../../assets/holder3.jpg"
import holder2  from "../../assets/holder2.jpg"

export default function Home() {

    const [posts, setPosts] = useState([
        {
            titulo: 'Exemplo de post',
            pfp: holder5,
            categoria: 'Pecuária',
            descricao: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae dicta ea nulla quisquam unde deleniti nobis omnis totam aut rem laboriosam cum, quam optio velit porro aspernatur. Ratione quo veritatis, sunt provident exercitationem distinctio harum tempora amet repellendus animi dolore inventore id fugiat ipsam explicabo dolorem eveniet delectus. Dolorum esse omnis sit, natus perspiciatis totam, earum recusandae maiores accusantium officiis fugit reiciendis molestiae consectetur suscipit. Earum nisi error aspernatur, enim porro officiis tenetur unde, laboriosam quisquam velit quidem mollitia? Voluptas eaque, cumque odit praesentium deserunt tenetur eligendi esse alias voluptatem, inventore blanditiis libero eveniet itaque architecto rerum unde debitis totam!',
            img: null,
            date: '14:24 21/08/2024'
        },
        {
            titulo: 'Post sobre agricultura',
            pfp: holder2,
            categoria: 'Agricultura',
            descricao: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius culpa tempora tempore expedita odit iusto vitae id fugiat recusandae, modi enim voluptas non in aperiam iure? Illo, cum, asperiores quis nostrum repudiandae minus laudantium nihil exercitationem dolorem nisi non odit blanditiis temporibus doloribus animi porro? Perspiciatis in debitis excepturi pariatur!',
            img: holder3,
            date: '14:24 21/08/2024'
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