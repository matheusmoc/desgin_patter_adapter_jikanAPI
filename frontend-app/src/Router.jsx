import { createBrowserRouter, Navigate } from "react-router-dom";
import AuthLayout from "./components/AuthLayout";
import AnimeList from "./views/AnimeList";
import Login from "./views/Login";
import NotFound from "./views/NotFound";
import SignUp from "./views/SignUp";

const router = createBrowserRouter([
    //auth

    {
        path: "/",
        element: <AuthLayout />,
        children: [
            {
                path: "/login",
                element: <Login />,
            },
            {
                path: "/signup",
                element: <SignUp />,
            },
        ],
    },

    //home
    {
        path: "/animes",
        element: <AnimeList />,
    },

    //Error
    {
        path: "*",
        element: <NotFound />,
    },
]);

export default router;
