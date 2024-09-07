"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";
import "./styles.css";

export default function FlashcardsPage() {
  const [flashcards, setFlashcards] = useState("");
  const router = useRouter();

  // useEffect(() => {
  //   const query = new URLSearchParams(window.location.search);
  //   const flashcardsData = query.get("data");

  //   if (flashcardsData) {
  //     setFlashcards(decodeURIComponent(flashcardsData));
  //   } else {
  //     // Handle missing data
  //     router.push("/pages/flash"); // Redirect to home or handle error
  //   }
  // }, [router]);

  function reveal() {
    document.getElementById("answer").style.display = "flex";
  }

  return (
    <div className="p-10 border-white flex flex-col gap-15 ">
      <div className="flex gap-20 items-center p-10 ">
        <Link
          href="/pages/flash"
          className="bg-orange-400 text-2xl flex gap-2 w-fit rounded-xl p-4 border-white border-2 hover:shadow-lg hover:font-bold"
        >
          {" "}
          Go Back &uarr;{" "}
        </Link>
        <h1 className="text-5xl font-bold mb-4">Flashcards</h1>
      </div>
      <div className="flex gap-52 items-center p-10 border-white justify-center rounded-3xl border-4">
        <div className="prose border-4 p-20 gap-10 overflow-y-scroll h-5/12 flex flex-col w-fit border-orange-400 bg-orange-600 rounded-3xl h-full">
          {/* Display flashcards content */}
          <div className="bg-orange-400/80 p-16 w-fit h-fit gap-2 flex flex-col items-center text-left justify-center border-2 border-white rounded-xl ">
            <h1 className="text-3xl font-bold text-red-600 mb-4">
              Q: Your Sample Question.
            </h1>
            <div className="flex gap-4 justify-center items-center ">
              <input
                type="checkbox"
                className="appearance-none w-6 h-6 bg-white outline outline-offset-2 outline-orange-600 checked:bg-black  rounded-full cursor-pointer"
              ></input>
              <label htmlFor="input" className="text-2xl font-bold text-white">
                sample option 1
              </label>
            </div>
            <div className="flex gap-4 justify-center items-center ">
              <input
                type="checkbox"
                className="appearance-none w-6 h-6 bg-white outline outline-offset-2 outline-orange-600 checked:bg-black  rounded-full cursor-pointer"
              ></input>
              <label htmlFor="input" className="text-2xl font-bold text-white">
                sample option 2
              </label>
            </div>
            <div className="flex gap-4 justify-center items-center ">
              <input
                type="checkbox"
                className="appearance-none w-6 h-6 bg-white outline outline-offset-2 outline-orange-600 checked:bg-black  rounded-full cursor-pointer"
              ></input>
              <label htmlFor="input" className="text-2xl font-bold text-white">
                sample option 3
              </label>
            </div>
            <div className="flex gap-4 justify-center items-center ">
              <input
                type="checkbox"
                className="appearance-none w-6 h-6 bg-white outline outline-offset-2 outline-orange-600 checked:bg-black  rounded-full cursor-pointer"
              ></input>
              <label htmlFor="input" className="text-2xl font-bold text-white">
                sample option 4
              </label>
            </div>
            <button className="p-5 w-fit font-bold text-2xl bg-cyan-500 hover:text-white hover:bg-cyan-600 border-green-800 rounded-3xl">
              Save Question
            </button>
            <button
              onClick={reveal}
              className="p-5 w-fit font-bold text-2xl bg-green-500 hover:text-white hover:bg-green-600 border-green-800 rounded-3xl"
            >
              See Answer
            </button>
            <h1
              id="answer"
              className="answer text-2xl hidden
               italic mt-4 text-green-600"
            >
              {" "}
              Sample answer
            </h1>
          </div>
          {/* <pre>{flashcards}</pre> */}
        </div>
        <div className="prose border-4 p-20 gap-10 flex flex-col w-fit border-orange-400 bg-orange-600 rounded-3xl h-full">
          {/* Display flashcards content */}
          <div className="bg-orange-400/80 p-16 w-fit h-fit flex flex-col border-2 border-white rounded-xl ">
            <h1 className="text-2xl  mb-4">
              Questions Left:{" "}
              <span className="text-red-500 text-3xl font-bold">1/1</span>
            </h1>
            <p className="text-2xl  mb-4">
              Time left:{" "}
              <span className="text-green-700 font-bold text-3xl font-bold">
                15:00
              </span>
            </p>
            <button className="p-5 w-fit font-bold text-2xl bg-green-500 hover:text-white hover:bg-green-600 border-green-800 rounded-3xl">
              Submit Test
            </button>
          </div>
          {/* <pre>{flashcards}</pre> */}
        </div>
      </div>
    </div>
  );
}
