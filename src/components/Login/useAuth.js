import React from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "../../firebase.config";
import { useState } from "react";
import { createContext } from "react";
import { useContext } from 'react';
import { useEffect } from 'react';
import {
    Redirect,
    Route
  } from "react-router-dom";


firebase.initializeApp(firebaseConfig);

const AuthContext =  createContext();

export const AuthContextProvider = (props) =>{
    const auth = Auth();
return <AuthContext.Provider value = {auth}>{props.children}</AuthContext.Provider>
}

export const useAuth = () => useContext(AuthContext);

const getUser = user => {
    const {displayName,email,photoURL} = user;
    return {
     name:displayName,
     email,
     photo:photoURL
    }
}


export const PrivateRoute = ({ children, ...rest }) => {
    const auth = useAuth();
    
    return (
      <Route
      {...rest}
      render={({ location }) =>
      auth.user ? (
          children
        ) : (
          <Redirect
            to={{
              pathname:"/login",
              state: { from: location }
            }}
         
          />
        )
      }
    />
    );
  }
  

const Auth = () => {
    const [user,setUser] = useState(null);
    const provider = new firebase.auth.GoogleAuthProvider();

   const signIn = () => {
    return firebase.auth().signInWithPopup(provider).then(result => { 
       
        const signedInUser = getUser(result.user)
        setUser(signedInUser);
 
        
       }).catch(error => {
         console.log(error.message);
       });
   }

   const signOut = () => {

    return firebase.auth().signOut().then(() => {
        setUser(null);
      }).catch(error => {
        // An error happened.
      });

   }

   useEffect(()=>{
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          const currentUser = getUser(user);
          setUser(currentUser);
        } else {
          // No user is signed in.
        }
      });
   },[])

return {
    user,
    signIn,
    signOut
}

}

export default Auth;