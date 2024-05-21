import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  signInWithPopup,
} from "firebase/auth";
import { createContext } from "react";
import auth from "../../Firebase/firebase.config";
import PropTypes from "prop-types";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const verifyUser = () => {
    return sendEmailVerification(auth.currentUser);
  };

  const signInPopUp = (provider) => {
    return signInWithPopup(auth, provider);
  };

  const authInfo = {
    createUser,
    verifyUser,
    signInPopUp,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;

AuthProvider.proptypes = {
  children: PropTypes.node,
};
