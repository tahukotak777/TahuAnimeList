"use client"

import { FileSearch } from "@phosphor-icons/react";
import Link from "next/link";

const page = () => {
  return (
    <div className="min-h-screen max-w-xl mx-auto flex justify-center items-center">
      <div className="flex justify-center items-center gap-4 flex-col">
        <FileSearch size={45} className="text-main-neon"/>
        <h1 className="text-main-neon text-3xl text-bold">NOT FOUND</h1>
        <Link href="/" className="text-main-primary hover:text-main-neon transition-all text-xl">Kembali</Link>
      </div>
    </div>
  );
};

export default page;
