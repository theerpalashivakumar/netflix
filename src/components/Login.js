import React, { useRef, useState } from "react";
import Header from "./Header";
import Logo from "../Assets/images/bg-image.jpg";
import { checkValidateData } from "../utils/validate";

const Login = () => {
  const [isSingIn, setIsSingIn] = useState(true);
  const [errorMsg,setEroorMsg] = useState(null)
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null)

  const HangleChange = () => {
    setIsSingIn(!isSingIn);
  };
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     checkValidateData(email.current.value, password.current.value);
//   };
  const handleButtonClick = () => {
    const messege = checkValidateData(email.current.value, password.current.value,name.current.value);
    console.log(email.current.value)
    console.log(password.current.value)
    setEroorMsg(messege)
  console.log(messege)

  };

  // const singInText = isSingIn ? "Sing In " :"Sing Up"
  return (
    <div>
      <Header />
      <div className="absolute">
        <img src={Logo} alt="logo" />
      </div>
      <div className="bg-black relative p-10  m-auto left-0 right-20 center top-28   w-1/4 bg-opacity-60 ">
        <form action="#" className="flex justify-center flex-col" onSubmit={(e)=>e.preventDefault()} autoComplete="off">
          <h1 className="text-3xl font-bold text-white font-mono mb-3">
            {isSingIn ? "Sing In " : "Sing Up"}
          </h1>
          <input
            ref={email}
            type="text"
            className=" bg-black text-white  p-3 rounded border border-gray-200 mb-2"
            placeholder="Email or Mobile Number "
          />
          {!isSingIn && (
            <input
              type="text"
              ref={name}
              className="bg-black text-white  p-3 rounded border border-gray-200 mb-2"
              placeholder="full Name "
            />
          )}

          <input
            type="password"
            autoComplete="new-password"
             name="current-password"
            ref={password}
            className="bg-black text-white  p-3 rounded border border-gray-200 mb-2"
            placeholder="Password "
          />
          <p className="text-red-600 text-bold">{errorMsg}</p>
          <button
            className="bg-red-700 text-white px-10 py-3 mt-2 mb-3"
            onClick={handleButtonClick}
          >
            {isSingIn ? "Sing In " : "Sing Up"}
          </button>
          <p className="text-white cursor-pointer" onClick={HangleChange}>
            {isSingIn
              ? "New to Netflix? Sign up now."
              : "Already registered Login Now"}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
