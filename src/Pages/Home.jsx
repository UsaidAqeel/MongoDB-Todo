import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Navbarcmp from "../Components/Navbar/Navbar";
import { GetUserData } from "../Redux/GetUserSlicer";
import { UpdateUser } from "../Redux/UpdateUserSlicer";
import {BsFillTrashFill} from "react-icons/bs"

const Home = () => {
  const [hanldeUserData, sethanldeUserData] = useState({});
  const [UserTaskArray, setUserTaskArray] = useState([]);
  const [InputVal, setInputVal] = useState("");
  const [handlefoo, sethandlefoo] = useState(false);
  const Dispatch = useDispatch();
  const Selector = useSelector((state) => state);
  const id = localStorage.getItem("UserId");
  useEffect(() => {
    Dispatch(GetUserData(id));
  }, []);
  useEffect(() => {
    sethanldeUserData(Selector?.GetUser);
    setUserTaskArray(Selector?.GetUser?.UserData?.data?.User_Todo);
  }, [Selector]);
  useEffect(() => {
    {
      handlefoo && Dispatch(UpdateUser(UserTaskArray));
      Dispatch(GetUserData(id));
    }
    sethandlefoo(false);
  }, [handlefoo]);

  const foo = (e) => {
    e.preventDefault();
    sethandlefoo(true);
    setUserTaskArray((old) => [...old, InputVal]);
    setInputVal("")
  };
  const remove = (val) => {
    const MyArray = [...UserTaskArray]
    MyArray.splice(val ,1)
    setUserTaskArray([...MyArray])
    sethandlefoo(true)    
  }
  return (
    <>
      <Navbarcmp />
      <div className="center">
        <h1>let's build something through</h1>
        <div className="video">
          <video
            muted
            autoPlay
            loop
            src="https://cash-f.squarecdn.com/web/marketing/cb461f7638f0cb6c6cc77f084a0dccb4d560a90d/assets/images/home-2022/WEB_HERO_16x9_x264_RF30.mp4"
          ></video>
        </div>
      </div>
      <div className="todo">
        <Container>
          <Row md={1} lg={2} sm={1}>
            <Col className="child">
              {UserTaskArray?.map((val,ind) => {
                return (
                  <div className="task" key={ind}>
                    <p>{val}</p>
                    <BsFillTrashFill className="trash" onClick={() => remove(ind)} />
                  </div>
                );
              })}
            </Col>
            <Col className="child2">
              <form onSubmit={foo}>
                <input
                  type="text"
                  value={InputVal}
                  onChange={(e) => setInputVal(e.target.value)}
                  placeholder="Enter the task"
                />
              </form>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Home;
