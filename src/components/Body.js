import React from "react";
import Browse from "./Browse";
import Login from "./Login";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
  ]);

  // useEffect(() => {
  //   onAuthStateChanged(auth, (user) => {
  //     if (user) {
  //       const { uid, email, displayName,photoURL } = user;
  //       console.log(user);
  //       // dispatch(addUser({ uid: uid, email: email, displayName: displayName,photoURL:photoURL }));

  //       // ...
  //     } else {
  //       // User is signed out
  //       // ...
  //       dispatch(removeUser());
  //     }
  //   });
    
  // }, []);
  return (
    <div>
      <RouterProvider router={appRouter} />
      {/* <Login/>
      <Browse/> */}
    </div>
  );
};

export default Body;
