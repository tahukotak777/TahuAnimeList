import AnimeLists from "@/components/AnimeLists";
import Header from "@/components/Utilities/Header";
import AnimeListsV2 from "@/components/AnimeListsV2";
import {
  apiAnimeResponse,
  apiNestedAnimeResponse,
} from "@/libs/api-libs";

const Page = async () => {
  //fatch api and api nested with costom librari at folder libs/api-libs.js
  const topAnime = await apiAnimeResponse("top/anime", "limit=10");
  const recommendedAnime = await apiNestedAnimeResponse(
    "recommendations/anime",
    "entry",
    6
  );
  const airingAnime = await apiAnimeResponse("top/anime", "sfw=true&limit=6&filter=airing")

  return (
    <>
      <section>
        <Header title="Top Anime" linkTitle="lihat semua" linkHref="/populer" />
        <AnimeLists api={topAnime} />
      </section>
      <section className="py-6 md:py-4">
        <Header title="Rekomendasi" />
        <AnimeListsV2 api={recommendedAnime} />
      </section>
      <section className="py-6 md:py-4">
        <Header
          title="Top Anime Ditayangkan"
          linkTitle="lihat semua"
          linkHref="/airing"
        />
        <AnimeListsV2 api={airingAnime}/>
      </section>
    </>
  );
};

export default Page;
