import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import app from "../Firebase/Firebase.config";
export const AuthContext = createContext();

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading,setLoading] = useState(true);
  console.log(loading,user);

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const logOut = ()=>{
    return signOut(auth);
  }

 const signIn = (email,password)=>{
  return signInWithEmailAndPassword(auth,email,password);
 }

  useEffect(() => {
   const unsubcribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return ()=>{
      unsubcribe();
    }
  }, []);

  const authData = {
    user,
    setUser,
    loading,
    setLoading,
    createUser,
    logOut,
    signIn
  };

  return <AuthContext value={authData}>{children}</AuthContext>;
};

export default AuthProvider;
