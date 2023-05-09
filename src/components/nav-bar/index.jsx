import PropTypes from "prop-types";

const NavBar = ({isAdmin}) => {
    
    return (
        <div>
            <h1>Bienvenido a Story Dots E-commerce</h1>
            {
                isAdmin == "true" ?
                <button>Edit Products</button>
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