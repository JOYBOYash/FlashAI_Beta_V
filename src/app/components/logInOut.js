// "use client";

// import { useAuth } from "./useAuth";

// export default function AuthButton() {
//   const { user, logout } = useAuth();

//   return (
//     <div>
//       <div className="flex items-center p-2 m-2 text-center">
//         <p>Welcome, {user.displayName}</p>
//         <button
//           className="bg-red-600 p-5 m-2 text-center text-white/80 hover:text-white hover:bg-red-700"
//           onClick={logout}
//         >
//           Logout
//         </button>
//       </div>
//     </div>
//   );
// }

// components/AuthButton.js
// "use client";
// import { useAuth } from "./useAuth";
// import { useRouter } from "next/navigation";

// export default function AuthButton() {
//   const { user, logout } = useAuth();
//   const router = useRouter();

//   return (
//     <div>
//       {user ? ( // Check if the user is available
//         <div className="flex items-center p-2 m-2 text-center">
//           <p>Welcome, {user.displayName}</p>
//           <button
//             className="bg-red-600 p-5 m-2 text-center text-white/80 hover:text-white hover:bg-red-700"
//             onClick={logout}
//           >
//             Logout
//           </button>
//         </div>
//       ) : (
//         <p>Loading...</p>
//       )}
//     </div>
//   );
// }
// components/AuthButton.js
"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation"; // Use next/navigation for Next.js 13
import { auth } from "../lib/firebase"; // Make sure the path to your firebase.js file is correct
import { onAuthStateChanged, signOut } from "firebase/auth";

export default function AuthButton() {
  const [user, setUser] = useState(null);
  const router = useRouter();

  // Check if the user is logged in when the component mounts
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser); // Set user if authenticated
      } else {
        setUser(null); // Set user to null if not authenticated
        router.push("/pages/login"); // Redirect to login if not authenticated
      }
    });

    // Cleanup the subscription on unmount
    return () => unsubscribe();
  }, [router]);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setUser(null); // Clear user state after logout
      router.push("/"); // Redirect to login after logout
    } catch (error) {
      console.error("Logout Error:", error);
    }
  };

  return (
    <div>
      {user ? ( // Check if the user is available
        <div className="w-5/12 flex flex-col bg-orange-500/40 rounded-3xl border-4 border-orange-600/80 items-center p-10 m-2 text-center">
          <p className="text-3xl  flex flex-col items-center">
            Welcome,
            <span className="text-underline italic text-cyan-400 bg-transparent ">
              {user.displayName}
            </span>
          </p>
          <button
            className="bg-red-600 rounded-full hover:font-bold p-2 m-2 text-center text-white/80  transition ease-in-out hover:text-white hover:bg-red-700"
            onClick={handleLogout}
          >
            <img src="../power.svg" className="w-6"></img>
          </button>
        </div>
      ) : (
        <p className=" text-3xl text-center text-bold text-orange-600/80">
          Loading...
        </p> // Optionally show a loading message or a redirect
      )}
    </div>
  );
}
