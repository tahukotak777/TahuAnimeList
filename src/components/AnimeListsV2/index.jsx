import Image from "next/image";
import Link from "next/link";

const AnimeListsV2 = ({ api }) => {
  return (
    <div className="grid md:grid-cols-6 sm:grid-cols-5 grid-cols-3 grid-rows-1 gap-4 px-4">
      {api.data?.map((anime) => {
        return (
            <Link
              href={`/anime/${anime.mal_id}`}
              className="cursor-pointer text-main-primary hover:text-main-neon transition-all shadow-xl relative hover:scale-105"
              key={anime.mal_id}
            >
              <Image
                src={anime.images.webp.image_url}
                alt="..."
                width={350}
                height={350}
                className="w-full max-h-64 object-cover"
              />
              <h3 className="truncate absolute bottom-0 left-0 text-center md:text-lg text-md p-4 bg-main-dark opacity-80 w-full">
                {anime.title}
              </h3>
            </Link>
        );
      })}
    </div>
  );
};

export default AnimeListsV2;
