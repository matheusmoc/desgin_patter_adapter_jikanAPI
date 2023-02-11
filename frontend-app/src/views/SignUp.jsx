import React from "react";
import { useState } from "react";
import { useRef } from "react";
import { Link } from "react-router-dom";
import axiosClient from "../axios-client";
import { useStateContext } from "../contexts/ContextProvider";

const SignUp = () => {
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmationRef = useRef();

  const [errors, setErrors] = useState(null);
  //context
  const { setUser, setToken } = useStateContext();


  const signUpSubmit = (e) => {
    // debugger;
    e.preventDefault();

    //input value
    const payload = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
      password_confirmation: passwordConfirmationRef.current.value,
    };

    // console.log(payload);
    axiosClient
      .post("/signup", payload)
      .then(({ data }) => {
        setUser(data.user);
        setToken(data.token);
      })
      .catch((error) => {
        console.log(error);
        const response = error.response;
        if (response && response.status === 422) {
        //   console.log(response.data.errors);
          setErrors(response.data.errors);
        }
      });
  };

  return (
    <form
      onSubmit={signUpSubmit}
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
            ref={nameRef}
            placeholder="Nome completo"
            className="input-login rounded-b-none"
          />
        </label>

        <label className="inline-block w-full">
          <input
            ref={emailRef}
            type="email"
            placeholder="Email"
            className="input-login rounded-none"
          />
        </label>

        <label className="inline-block w-full">
          <input
            ref={passwordRef}
            type="password"
            placeholder="Senha"
            className="input-login rounded-none"
          />
        </label>

        <label className="inline-block w-full">
          <input
            ref={passwordConfirmationRef}
            type="password"
            placeholder="Confirmar senha"
            className="input-login rounded-t-none"
          />
        </label>

        <button className="w-full rounded text-gray-200 bg-blue-900 py-3 my-8 font-semibold">
          Cadastrar
        </button>
        <div className="flex justify-center">
          <Link to="/login">
            <p className="flex justify-center w-[20vh] rounded text-gray-800 bg-yellow-400 py-3 my-8 font-semibold">
              Já sou cadastrado
            </p>
          </Link>
        </div>
      </div>
    </form>
  );
};

export default SignUp;
