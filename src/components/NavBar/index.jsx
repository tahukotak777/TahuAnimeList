import Link from "next/link";
import InputSearch from "./InputSearch";

const NavBar = () => {
    return (
        <header className="bg-main-neon">
            <div  className="flex md:flex-row flex-col justify-between p-4 gap-4 "> 
                <Link href="/" className="font-bold text-2xl text-white">TahuAnimeList</Link>
                <InputSearch />
            </div>
        </header>
    )
}

export default NavBar;