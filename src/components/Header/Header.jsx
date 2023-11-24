import React from 'react'
import Navbar from "../Navbar/Navbar";
import SearchForm from "../SearchForm/SearchForm";
import "./Header.css"


const Header = () => {
  return (
    <div className='holder'>
      <header className="header">
        <Navbar />
        <div className="header-content flex flex-c text-center text-white">
          <h2 className='header-tiltle text-capitalize'>
            Find YOUR ADLIS
          </h2><br />
          <p className='header-text fs-18 fw3'>ADLIS, The platform where you will find Every Algerian book, Every Algerian's author book and a lot more.</p>
          <p className='header-text fs-18 fw3'>Enjoy you Reading, with ADLIS!</p>
          <br /><br />
          <SearchForm/>
        </div>
      </header>
    </div>
  )
}

export default Header
