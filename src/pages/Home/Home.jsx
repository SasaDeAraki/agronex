import Carrossel from "../../components/Carrossel/Carrossel"
import Feed from "../../components/Feed/Feed"
import NavBar from "../../components/NavBar/NavBar"

export default function Home() {
    return(
        <div>
            <NavBar />
            <Carrossel />
            <Feed /> 
        </div>
    )
}