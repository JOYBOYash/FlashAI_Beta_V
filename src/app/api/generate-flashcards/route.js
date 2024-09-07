// src/app/api/generate-flashcards/route.js
import { NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";

export async function POST(request) {
  const { extractedText } = await request.json();

  const genAI = new GoogleGenerativeAI(
    process.env.NEXT_PUBLIC_GOOGLE_GEMINI_API_KEY
  );
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });

  const prompt = `${extractedText}\n\nGenerate flashcards with key questions and answers.`;
  const result = await model.generateContent(prompt);
  const response = await result.response;
  const flashcards = response.text();

  return NextResponse.json({ flashcards });
}
