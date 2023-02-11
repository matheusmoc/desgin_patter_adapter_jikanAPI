import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";

const StateContext = createContext({
  user: null,
  token: null,
  setUser: () => {},
  setToken: () => {},
});

export const ContextProvider = ({ children }) => {
  const [user, setUser] = useState({ });

  const [token, _setToken] = useState(
    localStorage.getItem("ACCESS_TOKEN")
    // 123
  );

  // save and remove token access in sessionStorage
  const setToken = (token) => {
    _setToken(token);

    {
      token
        ? localStorage.setItem("ACCESS_TOKEN", token)
        : localStorage.removeItem("ACCESS_TOKEN");
    }
  };

  return (
    <StateContext.Provider
      value={{
        user,
        token,
        setUser,
        setToken,
      }}
    >
      {children}
      {/* render token access */}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
