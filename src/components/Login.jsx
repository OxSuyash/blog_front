import axios from 'axios'
import React from 'react'
import { useContext } from 'react'
import { useState } from 'react'
import toast from 'react-hot-toast'
import { Navigate } from 'react-router-dom'
import {server} from "../main"
import { Context } from '../main'

const Login = () => {

    const {isAuthenticated, setIsAuthenticated} = useContext(Context)
    
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const submitHandler = async (e)=> {
        e.preventDefault()

        try {
            const {data} = await axios.post(`${server}/user/login/`, {
                email, password
            }, {
                headers: {
                    "Content-Type": "application/json"
                },
                withCredentials: true
            })
            toast.success(data.message)
            setIsAuthenticated(true)
            
        } catch (error) {
            // console.log(error.response.data)
            toast.error(error.response.data.message)
            setIsAuthenticated(false)
            
        }

    }

    if(isAuthenticated) return <Navigate to={"/dashboard"}/>
  return (
    <div className="login">
        <form action="" className="form-main" onSubmit={submitHandler}>
        <p className="form-name">
          Login
        </p>
        <div className="input-items">

          

          <input type="email" name="email" id="email" placeholder='email' value={email} onChange={(e) => setEmail(e.target.value)} required /> <br />
          <input type="password" name="password" id="password" placeholder='password' value={password} onChange={(e) => setPassword(e.target.value)} required /> <br />


          <div className="form-button">
            <button type='submit'>Login</button>
          </div>
        </div>

      </form>
    </div>
  )
}

export default Login