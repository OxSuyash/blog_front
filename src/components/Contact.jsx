
import React from 'react'
import { useState } from 'react'
import "../styles/Contact.scss"
import axios from "axios"
import toast from "react-hot-toast"
import { server } from "../main"

const Contact = () => {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  const submitHandler = async (e) => {
    e.preventDefault()
    console.log(name, email, message)

    try {
      const response  = await axios.post(`${server}/user/contact`, {
        name, email, message
      }, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true
      })

      toast.success(response.message)

    } catch (error) {
      toast.error("some error,,")
      console.log(error)
    }

  }
  return (
    <div className="contact-main">
      <form action="" className="form-main" onSubmit={submitHandler}>
        <p className="form-name">
          Contact Me
        </p>
        <div className="input-items">

          <input type="text" name="name" id="name" placeholder='name' value={name} onChange={(e) => setName(e.target.value)} required /> <br />

          <input type="email" name="email" id="email" placeholder='email' value={email} onChange={(e) => setEmail(e.target.value)} required /> <br />
          <input type="text" name="message" id="message" placeholder='your message' value={message} onChange={(e) => setMessage(e.target.value)} required /> <br />


          <div className="form-button">
            <button type='submit'>Send</button>
          </div>
        </div>

      </form>
    </div>
  )
}

export default Contact