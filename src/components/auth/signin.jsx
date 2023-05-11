import { useState } from "react";
import { useNavigate  } from "react-router-dom";
import "./signin.css"

const SignIn = () => {

    const [ user , setUser ] = useState({
        mail : null,
        password : null
    });
    const navigate = useNavigate();

    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.name] : e.target.value
        })
    }

    const onClick = (e) => {
        console.log(user.mail);
        e.preventDefault();
        if(user.mail == "storyDots@gmail.com") {
            localStorage.setItem("isAdmin" , true);
            navigate("/products");
        } else {
            localStorage.setItem("isAdmin" , false);
            navigate("/products");
        }
    }

    return (
        <div className="div">
            <form onSubmit={onClick} className="form"> 
                <label htmlFor="" className="title">Sign in to Your Account</label>
                <label htmlFor="">Email Address</label>
                <input type="text" name="mail" onChange={handleChange} className="input" />
                
                <label htmlFor="">Passowrd</label>
                <input type="password" name="password" onChange={handleChange} className="input" />

                <input type="submit" value="Ingresar" className="button"/>
            </form>
            <div className="div-imgs">
                <img src="../../assets/storyDots.png" alt="" className="img-logo" />
                <img src="../../assets/name.png" alt=""  />
            </div>
        </div>
    )

}

export default SignIn;