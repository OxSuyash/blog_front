import React from 'react'
import { Link } from 'react-router-dom'
import "../styles/Footer.scss"

const Footer = () => {
  return (
    <div className="footer">
      <div className="title">
        <p>Quick-Links</p>
      </div>
      <div className="links" >
        <Link to={"/"} className="footer-link"><button>LInkedIn</button></Link>
        <Link to={"/"} className="footer-link"><button>Twitter</button></Link>
        <Link to={"/"} className="footer-link"><button>Github</button></Link>
      </div>
      <hr />
      <div className="copyright">
        <p>copyrights &copy; suyash karne 2023</p>
      </div>
    </div>
  )
}

export default Footer