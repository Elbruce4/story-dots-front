import { useNavigate } from "react-router-dom";
import "../../styles/crud/home.css"

const HomeCRUD = () => {

    const navigate = useNavigate();

    
    const isAdmin = localStorage.getItem("isAdmin");
    console.log("¿Admin?" , isAdmin);


    return (
        <div>
            CRUD PAGE
            {
                isAdmin == "true" ?
                <div className="div-crud">
                    <button className="crud">CREATE</button>
                    <button className="crud">READ</button>
                    <button className="crud">UPDATE</button>
                    <button className="crud">DELETE</button>
                </div>
                :
                <div>
                    <h3>Upps, no estas autorizado para ver esta página</h3>
                    <button onClick={() => navigate(-1)}>Volver</button>
                </div>
            }
            
            
        </div>
    );

}

export default HomeCRUD;