"use client";

import { Browser, YoutubeLogo } from "@phosphor-icons/react";
import Link from "next/link";

const InspiredButton = () => {
  return (
    <div>
      <h3 className="pt-3 text-xl text-bold">youtube Dea Afrizal :</h3>
      <Link
        href="https://www.youtube.com/@deaafrizal"
        className="flex items-center mt-4 py-2 pl-2 gap-2 w-36 rounded-lg bg-sosmed-youtube hover:scale-105 transition-all"
      >
        <YoutubeLogo size={32} />
        <h3 className="text-lg text-bold">Youtube</h3>
      </Link>
      <h3 className="pt-8 text-xl text-bold">Api anime list :</h3>
      <Link
        href="https://docs.api.jikan.moe/"
        className="flex items-center mt-4 py-2 pl-2 gap-2 w-36 rounded-lg bg-sosmed-jikan hover:scale-105 transition-all"
      >
        <Browser size={32} />
        <h3 className="text-lg text-bold">Jikan Api</h3>
      </Link>
    </div>
  );
};

export default InspiredButton;
