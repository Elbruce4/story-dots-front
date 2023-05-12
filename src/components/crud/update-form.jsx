import { useState } from "react";
import { Alert } from "./alerts";
import {changeInput} from "../re-used-functions/onChangeInput"

const UpdateForm = () => {

    const [inputs , setInputs] = useState({
        id: "",
        mail : "",
        desc : "",
        price : ""
    })

    const onSubmit = (e) => {
        console.log("entra al submit");
        e.preventDefault();
        for (const key in inputs) {
            if(inputs[key] == "") {
                return Alert(
                    "All inputs must be complete",
                    "before you can update a new product",
                    'error'
                )
            }
        }
        Alert(
            "Good job!",
            "You update a new product!",
            'success'
        )
    }

    return(

        <form className="form-crud" onSubmit={onSubmit}>
            <h2 >Actualiza tu producto</h2>
            
                <label htmlFor="">Id</label>
                <input type="number" name="id" className="input" onChange={(e) => changeInput(e , inputs , setInputs)} />

                <label htmlFor="">Nombre</label>
                <input type="text" name="mail" className="input" onChange={(e) => changeInput(e , inputs , setInputs)} />
                
                <label htmlFor="">Descripción</label>
                <input type="text" name="desc" className="input" onChange={(e) => changeInput(e , inputs , setInputs)}  />

                <label htmlFor="">Precio</label>
                <input type="number" name="price" className="input" onChange={(e) => changeInput(e , inputs , setInputs)}  />

                <input type="submit" value="Crear" className="button"/>
        </form>

    )

}

export default UpdateForm;