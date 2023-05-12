//import { useState } from 'react'
import { useEffect , useState } from 'react'
import Product from './product.jsx';
import NavBar from '../nav-bar/index.jsx';
import "./styles.css";

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

  },)
  
  return (
    <div className='landing-container'>
      <NavBar isAdmin={isAdmin}/>
      {
        products !== [] ?
        <div className='boxs-container'>
          {products.map((obj , index) => {
            return (
              
                <Product 
                  name={obj.title}  
                  price={obj.price}
                  id={obj.id}
                  admin={isAdmin}
                  img = {obj.image}
                  key={index}
                />
            )
          }) }
        </div>
        : <div>Cargando...</div>
      }
    </div>
  )

}

export default ListOfProducts
