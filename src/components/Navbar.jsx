import React, { useEffect, useState } from 'react'
import NavbarMobile from './NavbarMobile';
import NavbarLargeScreen from './NavbarLargeScreen';

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
    isMobile ? <NavbarMobile /> : <NavbarLargeScreen />
  )
}

export default Navbar