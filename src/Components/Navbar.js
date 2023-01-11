import React from "react";
import styled from "styled-components";
import WatchIcon from "@mui/icons-material/Watch";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Navbar() {
  const {cartItems} = useSelector((state) => state.cart)
  return (
    <Container>
      <div className="left_nav">
        <Link to="/">
          <div className="logo">
            <WatchIcon style={{ fontSize: "25px" }} />
            <h1>Watch Store</h1>
          </div>
        </Link>
      </div>
      <div className="right_nav">
        <Link to="/login">
          <PersonIcon />
        </Link>
        <Link to="/cart">
          <div className="cart">
            <ShoppingCartIcon />
            { cartItems.length> 0 ? <div className="cart_number">{cartItems.length}</div> : ""}
          </div>
        </Link>
        <FavoriteBorderIcon />
      </div>
    </Container>
  );
}

export default Navbar;

const Container = styled.div`
  z-index: 9999;
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
  .right_nav {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    svg {
      /* padding: 0 10px; */

      font-size: 25px;
    }
    .cart {
      position: relative;
      .cart_number {
        background-color: gray;
        border-radius: 50%;
        position: absolute;
        top: -8px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-weight: 500;

        right: -12px;
        width: 20px;
        height: 20px;
      }
    }
  }
`;
