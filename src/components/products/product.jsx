import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./styles.css"

const Product = ({name  , price , id , admin , img}) => {

    
    return (
        <div className="contains-products">
            <div>
                <img src={img} alt="" className="image" />
            </div>
            <div className="products">
                <Link to={`/products/` + id}>
                <p>{admin == "true" ? `id: ${id}` : ``}</p>
                <h3>{name ?? ""} </h3> 
                <h5>precio: {price ?? ""}</h5>
                </Link >
            </div>
        </div>
    )
}

Product.propTypes = {
    name : PropTypes.string.isRequired,
    price : PropTypes.number.isRequired,
    id : PropTypes.number.isRequired,
    admin : PropTypes.string.isRequired,
    img : PropTypes.string.isRequired,
}

export default Product;