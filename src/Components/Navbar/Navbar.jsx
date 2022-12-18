import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./Navbar.scss";

const Navbarcmp = () => {
  const navigate = useNavigate()
  const [bgColor, setbgColor] = useState("trans");
  window.addEventListener("scroll", () => {
    window.scrollY > 20 ? setbgColor("navcolor") : setbgColor("trans");
  });
  const Data = useSelector(state => state)
  const Logout = () => {
   localStorage.removeItem("UserId");
   navigate("/login")
  }
  return (
    <>
      <Navbar className={bgColor} expand="lg">
        <Container>
          <Navbar.Brand
            className={"href"}
            style={{ fontSize: "30px" , fontWeight : "bolder"}}
            href="#home"
          >
           Cosmos
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
            <Nav.Link  className={"href"}>
                {Data?.GetUser?.UserData?.data?.User_Name}
              </Nav.Link>
              <Nav.Link className={"href"}>
                Home
              </Nav.Link>
              <Nav.Link className={"href"} onClick={Logout} >
                Logout
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Navbarcmp;
