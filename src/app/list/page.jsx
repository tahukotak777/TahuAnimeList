"use client";

import ListAnime from "@/components/ListAnime";
import HeaderMenu from "@/components/Utilities/HeaderMenu";
import Pagination from "@/components/Utilities/Pagination";
import { apiAnimeResponse } from "@/libs/api-libs";
import { useEffect, useState } from "react";

const Page = () => {
  const [page, setPage] = useState(1);
  const [listAnime, setListAnime] = useState([]);
  
  const fetchApi = async () => {
    const data = await apiAnimeResponse("anime", `sfw=true&order_by=title&page=${page}`);
    setListAnime(data);
  };

  useEffect(() => {
    fetchApi();
  }, [page]);

  return (
    <div>
      <HeaderMenu title={`List Anime #${page}`} />
      <ListAnime api={listAnime} />
      <Pagination
        page={page}
        setPage={setPage}
        lastPage={listAnime.pagination?.last_visible_page}
      />
    </div>
  );
};

export default Page;
