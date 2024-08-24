import React from 'react'
import { Link } from 'react-router-dom'
import MobileNav from './MobileNav'
import MainNav from './MainNav'

const Header = () => {
  return (
    <header className='border-b-2 border-orange-400 py-3'>
        
        <div className='container mx-auto flex justify-between items-center'>
            <Link 
            to='/'
            className='text-3xl font-bold tracking-tight text-orange-400'>
                FreshBites.com
            </Link>
            <div className='md:hidden'>
              <MobileNav />
            </div>
            <div className='hidden md:block'>
              <MainNav />
            </div>
        </div>
    </header>
  )
}

export default Header