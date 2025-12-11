import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router";
import { userContext } from "../contexts/userContext";
import ShowProfile from "./ShowProfile";

export default function Heading() {
  const { state, dispatch } = useContext(userContext);
  const navigate = useNavigate();
  const login = () => {
    navigate("/login", { replace: true });
  };

  const deleteUserContext = () => {
    dispatch({
      type: "DELETE_USER",
      payload: state.user.id,
    });
  };

  const deleteUserLocalStore = () => {
    const key = "input";
    localStorage.clear(key);
  }

  const logout = () =>{
    deleteUserContext();
    deleteUserLocalStore();
  }
  const existUser = state.user.username;

  const [display, setDisplay] = useState(false);
  const clickHandler = () => {
    setDisplay(!display);
  };

  return (
    <header className="flex justify-between pr-[20px] pl-[20px] pt-[15px] min-h-[10.5vh] h-fit min-w-fit bg-blue-300">
      <nav className="flex justify-center w-fit">
        <section className={`${display ? "block" : "hidden"}`} id="menu">
          <ul className="">
            <li className="m-3 bg-blue-700 w-screen h-15 flex justify-center items-center">
              <Link to={"/"}>
                <p className="text-center text-white text-2xl font-semibold">
                  Home
                </p>
              </Link>
            </li>
            <li className="m-3 bg-blue-700 w-screen h-15 flex justify-center items-center">
              <Link to={"/app"}>
                <p className="text-center text-white text-2xl font-semibold">
                  App Counter
                </p>
              </Link>
            </li>
            <li className="m-3 bg-blue-700 w-screen h-15 flex justify-center items-center">
              <Link to={"/productForm"}>
                <p className="text-center text-white text-2xl font-semibold">
                  Product Form
                </p>
              </Link>
            </li>
            <li className="m-3 bg-blue-700 w-screen h-15 flex justify-center items-center">
              <Link to={"/getRickAndMorty"}>
                <p className="text-center text-white text-2xl font-semibold">
                  Rick & Morty
                </p>
              </Link>
            </li>
            <li className="m-3 bg-blue-700 w-screen h-15 flex justify-center items-center">
              <Link to={"/review"}>
                <p className="text-center text-white text-2xl font-semibold">
                  Review App
                </p>
              </Link>
            </li>
            <li className="m-3 bg-blue-700 w-screen h-15 flex justify-center items-center">
              <Link to={"/customFetch"}>
                <p className="text-center text-white text-2xl font-semibold">
                  Custom Fetch
                </p>
              </Link>
            </li>
            <li
              className={`${
                existUser ? "flex" : "hidden"
              } m-3 bg-blue-700 w-screen h-15 flex justify-center items-center`}
            >
              <button
                onClick={logout
                //   () => {
                //   dispatch({
                //     type: "DELETE_USER",
                //     payload: state.user.id,
                //   });
                // }
              }
              >
                <p className="text-center text-white text-2xl font-semibold">
                  Logout
                </p>
              </button>
            </li>
            <li
              className={`${
                existUser ? "hidden" : "flex"
              } m-3 bg-blue-700 w-screen h-15 flex justify-center items-center`}
            >
              <button onClick={login} type="button">
                <p className="text-center text-white text-2xl font-semibold">
                  Login
                </p>
              </button>
            </li>
          </ul>
        </section>
      </nav>
      <div className="fixed top-0 left-0 bg-blue-600">
        <button
          type="button"
          onClick={clickHandler}
          className="block shadow-2xl h-15 w-15"
        >
          <div>☰</div>
        </button>
      </div>
      <div>
        <ShowProfile />
      </div>
    </header>
  );
}
