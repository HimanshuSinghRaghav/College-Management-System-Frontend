import React, { useState } from "react"
import "./register.css"
import axios from "axios"
import { useNavigate } from "react-router-dom"

const Register = () => {

    const navigate = useNavigate()

    const [ user, setUser] = useState({
        name: "",
        email: "",
        password: "",
        reEnterPassword: ""
    })
    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const register = () => {
        const { name, email, password, reEnterPassword } = user
        if( name && email && password && (password === reEnterPassword)){
            axios.post("http://localhost:5000/users/register", user)
            .then( res => {
                alert(res.data.message)
                
                navigate("/login")
        })
    }
        else{
            alert("invalid input")
        }
    }
    return (
        <div className="w-screen h-screen shadow-md flex flex-row min-h-screen justify-center items-center">
        <div className="w-80 h-96 border border-1 border-black rounded-md text-center">
            {console.log("user", user)}
            <h1 className="text-2xl mt-3">Register</h1>

            <input className=" border border-1 border-black rounded-sm mt-6 w-72  shadow-sm h-8 " type="text" name="name" value={user.name} placeholder="Your Name" onChange={ handleChange }></input><br/>

            <input  className=" border border-1 border-black rounded-sm mt-3 w-72 " type="text" name="email" value={user.email} placeholder="Your Email" onChange={ handleChange }></input><br/>

            <input  className=" border border-1 border-black rounded-sm mt-3 w-72 " type="password" name="password" value={user.password} placeholder="Your Password" onChange={ handleChange }></input><br/>

            <input  className=" border border-1 border-black rounded-sm mt-3 w-72 " type="password" name="reEnterPassword" value={user.reEnterPassword} placeholder="Re-enter Password" onChange={ handleChange }></input>

            <button className=" rounded-md mt-8 w-72 bg-blue-500 text-white h-8" onClick={register}>Register</button >
            <div>or</div>
            <button  className=" rounded-md mt-2 mb-3 w-72 bg-blue-500 text-white h-8" onClick={() => navigate("/login")}>Login</button >
        </div>
        </div>
        
    )
}

export default Register