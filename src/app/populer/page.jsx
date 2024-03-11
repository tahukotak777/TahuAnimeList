"use client";

import HeaderMenu from "@/components/Utilities/HeaderMenu";
import Pagination from "@/components/Utilities/Pagination";
import { useEffect, useState } from "react";
import { apiAnimeResponse } from "@/libs/api-libs";
import AllList from "@/components/AllList";

const page = () => {
  const [page, setpage] = useState(1);
  const [topAnime, setTopAnime] = useState([]);

  const fetchData = async () => {
    const data = await apiAnimeResponse("top/anime", `page=${page}&sfw=true`);
    setTopAnime(data);
  };

  useEffect(() => {
    fetchData();
  }, [page]);

  return (
    <>
      <HeaderMenu title={`Top Anime #${page}`}/>
      <AllList api={topAnime} />
      <Pagination page={page} lastPage={topAnime.pagination?.last_visible_page} setPage={setpage}/>
    </>
  );
};

export default page;
