const CreateForm = () => {

    return(

        <form className="form">
            <h2 >Crea tu producto</h2>
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

export default CreateForm;