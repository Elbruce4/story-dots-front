import { useState } from "react";
import { useNavigate  } from "react-router-dom";

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
        if(user.mail == "storyDots@gmail.com" && user.password == "story4002") {
            localStorage.setItem("isAdmin" , true);
            navigate("/products");
        } else {
            localStorage.setItem("isAdmin" , false);
            navigate("/products");
        }
    }

    return (
        <form onSubmit={onClick}> 
            <input type="text" name="mail" onChange={handleChange} />
            
            <input type="password" name="password" onChange={handleChange} />

            <input type="submit" value="Ingresar" />
        </form>
    )

}

export default SignIn;