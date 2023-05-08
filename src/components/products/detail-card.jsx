import PropTypes from "prop-types";
import { useEffect , useState } from "react";
import { useParams } from "react-router-dom"

const DetailCard = (/* {name , description , price , img} */) => {

    let params = useParams();
    const [dataProduct , setDataProduct] = useState([])

    useEffect(() => {
        (async () => {
            try {      
              let product = await fetch('https://fakestoreapi.com/products/' + params.productId).then(res=>res.json());
              console.log(product);
              setDataProduct(product)
            } catch (error) {
              return error;
            }
          })()
    },[])

    return (
        <div>
            <h3>{dataProduct.title}</h3>
            <img src={dataProduct.image} alt="" />
            <p>{dataProduct.description}</p>
            <h5>{dataProduct.price}</h5>
        </div>
    )
}

/* DetailCard.propTypes = {
    name        : PropTypes.string.isRequired,
    price       : PropTypes.number.isRequired,
    description : PropTypes.string.isRequired,
    img         : PropTypes.string
} */

export default DetailCard;