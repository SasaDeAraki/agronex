import Carrossel from "../../components/Carrossel/Carrossel"
import FAB from "../../components/FAB/FAB";
import Feed from "../../components/Feed/Feed"
import NavBar from "../../components/NavBar/NavBar"

export default function Home() {
    return(
        <div>
            <NavBar />
            <FAB />
            <Carrossel />
            <Feed /> 
        </div>
    );
}