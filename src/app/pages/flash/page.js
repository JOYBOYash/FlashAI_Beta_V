// src/app/flash/page.js
"use client";
import React, { useState } from "react";
import DropzoneComponent from "@/app/components/DropzoneComponent";
import NavbarComponent from "@/app/components/NavbarComponent";

function Flash() {
  const [flashcards, setFlashcards] = useState(null);

  const handleFileUpload = async (file) => {
    const formData = new FormData();
    formData.append("file", file);

    // Extract text from PDF
    const res = await fetch("/api/upload", {
      method: "POST",
      body: formData,
    });
    const { text } = await res.json();

    // Generate flashcards using Gemini AI
    const resFlashcards = await fetch("/api/generate-flashcards", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ extractedText: text }),
    });
    const { flashcards } = await resFlashcards.json();

    setFlashcards(flashcards);
  };

  return (
    <div className="flex w-full gap-20 p-2 flex-col">
      <NavbarComponent />
      <div className="w-full text-white items-center gap-10 rounded-2xl p-20 flex-col justify-center bg-orange-300 flex">
        <section className="text-white bg-white/50 w-100 h-100 rounded-full items-center flex-col border-2 border-white-80 justify-center p-10 flex">
          <DropzoneComponent handleFileUpload={handleFileUpload} />
        </section>
        <h1 className="text-2xl text-black font-bold">
          Generate Flashcards from your pdf notes and materials !
        </h1>

        {flashcards && (
          <div className="mt-5">
            <h2>Generated Flashcards:</h2>
            <pre>{flashcards}</pre>
          </div>
        )}
      </div>
    </div>
  );
}

export default Flash;
