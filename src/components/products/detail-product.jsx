
import { useEffect , useState } from "react";
import { useParams } from "react-router-dom"

const DetailCard = () => {

    let params = useParams();
    const [dataProduct , setDataProduct] = useState([]);
    const [isLoading , setIsLoading] = useState(true)

    useEffect(() => {
        (async () => {
            try {      
              let product = await fetch('https://fakestoreapi.com/products/' + params.productId).then(res=>res.json());
              console.log(product);
              setDataProduct(product);
              setIsLoading(false);
            } catch (error) {
              setIsLoading(false);
              return error;
            }
            
          })()
    },[params.productId])

    return (
        <div>
          {
          isLoading ? <div>Loading...</div> :
          <div>
            <h3>{dataProduct.title}</h3>
            <img src={dataProduct.image} alt=""  style={{"width" : "350px" , "height" : "350px"}}/>
            <p>{dataProduct.description}</p>
            <h5>{dataProduct.price}</h5>
          </div>
      }
        </div>
    )
}

export default DetailCard;