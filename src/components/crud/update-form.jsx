

const UpdateForm = () => {

    return(

        <form className="form">
            <h2 >Actualiza tu producto</h2>
            
                <label htmlFor="">Id</label>
                <input type="text" name="mail" className="input" />

                <label htmlFor="">Nombre</label>
                <input type="text" name="mail" className="input" />
                
                <label htmlFor="">Descripción</label>
                <input type="text" name="mail" className="input" />

                <label htmlFor="">Precio</label>
                <input type="number" name="mail" className="input" />

                <input type="submit" value="Crear" className="button"/>
        </form>

    )

}

export default UpdateForm;