import React, { use } from "react";
import Navbar from "../../components/Navbar";
import { useAuth0 } from "@auth0/auth0-react";
import AuthButtons from "../../components/AuthButtons";
import { div, h1 } from "framer-motion/client";

const User = () => {
  const { loginWithRedirect, user, isAuthenticated, logout, isLoading } =
    useAuth0();
  console.log(user);

  if (isLoading) return <div>Loading...</div>;

  return (
    <>
      <div className="w-screen h-screen flex justify-center items-center">
        <h1 className=" ">
          {!isAuthenticated ? (
            <AuthButtons />
          ) : (
            <div className="w-screen h-screen flex justify-center items-center">
              <div className="w-[80%] h-[70%] py-5 flex justify-center items-center flex-col">
                <div className="w-full h-[10%] gap-5 flex justify-center items-center">
                  <img
                    src={user.picture}
                    alt=""
                    className="w-15 rounded-full"
                  />
                  <h1 className="text-2xl font-bold robotFont">{user.name}</h1>
                </div>
                <div className="w-[90%] h-[80%] flex  justify-center items-center">
                  <div className="w-[50%] flex flex-col justify-start items-start gap-5 px-5">
                    <div className="flex text-3xl font-bold items-center justify-center gap-5">
                      <p className="text-3xl robotFont font-bold">Name :</p>
                      <h1 className="text-2xl robotFont font-light">
                        {user.name}
                      </h1>
                    </div>
                    <div className="flex text-3xl justify-center gap-5">
                      <p className="text-3xl robotFont font-bold">
                        {" "}
                        Email Id :
                      </p>
                      <h1 className="font-light text-2xl robotFont">
                        {user.email}
                      </h1>
                    </div>
                    <div className="flex text-3xl justify-center gap-5">
                      <p className="font-bold robotFont flex gap-5">
                        Birthdate:
                        <h1 className="robotFont text-2xl font-light">
                          {user.birthdate || "Not Provided"}
                        </h1>
                      </p>
                    </div>
                    <div className="flex text-3xl justify-center gap-5">
                      <p className="text-3xl font-bold flex gap-5">Phone: </p>
                      <h1 className="robotFont text-2xl font-light">
                        {user.phone_number || "Not Provided"}
                      </h1>
                    </div>
                    <div className="flex text-3xl justify-center gap-5">
                      <p className="text-3xl font-bold flex gap-5">Gender : </p>
                      <h1 className="robotFont text-2xl font-light">
                        {user.gender || "Not Provided"}
                      </h1>
                    </div>
                  </div>
                  <div className="w-[50%] flex justify-center items-center">
                    <button
                      className="font-semibold bg-black  py-5 text-lg text-white hover:border-1 hover:border-black hover:text-black duration-500 hover:bg-transparent rounded-lg px-15 cursor-pointer loginButton"
                      onClick={() =>
                        logout({
                          logoutParams: { returnTo: window.location.origin },
                        })
                      }
                    >
                      Log Out
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </h1>
      </div>
    </>
  );
};

export default User;
