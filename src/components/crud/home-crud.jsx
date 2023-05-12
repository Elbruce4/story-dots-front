import { useNavigate } from "react-router-dom";
import { AiOutlineArrowDown , AiOutlineArrowRight} from "react-icons/ai";
import { useState } from "react";
import "./home-crud.css"
import CreateForm from "./create-form";
import UpdateForm from "./update-form";
import ReadForm from "./read-form";
import DeleteForm from "./delete-form";

const HomeCRUD = () => {

    const navigate = useNavigate();
    const [createOpen , setCreateOpen] = useState(false);
    const [readOpen , setReadOpen] = useState(false);
    const [updateOpen , setUpdateOpen] = useState(false);
    const [deleteOpen , setDeleteOpen] = useState(false);
    
    const isAdmin = localStorage.getItem("isAdmin");
    console.log("¿Admin?" , isAdmin);


    return (
        <div>
            <h2 className="title">Admin page - Control products</h2>
            {
                isAdmin == "true" ?
                <div className="div-crud">
                    <button 
                        className="crud" 
                        onClick={() => setCreateOpen(!createOpen)}>CREATE {createOpen ? <AiOutlineArrowDown/> : <AiOutlineArrowRight/>}</button>
                    {
                        createOpen ?
                        <CreateForm/>
                        : <div></div>
                    }
                    <button 
                        className="crud"
                        onClick={() => setReadOpen(!readOpen)}>READ {readOpen ? <AiOutlineArrowDown/> : <AiOutlineArrowRight/>}
                    </button>
                    {
                        readOpen ?
                        <ReadForm/>
                        : <div></div>
                    }
                    <button 
                        className="crud"
                        onClick={() => setUpdateOpen(!updateOpen)}>UPDATE {updateOpen ? <AiOutlineArrowDown/> : <AiOutlineArrowRight/>}
                    </button>
                    {
                        updateOpen ?
                        <UpdateForm/>
                        : <div></div>
                    }
                    <button 
                        className="crud"
                        onClick={() => setDeleteOpen(!deleteOpen)}>DELETE {deleteOpen ? <AiOutlineArrowDown/> : <AiOutlineArrowRight/>}
                    </button>
                    {
                        deleteOpen ?
                        <DeleteForm />
                        : <div></div>
                    }
                </div>
                :
                <div>
                    <h3>Upps, no estas autorizado para ver esta página</h3>
                    <button onClick={() => navigate(-1)}>Volver</button>
                </div>
            }
            
            
        </div>
    );

}

export default HomeCRUD;