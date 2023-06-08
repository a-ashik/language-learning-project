import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { app } from '../firebase/firebase.config';

export const AuthContext = createContext(null)
const auth = getAuth(app);
const Provider = new GoogleAuthProvider()


const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null)
    const [loader, setLoader] = useState(true)

    const creatUser = (email, password) =>{
        setLoader(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const login = (email, password) =>{
        setLoader(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    const logout =() =>{
        setLoader(true)
        return signOut(auth)
    }

    const googleLogin = () =>{
        setLoader(true)
        return signInWithPopup(auth,Provider)
      }

    const updateUserProfile = (name,photo) =>{
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
          })
        }
    useEffect(()=>{
       const unsubscribe = onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser)
            console.log(currentUser);
            setLoader(false)
        })

        return () => {
            return unsubscribe();
        }

    },[])

    const authInfo={
        user,
        creatUser,
        login,
        logout,
        googleLogin,
        updateUserProfile,
        loader
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider