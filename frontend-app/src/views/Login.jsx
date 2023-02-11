import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import axiosClient from "../axios-client";
import { useStateContext } from "../contexts/ContextProvider";



//clear login without logout in browser console: localStorage.clear()

const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();

  const { setUser, setToken } = useStateContext();
  const [errors, setErrors] = useState(null);

  const submit = (e) => {
    e.preventDefault();

    const payload = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };

    // console.log(payload);

    setErrors(null); //clear errors
    axiosClient
      .post("/login", payload)
      .then(({ data }) => {
        setUser(data.user);
        setToken(data.token);
      })
      .catch((error) => {
        console.log(error);
        // debugger;
        const response = error.response;
        if (response && response.status === 422) {
          if (response.data.errors) {
            setErrors(response.data.errors);
          } else {
            setErrors({
              email: [response.data.message],
            });
          }
        }
      });
  };

  return (
    <form
      onSubmit={submit}
      className="xl:bg-gray-200 cover-login bg-cover xl:col-span-2 col-span-full flex items-center justify-center"
    >
      <div className="xl:max-w-[60vh] max-w-[40vh]">
        <div>
          {errors && ( //if errors exists
            <ul className="bg-red-500 p-3 rounded-lg text-center text-white font-semibold opacity-80 my-8">
              {Object.keys(errors).map((key) => (
                <li key={key}>{errors[key][0]}</li>
              ))}
            </ul>
          )}
        </div>

        <label className="inline-block w-full">
          <input
            ref={emailRef}
            type="email"
            placeholder="Email"
            className="input-login rounded-b-none"
          />
        </label>
        <label className="inline-block w-full">
          <input
            ref={passwordRef}
            type="password"
            placeholder="Senha"
            className="input-login rounded-t-none"
          />
        </label>
        <button className="w-full rounded text-gray-200 bg-blue-900 py-3 my-8 font-semibold">
          Entrar
        </button>
        <p>
          <Link
            to="/signup"
            className="underline text-blue-500 font-semibold"
          >
            Criar conta
          </Link>
        </p>
      </div>
    </form>
  );
};

export default Login;
