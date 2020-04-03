import React from 'react'
import { Link } from 'gatsby'

const Header = () => {
  return (
    <header>
      <h1>Great Gatsby Bootcamp</h1>
      <Link to='/'>Home</Link>
      <Link to='/about'>About</Link>
      <Link to='/contact'>Contact Us</Link>
      <Link to='/blog'>Blog</Link>
    </header>
  )
}

export default Header