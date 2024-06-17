"use client";

import AnimeListsV2 from "@/components/AnimeListsV2";
import Header from "@/components/Utilities/Header";
import ButtonScroll from "@/components/Utilities/ButtonScroll";
import { apiAnimeResponse } from "@/libs/api-libs";
import { useEffect, useState } from "react";
import { getDay, transDay } from "@/libs/day-libs";

const Page = () => {
  const [day, setDay] = useState(getDay());
  const [apiSchedules, setApiSchedules] = useState([]);

  const fetchApi = async () => {
    const data = await apiAnimeResponse("schedules", `filter=${transDay(day)}&sfw=true&kids=false`);
    setApiSchedules(data);
  };

  useEffect(() => {
    fetchApi();
  }, [day]);

  return (
    <div>
      <div className="flex overflow-x-auto flex-row flex-nowrap md:justify-center w-full">
        <ButtonScroll day="Senin" setDay={setDay} currentDay={day}/>  
        <ButtonScroll day="Selasa" setDay={setDay} currentDay={day}/>
        <ButtonScroll day="Rabu" setDay={setDay} currentDay={day}/>
        <ButtonScroll day="Kamis" setDay={setDay} currentDay={day}/>
        <ButtonScroll day="Jumat" setDay={setDay} currentDay={day}/>
        <ButtonScroll day="Sabtu" setDay={setDay} currentDay={day}/>
        <ButtonScroll day="Minggu" setDay={setDay} currentDay={day}/>
      </div>
      <div className="">
        <Header title={day} />
        <AnimeListsV2 api={apiSchedules} />
      </div>
    </div>
  );
};

export default Page;
