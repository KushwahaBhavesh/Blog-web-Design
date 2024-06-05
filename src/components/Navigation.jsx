import React, { useState } from 'react'
import navMenuOption from '../utilities/nav-menus'
import './styles/app.css'

const Navigation = () => {
  const [active, setActive] = useState("Home");

  const handleActive = (menu) => {
    console.log(menu);
    setActive(menu)
  }
  return <>
    <ul>
      {navMenuOption.map((item, index) => (
        <li key={index}  onClick={() => handleActive(item.menu)} className={active === item.menu ? 'active' : ''}>
          <i className={`bi bi-${item.icons}`}></i>
          <a href='#'>{item.menu}</a>
        </li>
      ))}
    </ul>
    <div className='logout'><i className='bi bi-box-arrow-left' /><a href='#'>Logout</a></div>

  </>
}

export default Navigation
