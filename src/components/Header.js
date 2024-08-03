import React from 'react'
import logo  from '../Assets/images/Netflix_Logo_PMS.png'

const Header = () => {
  return (
    <div className='absolute z-40 bg-gradient-to-t to-black'>
      <img src={logo} alt="headLogo" className='h-20 w-40 '  />
    </div>
  )
}

export default Header
