import Image from "next/image";
import Link from "next/link";

const ListAnime = ({ api }) => {
  return (
    <div className="flex flex-col p-4 gap-2 w-full">
      {api.data?.map((anime) => {
        return (
          <Link
            href={`/anime/${anime.mal_id}`}
            key={anime.mal_id}
            className="flex flex-row w-full h-20 gap-4 items-center shadow-xl p-2 hover:scale-95 text-main-primary hover:text-main-neon transition-all duration-300"
          >
            <Image
              src={anime.images.webp.image_url}
              alt="..."
              width={350}
              height={350}
              className="w-12 h-20"
            />
            <p className="">{anime.title}</p>
          </Link>
        );
      })}
    </div>
  );
};

export default ListAnime;
