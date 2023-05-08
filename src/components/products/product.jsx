import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Product = ({name  , price , id}) => {

    
    return (
        <Link to={`/products/` + id}>
           <h3>{name ?? ""} </h3> 
           <h2>{price ?? ""}</h2>
        </Link >
    )
}

Product.propTypes = {
    name : PropTypes.string.isRequired,
    price : PropTypes.number.isRequired,
    id : PropTypes.number.isRequired
}

export default Product;