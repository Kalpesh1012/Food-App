import React from "react";
import { Link, Outlet } from "react-router-dom";
import Profile from "./Profile";

class Aboutus extends React.Component {
  constructor() {
    super();
  }
  componentDidMount() {}
  render() {
    return (
      <>
        <div className="ml-4">
          <button
            className="ml-[700px] mt-2 h-7 w-32 border-2 bg-orange-400 rounded-md"
            onClick={() => change()}
          >
            Show Profile
          </button>
          <div className="flex">
            <h1 className="text-center font-bold text-6xl mt-36">
              Welcome to{" "}
              <span>
                <p className="">The world Of </p>
              </span>{" "}
              <p className="h-auto w-auto border-4 bg-orange-400 ">
                Khao Piyo and Sojao
              </p>
            </h1>
            <img
              className="ml-64 h-[400px] w-[400px] mt-20 mb-4 border-0"
              src="https://foodfire-chapter08.netlify.app/burger-image.7f87e5f3.png"
            ></img>
          </div>
        </div>
      </>
    );
  }
}
export default Aboutus;
