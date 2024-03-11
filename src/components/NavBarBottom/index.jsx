"use client";

import { CalendarBlank, House, List, Info } from "@phosphor-icons/react";
import Link from "next/link";

const NavBarBottom = () => {
  return (
    <div className="fixed bottom-0 w-full flex justify-center">
      <div className=" md:w-auto w-full bg-main-neon p-2 flex gap-4 justify-center rounded-md md:bg-opacity-80">
        <Link
          href="/"
          className="hover:bg-main-primary hover:bg-opacity-100 transition-all rounded-lg p-1"
        >
          <House size={32} />
        </Link>
        <Link
          href="/schedules"
          className="hover:bg-main-primary hover:bg-opacity-100 transition-all rounded-lg p-1"
        >
          <CalendarBlank size={32} />
        </Link>
        <Link
          href="/list"
          className="hover:bg-main-primary hover:bg-opacity-100 transition-all rounded-lg p-1"
        >
          <List size={32} />
        </Link>
        <Link
          href="/aboute"
          className="hover:bg-main-primary hover:bg-opacity-100 transition-all rounded-lg p-1"
        >
          <Info size={32} />
        </Link>
      </div>
    </div>
  );
};

export default NavBarBottom;
