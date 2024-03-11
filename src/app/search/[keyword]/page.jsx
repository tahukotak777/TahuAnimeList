"use client";

import { apiAnimeResponse } from "@/libs/api-libs";
import AnimeLists from "@/components/AnimeLists";
import Header from "@/components/Utilities/Header";
import Pagination from "@/components/Utilities/Pagination";
import { useEffect, useState } from "react";

const Page = async ({ params: {keyword} }) => {
  const decodeKeyword = decodeURI(keyword);
  const [page, setPage] = useState(1);
  const [searchAnime, setSearchAnime] = useState([]);

  const fetchApi = async () => {
    const data = await apiAnimeResponse("anime", `q=${decodeKeyword}&page=${page}&sfw=true`)
    setSearchAnime(data);
  };

  useEffect(() => {
    fetchApi();
  }, [page]);

  return (
    <section>
      <Header title={`Pencarian untuk "${decodeKeyword}" #${page}`} />
      <AnimeLists api={searchAnime} />
      <Pagination
        page={page}
        lastPage={searchAnime.pagination?.last_visible_page}
        setPage={setPage}
      />
    </section>
  );
};

export default Page;
