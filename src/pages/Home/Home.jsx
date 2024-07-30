import Carrossel from "../../components/Carrossel/Carrossel"
import Feed from "../../components/Feed/Feed"
import NavBar from "../../components/NavBar/Navbar"

const Home = () => {
    return(
        <div>
            <NavBar />
            <Carrossel />
            <Feed />
        </div>
    )
}

export default Home