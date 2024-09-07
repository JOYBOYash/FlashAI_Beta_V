// /src/app/login/page.js
"use client";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../../lib/firebase";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();

  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      router.push("/pages/flash");
    } catch (error) {
      console.error("Error signing in", error);
    }
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
      <div className="flex flex-col items-center gap-5 p-20 m-10 border-4 border-white/80 rounded-2xl ">
        <h1 className="text-3xl text-white p-2 m-2 font-bold">Login</h1>
        <button
          onClick={handleGoogleLogin}
          className="p-5 text-2xl flex items-center hover:shadow-2xl justify-center gap-2 bg-orange-500 border-4 border-orange-600/80 hover:text-black hover:text-2xl hover:font-bold  hover:border-cyan-500/80 hover:shadow-3xl transition ease-in-out hover:bg-cyan-400 text-white rounded-lg"
        >
          Sign in with Google
          <img
            src="../google.svg"
            className="w-10 p-2 bg-white rounded-full"
          ></img>
        </button>
      </div>
    </main>
  );
}
