import React, { createContext, useEffect, useState } from "react";
import app from "../Firebase/firebase.config";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Create User
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // User Login
  const login = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // Update the User Information
  const updateUser = (updateData) => {
    return updateProfile(auth.currentUser, updateData);
  };

  // User Logout
  const LogOut = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);

      // // API Secure
      // if (currentUser?.email) {
      //   const userData = { email: currentUser.email };
      //   axios
      //     .post("https://reco-sys-server-side.vercel.app/jwt", userData)
      //     .then((res) => {
      //       console.log(res.data);
      //     })
      //     .catch((error) => console.log(error));
      // }
      // console.log("user in the auth state change", currentUser);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  console.log(user);

  const authData = {
    auth,
    createUser,
    login,
    updateUser,
    LogOut,
    setUser,
    loading,
    setLoading,
    user,
  };

  return <AuthContext value={authData}>{children}</AuthContext>;
};

export default AuthProvider;
