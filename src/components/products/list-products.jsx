//import { useState } from 'react'
import { useEffect , useState } from 'react'
import Product from './product.jsx';

function DetailProducts() {

  const [products , setProducts] = useState([]);

  useEffect(() => {
    (async () => {
      try {      
        let product = await fetch('https://fakestoreapi.com/products').then(res=>res.json());
        setProducts(product)
      } catch (error) {
        return error;
      }
    })()

  },[])
  
  return (
    <div>
      {
        products.map((obj , index) => {
          return (
            <div key={index}>
              <Product 
                name={obj.title}  
                price={obj.price}
                id={obj.id}
              />
            </div>
          )
        })
      }
    </div>
  )

}

export default DetailProducts
