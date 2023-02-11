import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import AnimeCard from "../components/AnimeCard";
import { useStateContext } from "../contexts/ContextProvider";
import api from "../services/api";
import axiosClient from "../axios-client";

const AnimeList = () => {
    const [anime, setAnime] = useState([]); //api
    const { setUser, setToken } = useStateContext(); //global user name
    const { user, token } = useStateContext();

    //user name in context
    useEffect(() => {
        axiosClient.get("/user").then(({ data }) => {
            setUser(data);
        });
    }, []);

    //request api
    useEffect(() => {
        api.get("/animes")
            .then((response) => setAnime(response.data.data))
            .catch((err) => {
                console.error("ops! ocorreu um erro" + err);
            });
    }, []);

    //auth check
    if (!token) {
        return <Navigate to="/login" />;
    }

    //function logout
    const onLogout = (e) => {
        e.preventDefault();

        axiosClient.post("/logout").then(() => {
            setUser({});
            setToken(null);
        });
    };

    return (
        <div className="h-screen">
            <button
                className="text-xl font-semibold m-5 p-3 border-8 rounded-lg black"
                onClick={onLogout}
            >
                Deslogar como {user.name}
            </button>
            <div className="flex justify-center">
                <h2 className="font-semibold text-3xl my-6">Lista</h2>
            </div>
            <div className="grid grid-cols-3">
                {anime.map((animeTerm) => (
                    <div className="p-5">
                        <AnimeCard props={animeTerm} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AnimeList;
