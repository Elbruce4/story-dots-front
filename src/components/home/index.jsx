import { useNavigate } from "react-router-dom";

const Home = () => {

    const navigate = useNavigate();

    return (
        <div>
            <h2>Bienvenido</h2>
            <button onClick={() => navigate("/signIn")}>Comenzar</button>
        </div>
    )
}

export default Home;