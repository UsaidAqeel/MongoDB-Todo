import React, { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { LoginUser } from "../Redux/LoginUserSlicer";

const SignUpcmp = () => {
  const Dispatch = useDispatch();
  const Navigate = useNavigate();
  const notify = () => toast.error("fill the input filled");
  const { UserSignUp } = useSelector((status) => status.LoginUser);
  const [userEmail, setuserEmail] = useState("");
  const [userPassword, setuserPassword] = useState("");
  const [Get, setGet] = useState(false);
  const foo = () => {
    if (!userEmail || !userPassword) {
      notify();
      return;
    }
    const CreateUserDate = {
      email: userEmail,
      password: userPassword,
    };
    Dispatch(LoginUser(CreateUserDate));
    setGet(!Get);
  };
  useEffect(() => {
    if (UserSignUp.message == "Match") {
      localStorage.setItem("UserId", UserSignUp.user._id);
      Navigate("/");
    }
  });
  useEffect(() => {
    if (localStorage.getItem("UserId")) {
      Navigate("/");
    }
  }, []);
  return (
    <>
      <Toaster position="top-left" reverseOrder={true} />
      <main className="loginVideo">
        <div className="mainmore">
          <div className="cosmosLogin">
            <h1>Cosmos Login</h1>
            <input
              type="text"
              onChange={(e) => setuserEmail(e.target.value)}
              placeholder="Enter Your Email"
            />
            <input
              type="password"
              onChange={(e) => setuserPassword(e.target.value)}
              placeholder="Enter Your Password"
            />
            <div className="btn">
              <button onClick={foo}>SignUp</button>
            </div>
          </div>
        </div>
        <img
          src="https://images.unsplash.com/photo-1620121692029-d088224ddc74?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80"
          alt=""
        />
      </main>
    </>
  );
};

export default SignUpcmp;
