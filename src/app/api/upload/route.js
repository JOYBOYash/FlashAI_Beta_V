// src/app/api/upload/route.js
import { NextResponse } from "next/server";
import PdfParse from "pdf-parse";

export async function POST(request) {
  const file = await request.formData();
  const pdf = file.get("file");

  const buffer = await pdf.arrayBuffer();
  const data = await PdfParse(buffer);

  return NextResponse.json({ text: data.text });
}
