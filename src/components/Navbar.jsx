import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

function Navbar() {
  const navigate = useNavigate();
  const { user, logOut } = UserAuth();
  console.log(user, "33333322");
  const handleLogOut = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="flex items-center justify-between p-4 z-[100] w-full absolute  ">
        <Link to={"/"}>
          <h1 className="text-red-600 text-4xl font-bold cursor-pointer">
            NETFLIX
          </h1>
        </Link>
        {user?.email ? (
          <div>
            <Link to={"/Account"}>
              <button className="text-white pr-4">Account </button>
            </Link>
            <button
              onClick={handleLogOut}
              className="bg-red-600 p-2 rounded-md cursor-pointer text-white"
            >
              LogOut
            </button>
          </div>
        ) : (
          <div>
            <Link to={"/Login"}>
              <button className="text-white pr-4">Sign In </button>
            </Link>
            <Link to={"/SignUp"}>
              <button className="bg-red-600 p-2 rounded-md cursor-pointer text-white">
                Sign Up
              </button>
            </Link>
          </div>
        )}
      </div>
    </>
  );
}

export default Navbar;
