"use client";

import { CalendarBlank, House, List, Info } from "@phosphor-icons/react";
import Link from "next/link";
import { useState } from "react";

const NavBarBottom = () => {
  const [page, setPage] = useState('home')

  return (
    <div className="fixed bottom-0 w-full flex justify-center">
      <div className=" md:w-auto w-full bg-main-neon p-2 flex gap-4 justify-center rounded-md md:bg-opacity-80">
        <Link
          href="/"
          className={`hover:scale-110 opacity-80 transition-all rounded-lg p-1 ${page === 'home' ? 'bg-main-primary' : 'hover:bg-main-primary'}`}
          onClick={() => setPage('home')}
        >
          <House size={32} />
        </Link>
        <Link
          href="/schedules"
          className={`hover:scale-110 opacity-80 transition-all rounded-lg p-1 ${page === 'schedules' ? 'bg-main-primary' : 'hover:bg-main-primary'}`}
          onClick={() => setPage('schedules')}
        >
          <CalendarBlank size={32} />
        </Link>
        <Link
          href="/list"
          className={`hover:scale-110 opacity-80 transition-all rounded-lg p-1 ${page === 'list' ? 'bg-main-primary' : 'hover:bg-main-primary'}`}
          onClick={() => setPage('list')}
        >
          <List size={32} />
        </Link>
        <Link
          href="/aboute"
          className={`hover:scale-110 opacity-80 transition-all rounded-lg p-1 ${page === 'aboute' ? 'bg-main-primary' : 'hover:bg-main-primary'}`}
          onClick={() => setPage('aboute')}
        >
          <Info size={32} />
        </Link>
      </div>
    </div>
  );
};

export default NavBarBottom;
