"use client"

import { FileSearch } from "@phosphor-icons/react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const page = () => {
  const router = useRouter()

  return (
    <div className="min-h-screen max-w-xl mx-auto flex justify-center items-center">
      <div className="flex justify-center items-center gap-4 flex-col">
        <FileSearch size={45} className="text-main-neon"/>
        <h1 className="text-main-neon text-3xl text-bold">NOT FOUND</h1>
        <button onClick={() => router.back()} className="text-main-primary hover:text-main-neon transition-all text-xl">Kembali</button>
      </div>
    </div>
  );
};

export default page;
