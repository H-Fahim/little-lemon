import React from 'react'

function Nav() {
  return (
    <nav>
        <img src='little-lemon/assets' alt='logo'/>
        <ul>
            <li href = '/home'>Home</li>
            <li href = '/about'>About</li>
            <li href = '/menu'>Menu</li>
            <li href = '/reservation'>Reservations</li>
            <li href = '/order-online'>Order online</li>
            <li href = '/login'>Login</li>
        </ul>
    </nav>
  )
}

export default Nav