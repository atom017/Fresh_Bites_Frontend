import React from 'react'
import PropTypes from 'prop-types'
import Header from 'src/components/Header';
import Hero from 'src/components/Hero';
import Footer from 'src/components/Footer';

type Props={
    children:React.ReactNode;
    showHero?:boolean;
}

function Layout({children,showHero=false}:Props) {
  return (
    <div className='flex flex-col min-h-screen'>
      <Header/>
      {showHero && <Hero/>}
      
      <div className="container mx-auto flex-1 py-10">
        {children}
      </div>
      <Footer/>
    </div>
  )
}

Layout.propTypes = {}

export default Layout
