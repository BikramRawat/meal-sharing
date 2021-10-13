import React from 'react'
import './Header.css'
import logo from '../../assets/logo.png';
export default function Header() {
    return (
            <div className="heading">
                <img src={logo} width='100px' height='80px' alt='logo' />
        <h1>Meal Sharing App</h1>
      </div>
        
    )
}
