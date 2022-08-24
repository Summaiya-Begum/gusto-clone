import React from 'react'
import { Link } from 'react-router-dom'
import Style from "../Css/Navbar.module.css"
const linkStyle = {
  margin: "1rem",
  textDecoration: "none",
  color: 'black'
};

export default function Navbar() {
  return (
    <div className={Style.navbarContainer} style={{ backgroundColor: "white" }}>

      <div className={Style.navDiv1}>
        <Link to='/' style={linkStyle}><h1>Home</h1></Link>
      </div>
      <div className={Style.navDiv2}>
        <Link to='/whygusto' style={linkStyle}><h1>Why Gusto</h1></Link>
        <Link to='/payroll' style={linkStyle}><h1>Payroll and more</h1></Link>
        <Link to='/pricing' style={linkStyle}><h1>Pricing</h1></Link>
        <Link to='/accounting' style={linkStyle}><h1>For Accountants</h1></Link>
        <Link to='/resource' style={linkStyle}><h1>Resources</h1></Link>
        <Link to='/build' style={linkStyle}><h1>Built for you </h1></Link>
      </div>

      <div className={Style.navDiv3}>

        <Link to='/search' style={linkStyle}><h1>Search</h1></Link>
        <Link to='/signin' style={linkStyle}><h1>Sign in</h1></Link>
        <Link to='/signup' style={linkStyle}><h1>Create account</h1></Link>

      </div>


    </div>
  )
}
