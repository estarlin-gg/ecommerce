import React, { createContext, useState, useEffect, useContext } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../firebase/config";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });
  }, []);

  const register = async (email, password) => {
    setLoading(true);
    await createUserWithEmailAndPassword(auth, email, password);
    setLoading(false);
  };

  const login = async (email, password) => {
    setLoading(true);
    await signInWithEmailAndPassword(auth, email, password);
    setLoading(false);
  };

  const logOut = async () => {
    setLoading(true);
    await signOut(auth);
    setLoading(false);
  };

  const loginWithGoogle = async () => {
    setLoading(true);
    const googleProvider = new GoogleAuthProvider();
    await signInWithPopup(auth, googleProvider);
    setLoading(false);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        register,
        login,
        setLoading,
        loading,
        logOut,
        loginWithGoogle,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
