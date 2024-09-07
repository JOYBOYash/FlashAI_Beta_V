// // src/app/lib/firebaseFunctions.js
// import { signInWithPopup, signOut } from "firebase/auth";
// import { auth, googleProvider } from "./firebase";

// // Login with Google
// export const loginWithGoogle = async () => {
//   try {
//     await signInWithPopup(auth, googleProvider);
//   } catch (error) {
//     console.error("Login error: ", error);
//   }
// };

// // Logout function
// export const logout = async () => {
//   try {
//     await signOut(auth);
//   } catch (error) {
//     console.error("Logout error: ", error);
//   }
// };
