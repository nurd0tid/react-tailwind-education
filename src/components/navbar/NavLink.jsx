import React from 'react'
import { Link } from "react-scroll"

const NavLink = ({ href, link }) => {
  return (
    <li className='list-none cursor-pointer'>
      <Link>{link}</Link>
    </li>
  )
}

export default NavLink