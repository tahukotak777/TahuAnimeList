import { apiAnimeResponse } from "@/libs/api-libs";
import DetailBox from "@/components/DetailBox";
import VideoPlayer from "@/components/Utilities/VideoPlayer";
import Image from "next/image";
import StreamingPlatform from "@/components/StreamingPlatform";

const Page = async ({ params: { id } }) => {
  const anime = await apiAnimeResponse(`anime/${id}/full`);

  return (
    <div>
      <div className="pt-4 px-4">
        <h2 className="text-main-primary text-2xl">{`${anime.data.title} - (${anime.data.year})`}</h2>
      </div>
      <div className="grid grid-cols-1 px-4 pt-4">
        <VideoPlayer youtubeId={anime.data.trailer.youtube_id} />
        <div className="flex md:flex-wrap flex-nowrap justify-center items-center gap-4 pt-3 overflow-x-auto text-main-neon w-auto">
          <DetailBox title="Score" value={anime.data.score} />
          <DetailBox title="Episode" value={anime.data.episodes} />
          <DetailBox title="Rank" value={anime.data.rank} />
        </div>
      </div>
      <div className="py-4 px-4 flex sm:flex-nowrap flex-wrap gap-4 text-main-primary justify-center items-start">
        <Image
          src={anime.data.images.webp.image_url}
          alt={anime.data.images.jpg}
          width={350}
          height={400}
          className="flex flex-col justify-center items-center"
        />
        <div>
          <h3 className="text-2xl text-bold pb-2">{`${anime.data.duration} || ${anime.data.rating}`}</h3>
          <p className="text-justify text-md">{anime.data.synopsis}</p>
        </div>
      </div>
      <div className="p-4">
        <StreamingPlatform platform={anime.data.streaming} />
      </div>
    </div>
  );
};

export default Page;
