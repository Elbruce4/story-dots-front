import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const NavBar = ({isAdmin}) => {
    
    const navigate = useNavigate();

    return (
        <div>
            <h1>Bienvenido a Story Dots E-commerce</h1>
            {
                isAdmin == "true" ?
                <button onClick={() => navigate("/crudProducts")}>Edit Products</button>
                :
                <div></div>
            }
        </div>
    );

}

NavBar.propTypes = {
    isAdmin : PropTypes.string.isRequired
}

export default NavBar;