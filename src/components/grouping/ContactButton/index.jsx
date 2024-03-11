"use client"

import { GithubLogo, InstagramLogo, TwitterLogo } from "@phosphor-icons/react";
import Link from "next/link";

const ContactButton = () => {
    return (
        <div>
            <Link
            href="https://www.instagram.com/farelnandas/"
            className="flex items-center mt-4 py-2 pl-2 gap-2 w-36 rounded-lg bg-sosmed-instagram hover:scale-105 transition-all"
          >
            <InstagramLogo size={32} />
            <h3 className="text-bold text-lg">Instagram</h3>
          </Link>
          <Link
            href="https://twitter.com/farel1577"
            className="flex items-center mt-4 py-2 pl-2 gap-2 w-36 rounded-lg bg-sosmed-twitter hover:scale-105 transition-all"
          >
            <TwitterLogo size={32} />
            <h3 className="text-bold text-lg">Twitter</h3>
          </Link>
          <Link
            href="https://github.com/tahukotak777"
            className="flex items-center mt-4 py-2 pl-2 gap-2 w-36 rounded-lg bg-sosmed-github hover:scale-105 transition-all border border-main-primary"
          >
            <GithubLogo size={32} />
            <h3 className="text-bold text-lg">Github</h3>
          </Link>
        </div>
    )
}

export default ContactButton;