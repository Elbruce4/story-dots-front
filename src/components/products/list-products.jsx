//import { useState } from 'react'
import { useEffect , useState } from 'react'
import Product from './product.jsx';
import NavBar from '../nav-bar/index.jsx';

function ListOfProducts() {

  const [products , setProducts] = useState([]);
  const isAdmin = localStorage.getItem("isAdmin");

  useEffect(() => {
    console.log("prods: " , products);
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
      <NavBar isAdmin={isAdmin}/>
      {
        products !== [] ?
        products.map((obj , index) => {
          return (
            
            <div key={index}>
              <Product 
                name={obj.title}  
                price={obj.price}
                id={obj.id}
                admin={isAdmin}
              />
            </div>
          )
        }) :
        <div>Cargando...</div>
      }
    </div>
  )

}

export default ListOfProducts
