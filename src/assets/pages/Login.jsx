import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../../context/AuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [error, setError] = useState();
  const { user, logIn } = UserAuth();
  const navigate = useNavigate();
  console.log(email, loginPassword, "99999999");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      console.log(email, loginPassword, "email from login");
      await logIn(email, loginPassword);
      navigate("/");
    } catch (error) {
      console.log(error);
      setError(error.massage);
    }
  };
  return (
    <>
      <div className="w-full h-screen">
        <img
          className="hidden sm:block absolute w-full object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/a99688ca-33c3-4099-9baa-07a2e2acb398/ca15fd28-b624-4852-8bfe-9cdd5c88475d/IN-en-20240520-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="/"
        />
        <div className="bg-black/60 fixed top-0 left-0 w-full h-screen "></div>
        <div className="fixed w-full px-4 py-24 z-50  ">
          <div className="max-w-[450px] h-[600px] mx-auto bg-black/75 text-white p-5 ">
            <div className="max-w-[320] mx-auto py-16">
              <h1 className="text-3xl font-bold">Sign In</h1>
              {error ? <p className="p-3 bg-red-400 my-2">{error}</p> : null}
              <form
                onSubmit={handleSubmit}
                className="w-full flex flex-col py-4"
              >
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  className="py-3 my-2 p-4 bg-gray-600 rounded"
                  type="email"
                  placeholder="email"
                  autoComplete="email"
                />
                <input
                  onChange={(e) => setLoginPassword(e.target.value)}
                  className="py-3 p-4 my-2 bg-gray-600 rounded"
                  type="password"
                  placeholder="password"
                  autoComplete="current-password"
                />
                <button className="bg-red-600 py-3 my-6 rounded font-bold">
                  {" "}
                  Sign In{" "}
                </button>
                <div>
                  <p>
                    <input className="mr-2" type="checkbox" />
                    Remember me
                  </p>
                  <p>Need Help ?</p>
                </div>
                <p className="py-8">
                  <span className="text-gray-600">New to Netflix ?</span>{" "}
                  <Link to={"/SignUp"}>Sign Up</Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
