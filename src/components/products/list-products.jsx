//import { useState } from 'react'
import { useEffect , useState } from 'react'

import Card from './card.jsx';

function ListProducts() {

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
              <Card 
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

export default ListProducts
