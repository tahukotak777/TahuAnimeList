import Image from "next/image";
import Link from "next/link";

const AllList = ({ api }) => {
    return (
        <div className="grid md:grid-cols-6 sm:grid-cols-4 grid-cols-3 gap-2 px-4">
          {api.data?.map((anime) => {
            return (
                <Link
                  href={`/anime/${anime.mal_id}`}
                  className="cursor-pointer text-main-primary hover:text-main-neon transition-all shadow-xl p-2"
                  key={anime.mal_id}
                >
                  <Image
                    src={anime.images.webp.image_url}
                    alt="..."
                    width={350}
                    height={350}
                    className="w-full max-h-64 object-cover hover:scale-105"
                  />
                  <h3 className="md:text-lg text-md p-4 text-center truncate">
                    {anime.title}
                  </h3>
                </Link>
            );
          })}
        </div>
      )
}

export default AllList