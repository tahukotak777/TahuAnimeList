"use client";

import AllList from "@/components/AllList";
import HeaderMenu from "@/components/Utilities/HeaderMenu";
import Pagination from "@/components/Utilities/Pagination";
import { apiAnimeResponse } from "@/libs/api-libs";
import { useEffect, useState } from "react";

const Page = async () => {
  const [page, setPage] = useState(1);
  const [airingAnime, setAiringAnime] = useState([]);
  const fetchApi = async () => {
    const data = await apiAnimeResponse(
      "top/anime",
      `sfw=true&page=${page}&filter=airing`
    );
    setAiringAnime(data);
  };
  useEffect(() => {
    fetchApi();
  }, [page]);

  return (
    <div>
      <HeaderMenu title={`Top Anime Ditayangkan #${page}`} />
      <AllList api={airingAnime} />
      <Pagination
        page={page}
        setPage={setPage}
        lastPage={airingAnime.pagination?.last_visible_page}
      />
    </div>
  );
};

export default Page;
