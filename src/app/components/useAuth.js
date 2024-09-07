// // hooks/useAuth.js
// "use client";
// import { useEffect } from "react";
// import { useRouter } from "next/navigation";
// import { onAuthStateChanged } from "firebase/auth";
// import { auth } from "../lib/firebase";

// const useAuth = () => {
//   const router = useRouter();

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (user) => {
//       if (!user) {
//         router.push("/pages/login"); // Redirect to login if not authenticated
//       }
//     });
//     // Cleanup subscription on unmount
//     return () => unsubscribe();
//   }, [router]);
// };

// export default useAuth;

// hooks/useAuth.js
"use client";

import { useEffect, useState, useContext, createContext } from "react";
import { useRouter } from "next/navigation"; // Make sure the path to your firebase.js file is correct
import { auth } from "../lib/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const authData = useProvideAuth();
  return (
    <AuthContext.Provider value={authData}>{children}</AuthContext.Provider>
  );
}

export const useAuth = () => {
  return useContext(AuthContext);
};

function useProvideAuth() {
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user); // Set the user if authenticated
      } else {
        setUser(null); // Set the user to null if not authenticated
        router.push("/pages/login"); // Redirect to login if not authenticated
      }
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, [router]);

  const logout = async () => {
    try {
      await signOut(auth);
      setUser(null);
      router.push("/"); // Redirect to login after logout
    } catch (error) {
      console.error("Logout Error:", error);
    }
  };

  return {
    user,
    logout,
  };
}
