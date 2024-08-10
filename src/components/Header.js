import React, { useEffect } from "react";
import logo from "../Assets/images/Netflix_Logo_PMS.png";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const dispatch = useDispatch();

  const user = useSelector((store) => store.user);
  const navigate = useNavigate();
  const HandleSingOut = () => {
    // dispatch(removeUser)
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        // navigate('/home')
      })
      .catch((error) => {
        // An error happened.
        console.log(error);
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        console.log(user);
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );

        // ...
        navigate("/browse");
      } else {
        // User is signed out
        // ...
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, []);
  return (
    <div className="absolute z-40 bg-gradient-to-b from-black w-full flex justify-between items-center px-5">
      <img src={logo} alt="headLogo" className="h-20 w-40 " />
      {user && (
        <div>
          
          <img
            src={user?.photoURL}
            alt="image"
            className="h-8 w-10 rounded-3xl"
          />
          <button onClick={HandleSingOut} className="text-white">
            {user?.displayName} LogOut
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
