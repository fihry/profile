import React from 'react'
import Link from 'next/link'

export default function NaveBare() {
  return (
    <nav className="navbar">

    <ul className="navbar-list">

      <li className="navbar-item">
        <button className="navbar-link  active" data-nav-link>About</button>
      </li>

      <li className="navbar-item">
        <button className="navbar-link" data-nav-link>Resume</button>
      </li>

      <li className="navbar-item">
        <button className="navbar-link" data-nav-link>Portfolio</button>
      </li>

      <li className="navbar-item">
        <button className="navbar-link" data-nav-link>Blog</button>
      </li>

      <li className="navbar-item">
        <button className="navbar-link" data-nav-link>Contact</button>
      </li>

    </ul>

  </nav>
  )
}