import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./header.scss";
import menu1 from "../assets/images/menu1.png";
import Logo from "../assets/images/Logo.jpg";
import user from "../assets/images/user.png";

export const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false)

  const onToggleModal = () => {
    setIsNavOpen(!isNavOpen)
  }

  return (
    <header className="app-header">
      <div >
      
        <img  className="user-container"src={user}/>
        
      
      </div>
      <div className ="hi-guest">שלום אורח</div>
      <div className="logo"><img src={Logo}/></div>
      <div className="nav-btn" onClick={onToggleModal}><img className="hamburger" src={menu1}/></div>

      <nav className={"navbar-container " + (isNavOpen ? 'open' : '')}>
            <div className="nav-item"> <NavLink style={{ textDecoration: 'none',color:'black' }} to="">אודות</NavLink></div>
           
            <div className="nav-item"><NavLink style={{ textDecoration: 'none',color:'black' }} to="">שמורים</NavLink></div>
            <div className="nav-item"><NavLink  style={{ textDecoration: 'none',color:'black' }} to="">פרויקטים נוספים</NavLink></div>
            <div className="nav-item"><NavLink  style={{ textDecoration: 'none',color:'black' }} to="">פעילויות העמותה</NavLink></div>
            <div className="nav-item"><NavLink style={{ textDecoration: 'none',color:'black' }} to="">לתרומות</NavLink></div>
            <div className="nav-item"><NavLink style={{ textDecoration: 'none',color:'black' }} to="">הגדרות</NavLink></div>
      </nav>
    </header>
  )
}

export default Header;