// import Image from "next/image";
// import Link from "next/link";
// import "./globals.css";

// export default function Home() {
//   return (
//     <main className="flex min-h-screen flex-col items-center justify-center">
//       <div className="z-10 max-w-5xl w-full flex flex-col justify-center items-center p-10">
//         <div className="z-10 max-w-5xl w-auuto rounded-xl flex flex-col justify-center items-center justify-between p-10 gap-10">
//           <h1 className=" text-3xl text-black text-center ">
//             {" "}
//             Explore and Earn Knowledge !{" "}
//           </h1>
//           <h1 className=" text-3xl text-black text-center ">
//             {" "}
//             In the{" "}
//             <span className="text-4xl hover:text-slate-900 font-bold ">
//               MOST FUN WAY!
//             </span>{" "}
//             with{" "}
//             <span className="text-4xl hover:text-slate-900 font-bold ">
//               FLASH
//             </span>{" "}
//           </h1>
//         </div>
//         <Link
//           href="/pages/flash"
//           className="bg-orange-500 top text-3xl  rounded-2xl w-98px h-auto p-5 m-20 border-4 border-white/40 shadow-2xl hover:bg-cyan-400 hover:border-orange/80 hover:shadow-3xl transition ease-in-out"
//         >
//           Enter FLASH Now!
//         </Link>
//       </div>
//     </main>
//   );
// }

"use client";

import Link from "next/link";
import { useRouter } from "next/navigation"; // Import useRouter from next/navigation
import "./globals.css";

export default function Home() {
  // Access the authenticated user
  const router = useRouter(); // Use useRouter from next/navigation

  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <div className="z-10 max-w-5xl w-full flex flex-col justify-center items-center p-10">
        <div className="z-10 max-w-5xl w-auto rounded-xl flex flex-col justify-center items-center justify-between p-10 gap-10">
          <h1 className="text-3xl text-black text-center">
            Explore and Earn Knowledge!
          </h1>
          <h1 className="text-3xl text-black text-center">
            In the{" "}
            <span className="text-4xl hover:text-slate-900 font-bold">
              MOST FUN WAY!
            </span>{" "}
            with{" "}
            <span className="text-4xl hover:text-slate-900 font-bold">
              FLASH
            </span>
          </h1>
        </div>

        <Link
          href="/pages/flash"
          className="bg-orange-500 text-3xl rounded-2xl w-98px h-auto p-5 m-20 border-4 border-white/40 shadow-2xl hover:bg-cyan-400 hover:border-orange/80 hover:shadow-3xl transition ease-in-out"
        >
          Enter FLASH Now!
        </Link>
      </div>
    </main>
  );
}
