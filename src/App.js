import React from "react";
import {useDispatch, useSelector} from "react-redux";
import './App.css';
import Sidebar from "./Sidebar";
import Chat from "./Chat";
import {selectUser} from "./features/userSlice";
import Login from "./Login";
import {auth} from "./firebase";
import { login, logout} from "./features/userSlice";
import {useEffect} from 'react';
import ExpandMore from '@material-ui/icons/ExpandMore';

function App() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser)

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("user is", authUser);
        if(authUser){
          //user is loggedin
          dispatch(
            login({
            uid: authUser.uid,
            photo: authUser.photoURL,
            email: authUser.email,
            displayName: authUser.displayName,
          })
        )
        }else{
          //user is not loggedout
          dispatch(logout());

        }
      });

     }, [dispatch]);
  return (
    //Ben naming Convention
    <div className="app">
      {user ? (
        <>
          <Sidebar/>
          <Chat/>
        </>
      ): (
        <Login />
      )}   

    </div>
  );
}

export default App;
