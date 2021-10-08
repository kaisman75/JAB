import React from "react";
import HomeAnime from "./HomeAnime";
import styled from "styled-components";

class Header extends React.Component {
  render() {
    return (
      <Container>
        {/*--------animation---------*/}
        <HomeAnime />
        {/*--------animation---------*/}
        {/* --------navbar--------------*/}
        <Navbar>
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>about</a>
          </li>
          <li>
            <a>contact</a>
          </li>
          <li>
            <a>academie</a>
          </li>
        </Navbar>
        {/* --------navbar--------------*/}
        {/*---------home---------------*/}
        <Home>
          <Img> </Img>
        </Home>
        {/*---------home---------------*/}
      </Container>
    );
  }
}
export default Header;

const Container = styled.div`
  width: 100%;
  height: 100vh;
`;
const Navbar = styled.div`
  width: 100%;
  height: 30px;
  display: flex;
  text-decoration: none;
  list-style: none;
  justify-content: space-evenly;
  position: fixed;
  z-index: 1;
  cursor: pointer;
  font-size: 18px;
  font-weight: inherit;
  text-transform: uppercase;
  color:#147643;
  top:15px;
  letter-spacing: 3px;
  a:hover {
    color: #20bf6b;
   
  }
`;

const Home = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  p {
    color: black;
    font-size: 60px;
    text-transform: capitalize;
  }
`;
const Img = styled.div`
  width: 82%;
  height: 82%;
  background-image: url("/images/background/jab8.jpg");
  overflow: hidden;
  background-size:containe;
  background-position: center;
  background-repeat: no-repeat;
  border: 20px solid green;
`;
