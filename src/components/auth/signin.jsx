import { useState } from "react";
import { useNavigate  } from "react-router-dom";
import "./signin.css"
import { changeInput } from "../re-used-functions/onChangeInput"

const SignIn = () => {

    const [ user , setUser ] = useState({
        mail : null,
        password : null
    });
    const navigate = useNavigate();

    const onClick = (e) => {
        e.preventDefault();
        if(user.mail == "storyDots@gmail.com") {
            localStorage.setItem("isAdmin" , true);
        } else {
            localStorage.setItem("isAdmin" , false);
        }
        navigate("/products");
    }

    return (
        <div className="div">
            <form onSubmit={onClick} className="form"> 
                <label htmlFor="" className="title">Sign in to Your Account</label>
                <label htmlFor="">Email Address</label>
                <input type="text" name="mail" onChange={(e) => changeInput(e, user , setUser)} className="input" />
                
                <label htmlFor="">Password</label>
                <input type="password" name="password" onChange={(e) => changeInput(e, user , setUser)} className="input" />

                <input type="submit" value="Ingresar" className="button"/>
            </form>
            <div className="div-imgs">
                <img className="img-logo" src="https://startupeable.com/directorio/wp-content/uploads/listing-uploads/logo/2022/11/logo.png" alt="" />
                <img className="img-title" src="data:image/png;base64,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" alt=""  />
            </div>
        </div>
    )

}

export default SignIn;