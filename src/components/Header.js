import React, { useEffect } from "react";
import logo from "../Assets/images/Netflix_Logo_PMS.png";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { changeGptViewSearch } from "../utils/gptSlice";
import { changeLanuageSettig } from "../utils/langSlice";
import { languageSet } from "../utils/consonent";

const Header = () => {
  const dispatch = useDispatch();

  const user = useSelector((store) => store.user);
  const status = useSelector((store) => store.gpt.gptViewSearch);
  
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
  const HandleGptSerachView =()=>{
    dispatch(changeGptViewSearch())
  }

  const handleLanguageChangeSetting =(e)=>{
    dispatch(changeLanuageSettig(e.target.value))

  }

  return (
    <div className="absolute z-40 bg-gradient-to-b from-black w-full flex justify-between   items-center px-5 py-2 ">
      <img src={logo} alt="headLogo" className="h-12 w-24 " />
      {user && (
        <div className=" flex items-center">
         {status &&<select className="p-2 rounded-md mr-2" onChange={handleLanguageChangeSetting}>
           
           {languageSet.map(language => <option key={language.identifier} value={language.identifier}> {language.name}</option>)}

          </select> } 
          <div className="mr-3">
            <button className="px-2 py-2 rounded-lg bg-purple-500 text-white" onClick={HandleGptSerachView}>
    
              {status?"Home" :"GPT Search"}
            </button>
          </div>
          <div className="flex">
            <img
              src={user?.photoURL}
              alt="image"
              className="h-8 w-10 rounded-3xl"
            />
            <button onClick={HandleSingOut} className="text-white ml-2">
              {user?.displayName} LogOut
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
