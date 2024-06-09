import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  sendEmailVerification,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth, { app } from "../Firebase/firebase.config";
import PropTypes from "prop-types";
import { getDatabase, push, ref, set } from "firebase/database";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const verifyUser = () => {
    setLoading(true);
    return sendEmailVerification(auth.currentUser);
  };

  const signInPopUp = (provider) => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };

  const signInUser = (email, password) => {
    setLoading(false);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = async () => {
    setLoading(true);
    await signOut(auth);
    setUser(null);
    setLoading(false);
    // setLoading(true);
    // return signOut(auth);
  };

  const saveData = async (inputValue1, inputValue2) => {
    const db = getDatabase(app);
    const newDocRef = push(ref(db, "to-do"));
    set(newDocRef, {
      title: inputValue1,
      content: inputValue2,
    });
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        setLoading(false);
      }
    });
    return () => {
      unSubscribe();
    };
  }, []);

  const authInfo = {
    user,
    loading,
    createUser,
    verifyUser,
    signInPopUp,
    signInUser,
    logOut,
    saveData,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
