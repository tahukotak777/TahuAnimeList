"use client";

import { MagnifyingGlass } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";
import { useRef } from "react";

const InputSearch = () => {
  const searchRef = useRef();
  const router = useRouter();

  const searchHandler = (e) => {
    const keyword = searchRef.current.value

    if (!keyword || keyword.trim() == "") return

    if (e.key === "Enter" || e.type === "click") {
      e.preventDefault();
      router.push(`/search/${keyword}`);
    }
  };

  return (
    <div className="relative">
      <input
        placeholder="Cari Anime..."
        className="w-full rounded p-2"
        ref={searchRef}
        onKeyDown={searchHandler}
      />
      <button className="absolute top-2 end-2" onClick={searchHandler}>
        <MagnifyingGlass size={24} />
      </button>
    </div>
  );
};

export default InputSearch;
