import React, { createContext, useEffect, useState } from 'react';
import { auth } from './../firebase/firebase.config';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, signOut, updateProfile } from 'firebase/auth';

export const AuthContext = createContext()
 const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const provider = new GoogleAuthProvider();

    const createUser = (email,password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
    } 
    const loginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    const loginWithGoogle = () =>{
        return signInWithPopup(auth, provider)
    }
    const signOutUser = () =>{
        signOut(auth)
    }
    const updateUserProfile=(name, image)=>{
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: image
        })
    }
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser=>{
            setUser(currentUser);
            setLoading(false)
        })
        return(()=>{
            unsubscribe();
        })
    }
        ,[])
    const info = {
        user,
        setUser,
        createUser,
        loginUser,
        loginWithGoogle,
        signOutUser,
        updateUserProfile,
        loading,
        setLoading
    }

    return (
       <AuthContext.Provider value={info}>
        {children}
       </AuthContext.Provider>
    );
};

export default AuthProvider;