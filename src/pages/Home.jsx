import React, { useEffect, useState } from "react";
import Heading from "../component/Heading";
import Footer from "../component/Footer";
import { useContext } from "react";
import { userContext } from "../contexts/userContext";
import { Navigate, useNavigate } from "react-router";

export default function Home() {
  const navigate = useNavigate();
  const { state, dispatch } = useContext(userContext);
  const [form, setForm] = useState({
    username: "",
    profile: "",
  });

  const [error, setError] = useState({
    username: false,
    profile: false,
  });

  const submitHandler = (event) => {
    event.preventDefault();
    const newUser = {
      id: state.lastId + 1,
    };
    console.log(newUser)
    Object.assign(newUser, { username: form.username });
    Object.assign(newUser, { profile: form.profile });
    dispatch({
      type: "EDIT_USER",
      payload: newUser,
    });
    setForm({
      username: "",
      profile: "",
    });
  };
  const onChangeHandler = (e) => {
    // validasi
    if (e.target.id === "username") {
      if (e.target.value.length < 6) {
        setError({
          [e.target.id]: true,
        });
      } else {
        setError({
          [e.target.id]: false,
        });
      }
    }
    setForm((form) => {
      return { ...form, [e.target.id]: e.target.value };
    });
  };
  useEffect(()=>{
    const key = "input";
    const existUser = localStorage.getItem(key);
    if(!existUser){
    navigate("/login")
    }
  })

  return (
    <>
      <Heading />
      <main className="h-screen w-screen min-h-fit">
        <h2 className="pt-20 text-3xl font-semibold mb-10">Well Come!</h2>
        <div className="flex justify-center">
          <form
            className="p-10 border-2 border-solid border-white h-fit w-[40%]"
            noValidate
            onSubmit={submitHandler}
          >
            <div>
              <h2 className="text-center font-bold  m-5 text-4xl border-b-2 border-solid border-b-blue-700">
                👤 User Info
              </h2>
              <p className="inline justify-around">Edit your Account Info...</p>
            </div>
            <br />
            <div className="m-5">
              <label className="text-2xl" htmlFor="username">
                User Name
              </label>
              <br />
              <input
                className="border-2 border-solid border-white p-1 w-full"
                type="text"
                name="username"
                id="username"
                placeholder="Enter your username"
                value={form.username}
                onChange={onChangeHandler}
              />
              <p className="min-h-12 font-bold text-red-600">
                {error.username && "Minimum Username 6 character"}
              </p>
            </div>

            <div className="m-5">
              <label className="text-2xl" htmlFor="profile">
                Profile
              </label>
              <br />
              <input
                className="border-2 border-solid border-white p-1 w-full"
                type="text"
                name="profile"
                id="profile"
                value={form.profile}
                onChange={onChangeHandler}
              />
            </div>
            <br />
            <button className="w-[60%] h-12" type="submit">
              Submit
            </button>
          </form>
        </div>
      </main>
      <Footer />
    </>
  );
}
