import React, { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { CreateUser } from "../Redux/Slicer";

const LoginCmp = () => {
  const Dispatch = useDispatch();
  const Navigate = useNavigate();
  const notify = () => toast.error("fill the input filled");
  const Already = () => toast.error("Email Already In Use");
  const message = useSelector((status) => status.SignUpuser.UserSignUp);
  const {SignUp , UserSignUp} = useSelector((status) => status.SignUpuser);
  const [userName, setuserName] = useState("");
  const [userEmail, setuserEmail] = useState("");
  const [UserFatherName, setUserFatherName] = useState("");
  const [userPassword, setuserPassword] = useState("");
  const [Get, setGet] = useState(false);
  const foo = () => {
    if (!userName || !userEmail || !userPassword || !UserFatherName) {
      notify();
      return;
    }
    const CreateUserDate = {
      name: userName,
      email: userEmail,
      fathername: UserFatherName,
      password: userPassword,
    };
    Dispatch(CreateUser(CreateUserDate));
    setGet(!Get);
  };
  useEffect(() => {
    if(message == "Sorry"){
      return
    }
    if (SignUp) {
      Navigate("/");
      localStorage.setItem("UserId",UserSignUp.data._id)
    }
  });
  useEffect(() => {
    if (message == "Sorry") {
      Already()
      console.log("work");
    }
  },[message]);
  useEffect(() => {
    if (localStorage.getItem("UserId")) {
      Navigate("/");
    }
  }, []);
  console.log(UserSignUp);
  return (
    <>
      <Toaster position="top-left" reverseOrder={true} />
      <main className="loginVideo">
        <div className="mainmore">
          <div className="cosmosLogin">
            <h1>Cosmos Login</h1>
            <input
              onChange={(e) => setuserName(e.target.value)}
              type="text"
              placeholder="Enter Your Name"
            />
            <input
              type="text"
              onChange={(e) => setUserFatherName(e.target.value)}
              placeholder="Enter Your FatherName"
            />
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

export default LoginCmp;
