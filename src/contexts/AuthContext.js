import React, { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../utils/init-firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  sendPasswordResetEmail,
  confirmPasswordReset,
  sendEmailVerification,
  updateProfile
} from "firebase/auth";
const AuthContext = createContext({
  currentUser: null,
  register: () => Promise,
  login: () => Promise,
  logout: () => Promise,
  signInWithGoogle: () => Promise,
  forgotPassword:() => Promise,
  resetPassword:()=>Promise
});

export const useAuth = () => useContext(AuthContext);

export default function AuthContextProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  function register(name, email, password) {
    return createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Set the user's display name
        const user = userCredential.user;
        return updateProfile(user, {
          displayName: name,
        })
          .then(() => {
            // Send verification email
            return sendEmailVerification(user, {
              url: 'https://resource-finder-8c366.web.app/login'
            })
              .then(() => {
                console.log("Verification email sent to", user.email);
                // return userCredential;
              });
          });
      });
  }
  

  function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  function signInWithGoogle() {
    const provider = new GoogleAuthProvider()
    return signInWithPopup(auth,provider)
  }

  function logout() {
    return signOut(auth)
  }

  function forgotPassword(email) {
    return sendPasswordResetEmail(auth,email,{
      url:'https://resource-finder-8c366.web.app/login'
    });
  }

  function resetPassword(oobCode,newPassword) {
    return confirmPasswordReset(auth,oobCode,newPassword)
  }

  const value = {
    currentUser,
    register,
    login,
    logout,
    signInWithGoogle,
    forgotPassword,
    resetPassword
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
