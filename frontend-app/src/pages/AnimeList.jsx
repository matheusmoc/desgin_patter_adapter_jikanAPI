import React, { useEffect, useState } from "react";
import AnimeCard from "../components/AnimeCard";
import api from "../services/api";

const AnimeList = () => {
    const [anime, setAnime] = useState();

    useEffect(() => {
        api
          .get("/animes")
          .then((response) => setUser(response.data))
          .catch((err) => {
            console.error("ops! ocorreu um erro" + err);
          });
      }, []);

    return (
        <div className="h-screen">
            <div className="flex justify-center">
                <h2 className="font-semibold text-3xl my-6">Lista</h2>
            </div>
            <div className="flex flex-wrap justify-center">
                <div className="p-5">
                    <AnimeCard />
                </div>
                <div className="p-5">
                    <AnimeCard />
                </div>
                <div className="p-5">
                    <AnimeCard />
                </div>
                <div className="p-5">
                    <AnimeCard />
                </div>
                <div className="p-5">
                    <AnimeCard />
                </div>
            </div>
        </div>
    );
};

export default AnimeList;
