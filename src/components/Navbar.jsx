import React, { useEffect, useState } from 'react'
import NavbarMobile from './NavbarMobile';

const Navbar = () => {
const [isMobile, setIsMobile] = useState(false)

useEffect(() => {
    const handleResize = () => {
        setIsMobile(window.innerWidth <= 800)
    }

    handleResize();

    window.addEventListener('resize', handleResize)

    return () => {
        window.removeEventListener('resize', handleResize)
    }
}, [])


  return (
    isMobile && <NavbarMobile />
  )
}

export default Navbar