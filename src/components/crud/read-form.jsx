
import { useState } from 'react'
import { Alert } from './alerts';
import { changeInput } from "../re-used-functions/onChangeInput"

const ReadForm = () => {

    const [id , setId] = useState("")

    const onSubmit = async (e) => {
        e.preventDefault();
        if( id.id == "") {
            return Alert(
                "All inputs must be complete",
                "before you can read a new product",
                'error'
            )
        } 
        console.log("id" , id.id);
        const product = await fetch(`https://fakestoreapi.com/products/${id.id}`)
            .then(res=>res.json())
            .then(json=>Alert(
                json.title,
                `$ ${json.price.toString()}`,
                'success'
            ))
            .catch(() => Alert(
                "Product not find with that ID",
                "Please check if your ID number is OK",
                'error'
            ))
        console.log(product);
    }

    return(

        <form className="form-crud" onSubmit={onSubmit}>
            <h2 >Ve un producto</h2>
            
                <label htmlFor="">Id</label>
                <input type="text" name="id" className="input" onChange={(e) => changeInput(e , id , setId)}/>

                <input type="submit" value="Buscar" className="button"/>
        </form>

    )
}

export default ReadForm;