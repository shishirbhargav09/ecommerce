import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { Button } from "@mui/material";

const Cart = () => {
  const { cartItems, subTotal, tax, shipping, total } = useSelector(
    (state) => state.cart
  );
  const dispatch = useDispatch();

  const increment = (id) => {
    dispatch({
      type: "addToCart",
      payload: { id },
    });
    dispatch({ type: "calculatePrice" });
  };
  const decrement = (id) => {
    dispatch({
      type: "decrement",
      payload: id,
    });

    dispatch({ type: "calculatePrice" });
  };
  const deleteHandler = (id) => {
    dispatch({
      type: "deleteFromCart",
      payload: id,
    });
    dispatch({ type: "calculatePrice" });
  };

  return (
    <Container>
      <main>
        {cartItems.length > 0 ? (
          cartItems.map((i) => (
            <CartItem
              image={i.image}
              name={i.title}
              price={i.price}
              qty={i.quantity}
              id={i.id}
              key={i.id}
              decrement={decrement}
              increment={increment}
              deleteHandler={deleteHandler}
            />
          ))
        ) : (
          <h1>No Items Yet</h1>
        )}
      </main>

      <div className="amount">
        <h3>Subtotal: ₹{subTotal}</h3>
        <h3>Shipping: ₹{shipping}</h3>
        
        <h3>Total: ₹{total}</h3>
        <Button variant="contained">Pay Now</Button>
      </div>
    </Container>
  );
};

const CartItem = ({
  image,
  name,
  price,
  qty,
  decrement,
  increment,
  deleteHandler,
  id,
}) => (
  <Cartitem>
    <img src={image} alt="Item" />
    <article>
      <h3>{name}</h3>
      <p>₹{price}</p>
    </article>

    <div className="content">
      <button onClick={() => decrement(id)}>-</button>
      <p>{qty}</p>
      <button onClick={() => increment(id)}>+</button>
    </div>

    <DeleteIcon onClick={() => deleteHandler(id)} />
  </Cartitem>
);

export default Cart;

const Cartitem = styled.div`
  background-color: aliceblue;
  width: 100%;
  max-width: 80rem;
  border-radius: 10px;
  margin: 2rem 0;
  padding: 1rem;

  display: grid;
  grid-template-columns: 1fr 3fr 1fr 1fr;
  align-items: center;
  img {
    width: 100%;
    height: 200px;
    border-radius: 7px;
    
    object-fit: contain;
  }
  .content {
    display: flex;
    align-items: center;
    height: 100%;
    margin: 0.3rem;
    button {
      width: 30px;
      height: 30px;
      border: none;

      color: black;
      border-radius: 5px;
      cursor: pointer;
      &:hover {
        background-color: #238ac5;
      }
    }

    p {
      width: 30px;
      height: 30px;
      display: grid;
      place-items: center;
      
    }
  }

  svg {
    cursor: pointer;
    font-size: 1.5rem;
    display: inline-block;
    margin: auto;

    &:hover {
      color: red;
    }
  }
`;
const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;

  /* grid-template-columns: 4fr 1fr; */

  main {
    /* flex: 5; */
    padding: 2rem;
    overflow-y: auto;
    
    h1 {
      color: black;
      font: 100 2rem "Roboto";
    }
  }
  .amount {
    /* flex: 1; */
    /* border-radius: 100px 0 0 100px; */
    background-color: aliceblue;
    position: fixed;
    bottom: 0;
    z-index: 5;
    color: black;
    /* height: 100%; */
    width: 100%;
    box-shadow: -10px 0px 10px rgba(0, 0, 0, 0.182);
    display: flex;
    justify-content: center;
    flex-direction: row;
   
    h3 {
      margin: 1rem;
      font: 100 1.8rem "Roboto";
      letter-spacing: 2px;

      &:last-of-type {
        font-weight: 600;
      }
    }
  }
   @media only screen and (max-width: 550) {
    
      
     .amount{
       height: 40vh;
      flex-direction: column;
     }
    
  }
`;
