import React from 'react';
import Button from '@mui/material/Button';
import "./Login.css";
import {auth, provider} from "./firebase";
import { useStateValue } from './StateProvider';
import { actionTypes } from './reducer';
// import {signInWithPopup} from "firebase/auth";

// import 'firebase/auth';
// import 'firebase/provider';

function Login() {
    const [state,dispatch]=useStateValue();
    // console.log(state);
    const signIn = () =>{
        
        auth.signInWithPopup(provider)
        .then((result) => {
          console.log(result);
           dispatch({
            type:actionTypes.SET_USER,
            user:result.user,
           })
        })
        .catch((error) => {
            alert(error.message);
        });
    };

  return (
    <div className="login">
        <div className="login_container">
        <img 
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/512px-WhatsApp.svg.png"
      alt="WhatsApp Logo"
    />
        <div className="login_text">
            <h1>Sign in to WhatsApp</h1>
        </div>

        <Button  onClick={signIn}>
            Sign in With Google
        </Button>
        </div>  
    </div>
  );
}

export default Login;