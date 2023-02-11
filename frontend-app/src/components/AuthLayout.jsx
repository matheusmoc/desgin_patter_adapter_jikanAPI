import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useStateContext } from "../contexts/ContextProvider";

const AuthLayout = () => {
    const { token } = useStateContext();
    if (token) {
        return <Navigate to="/animes" />;
    }
    return (
        <div>
            <div>
                <div className="h-screen w-screen grid bg-gray-200">
                    <div className="hidden" />

                    <Outlet />
                </div>
                {/* access child element in route */}
            </div>
        </div>
    );
};

export default AuthLayout;
