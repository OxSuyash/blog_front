import React from 'react'
import "../styles/Contact.scss"

const Contact = () => {
  return (
    <div className="contact-main">
      <form action="" className="form-main">
        <p className="form-name">
          Contact Me
        </p>
        <div className="input-items">
          <input type="text" name="name" id="" placeholder='name' /> <br />
          <input type="email" name="email" id="" placeholder='email' /> <br />
          <input type="text" name="message" id="" placeholder='your message' /> <br />
          <div className="form-button">
            <button>Send</button>
          </div>
        </div>

      </form>
    </div>
  )
}

export default Contact