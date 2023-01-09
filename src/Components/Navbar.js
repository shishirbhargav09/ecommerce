import React from "react";
import styled from "styled-components";
import { GoWatch } from "react-icons/go";
import { BsFillPersonFill } from "react-icons/bs";
import { ImCart } from "react-icons/im";
import { AiFillHeart } from "react-icons/ai";

function Navbar() {
  return (
    <Container>
      <div className="left_nav">
        <div className="logo">
          <GoWatch style={{ fontSize: "25px" }} />
          <h1>Watch Store</h1>
        </div>
      </div>
      <div className="right_nav">
        <BsFillPersonFill />
        <ImCart />
        <AiFillHeart />
      </div>
    </Container>
  );
}

export default Navbar;

const Container = styled.div`
z-index: 2;
  background-color: aliceblue;
  position: sticky;
  top: 0;
  height: 80px;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  .left_nav {
    /* padding: 0 20px; */

    .logo {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      gap: 5px;
    }
  }
  .right_nav{
    display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      gap: 1rem;
    svg{
        /* padding: 0 10px; */
        
        font-size: 25px;
    }
  }
`;
