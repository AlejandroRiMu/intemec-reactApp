import React, {useState} from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
import IntemecLogo from '../assets/img/intemec-logo.png'

const Navbar = () => {
    const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }

  return (
    <div className='flex justify-between items-center h-24 max-w-[1800px] mx-auto px-4 text-black'>
        <img className='w-28 z-[100]' src={IntemecLogo} alt="Intemec Logo" />
        <ul className='hidden md:flex'>
            <li className='p-4 hover:bg-sky-300 rounded-xl cursor-pointer ease-in-out duration-500'><strong className='text-black animate-pulse'>Inicio</strong></li>
            <li className='p-4 hover:bg-sky-300 rounded-xl cursor-pointer ease-in-out duration-500'>Servicios</li>
            <li className='p-4 hover:bg-sky-300 rounded-xl cursor-pointer ease-in-out duration-500'>Procesos</li>
            <li className='p-4 hover:bg-sky-300 rounded-xl cursor-pointer ease-in-out duration-500'>Contacto</li>
            <li className='p-4 hover:bg-sky-300 rounded-xl cursor-pointer ease-in-out duration-500'><a target={'_blank'} href="http://webmail.intemec.mx/">WebMail</a></li>
        </ul>
        <div onClick={handleNav} className='block md:hidden z-[100]' >
            {nav ? <AiOutlineClose size={30}/> : <AiOutlineMenu size={30}/> }   
        </div>
        <div className={nav ? 'fixed left-0 top-0 w-[100%] bg-white ease-in-out duration-500' : 'fixed left-[-100%]'}>
            <ul className='pt-24'>
                <li className='p-4 '>Inicio</li>
                <li className='p-4 '>Servicios</li>
                <li className='p-4 '>Procesos</li>
                <li className='p-4 '>Contacto</li>
                <li className='p-4'><a target={'_blank'} href="http://webmail.intemec.mx/">WebMail</a></li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar
