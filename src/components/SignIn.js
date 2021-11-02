import React from 'react';
import firebase from 'firebase/app';
import {auth} from '../firebase.js';
import { Button } from '@material-ui/core';

function SignIn() {
   const signInWithGoogleHandler = () => {
      const provider = new firebase.auth.GoogleAuthProvider();
      auth.signInWithPopup(provider);
    }

    return(
        <div>
           <Button onClick={signInWithGoogleHandler} style={{display:'flex', justifyContent:'center', margin:'auto', alignItems:'center',fontSize:'25px'}}>Sign In with Google</Button>
        </div>
    );
}

export default SignIn;