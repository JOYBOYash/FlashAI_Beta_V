// src/app/components/DropzoneComponent.js
"use client";
import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";

function DropzoneComponent({ handleFileUpload }) {
  const onDrop = useCallback(
    (acceptedFiles) => {
      if (acceptedFiles.length > 0) {
        handleFileUpload(acceptedFiles[0]);
      }
    },
    [handleFileUpload]
  );

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: ".pdf", // Only accept PDF files
  });

  return (
    <div
      className="bg-orange-400 p-10 m-10 w-96 items-center cursor-pointer  hover:bg-orange-400/70 flex flex-col justify-center h-96 rounded-full"
      {...getRootProps()}
    >
      <input className="active:cursor-none" {...getInputProps()} />
      <h1 className="text-2xl cursor-pointer italic">Drop PDFs here &darr;</h1>
    </div>
  );
}

export default DropzoneComponent;
