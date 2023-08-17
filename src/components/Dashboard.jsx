import React from 'react'
import {Context} from "../main"
import { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import "../styles/Dashboard.scss"
import {server} from "../main"
import axios from 'axios'
import toast from 'react-hot-toast'


const Dashboard = () => {

    const {isAuthenticated, setIsAuthenticated} = useContext(Context)

    if(!isAuthenticated) return <Navigate to={"/login"} />

    
     

  return (
    <div className="dashboard">
        <h2>This is admin panel and you are admin</h2>

        <button >Logout</button>
    </div>
  )
}

export default Dashboard