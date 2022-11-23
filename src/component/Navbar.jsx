
import React from 'react'
import Logo from "../assest/logo.svg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBars} from "@fortawesome/free-solid-svg-icons"

const Navbar = () => {
  return (
    <>

    <div className='flex justify-between'>
        <img src={Logo} className="w-36 m-4" alt="logo"/>
        <div className="md:hidden">
        <FontAwesomeIcon icon={faBars} alt="img" className='m-8' />
        </div>
       <ul className='hidden md:flex p-4'>
        <li className="innerstyle p-4 cursor-pointer">Home</li>
        <li className="innerstyle p-4 cursor-pointer">Features</li>
        <li className="innerstyle p-4 cursor-pointer">Products</li>
        <li className="innerstyle p-4 cursor-pointer">Clients</li>

       </ul>
    </div>
    </>
  )
}

export default Navbar