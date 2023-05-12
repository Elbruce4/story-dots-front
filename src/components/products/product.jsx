import PropTypes from "prop-types";
import "./styles.css"
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
import Image from 'react-bootstrap/Image';

const Product = ({name  , price , id , admin , img, desc}) => {

    
    return (
        <>
        
        <Link to={`/products/` + id} className="contains-products">
            <Card
                bg={"Primary".toLowerCase()}
                key={"Primary"}
                text={"Primary".toLowerCase() === 'light' ? 'dark' : 'white'}
                style={{ width: '18rem' }}
                className="mb-2"
                >
                <Card.Header>$ {price } / {admin == "true" ? `id: ${id}` : ``}</Card.Header>
                <Card.Body>
                    <Card.Title>{name} </Card.Title>
                    <Card.Text>
                        <Image style={{"width" : "200px" , "height" : "200px"}} src={img} roundedCircle />
                    </Card.Text>
                </Card.Body>
                
            </Card>
        </Link>
            {/* <div className="contains-products">
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
            </div> ) */}
        </>
    )
    
}

Product.propTypes = {
    name : PropTypes.string.isRequired,
    price : PropTypes.number.isRequired,
    id : PropTypes.number.isRequired,
    admin : PropTypes.string.isRequired,
    img : PropTypes.string.isRequired,
    desc : PropTypes.string.isRequired,
}

export default Product;