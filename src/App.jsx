//import { useState } from 'react'
import { useEffect , useState } from 'react'
import './App.css'
import Card from './productsCard';

function App() {

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
                description={obj.description} 
                price={obj.price}
              />
            </div>
          )
      })
    }
    </div>
  )

}

export default App
