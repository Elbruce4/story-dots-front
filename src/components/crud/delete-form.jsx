

const DeleteForm = () => {

    return(

        <form className="form">
            <h2 >Selecciona el producto que deseeas eliminar</h2>
            
                <label htmlFor="">Id</label>
                <input type="text" name="mail" className="input" />

                <input type="submit" value="Eliminar" className="button"/>
        </form>

    )
}

export default DeleteForm;