import React from 'react'
import logo  from '../Assets/images/Netflix_Logo_PMS.png'
import { useDispatch, useSelector } from 'react-redux'
import { removeUser } from '../utils/userSlice'
import { signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  // const dispatch = useDispatch()

  const user = useSelector(store=>store.user)
  const navigate = useNavigate()
  const HandleSingOut = ()=>{
    // dispatch(removeUser)
    signOut(auth).then(() => {
      // Sign-out successful.
      navigate('/home')
      
    }).catch((error) => {
      // An error happened.
      console.log(error)
    });
  }
  return (
    <div className='absolute z-40 bg-gradient-to-b from-black w-full flex justify-between items-center'>
      <img src={logo} alt="headLogo" className='h-20 w-40 '  />
      {user &&(
        <div>
        <button onClick={HandleSingOut}> {user} LogOut</button>
        <img src={user?.photoURL} alt="image"   className='h-24 w-10'/>
        </div>
      )}
    </div>
  )
}

export default Header
