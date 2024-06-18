import InputSearch from "./InputSearch";

const NavBar = () => {
    return (
        <header className="bg-main-neon">
            <div  className="flex md:flex-row flex-col justify-between p-4 gap-4 "> 
                <h1 className="font-bold text-2xl text-white select-none">TahuAnimeList</h1>
                <InputSearch />
            </div>
        </header>
    )
}

export default NavBar;