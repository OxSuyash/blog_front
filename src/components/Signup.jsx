import axios from 'axios'
import React from 'react'
// import { useContext } from 'react'
import { useState } from 'react'
import toast from 'react-hot-toast'
import { Navigate } from 'react-router-dom'
import {server} from "../main"
// import { Context } from '../main'

const Login = () => {

    // const {isAuthenticated, setIsAuthenticated} = useContext(Context)

    // if(isAuthenticated) return <Navigate to={"/"} />
    
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [isUp, setIsUp] = useState(false)

    const submitHandler = async (e)=> {
        e.preventDefault()

        try {
            const {data} = await axios.post(`${server}/user/konahe`, {
                name, email, password
            }, {
                headers: {
                    "Content-Type": "application/json"
                },
                withCredentials: true
            })
            toast.success(data.message)
            setIsUp(true)
            
        } catch (error) {
            // console.log(error.response.data)
            toast.error(error.response.data.message)
            setIsUp(false)
            
        }

    }

    if(isUp) return <Navigate to={"/login"}/>
  return (
    <div className="signup">
        <form action="" className="form-main" onSubmit={submitHandler}>
        <p className="form-name">
          Signup
        </p>
        <div className="input-items">

          
        <input type="text" name="name" id="name" placeholder='name' value={name} onChange={(e) => setName(e.target.value)} required /> <br />
          <input type="email" name="email" id="email" placeholder='email' value={email} onChange={(e) => setEmail(e.target.value)} required /> <br />
          <input type="password" name="password" id="password" placeholder='password' value={password} onChange={(e) => setPassword(e.target.value)} required /> <br />


          <div className="form-button">
            <button type='submit'>Signup</button>
          </div>
        </div>

      </form>
    </div>
  )
}

export default Login