import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

const Header = () => {
  return (
    <>
    <header className="header">
        <div className="container">
            <nav className="nav">
                <Link to={'/home'}>Home</Link>
                <Link to={'/about'}>About</Link>
                <Link to={'/contacts'}>Contacts</Link>
            </nav>
        </div>
    </header>
    </>
  )
}

export default Header