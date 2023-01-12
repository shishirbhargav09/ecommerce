import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { Button } from "@mui/material";
import axios from "axios";
import Backend_Url from "../constant";

const Cart = () => {
  function loadScript(src) {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  }

  async function displayRazorpay() {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
    }

    // creating a new order
    const result = await axios.post(`${Backend_Url}payment/orders`, {
      amount: total,
    });

    if (!result) {
      alert("Server error. Are you online?");
      return;
    }

    // Getting the order details back
    const { amount, id: order_id, currency } = result.data;

    const options = {
      key: "rzp_test_oaVoxyDw1pAboG", // Enter the Key ID generated from the Dashboard
      amount: amount.toString(),
      currency: currency,
      name: "Chris Evans Corp.",
      description: "Test Transaction",
      image: "",
      order_id: order_id,
      handler: async function (response) {
        const data = {
          orderCreationId: order_id,
          razorpayPaymentId: response.razorpay_payment_id,
          razorpayOrderId: response.razorpay_order_id,
          razorpaySignature: response.razorpay_signature,
        };

        const result = await axios.post(
          `${Backend_Url}payment/success`,
          data
        );

        alert(result.data.msg);
      },
      prefill: {
        name: "Chris Evans",
        email: "ChrisEvans2s44@example.com",
        contact: "9999999999",
      },
      notes: {
        address: "Chris Evans Corporate Office",
      },
      theme: {
        color: "#1976D2",
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  }

  const { cartItems, subTotal, shipping, total } = useSelector(
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
      <div className="main">
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
      </div>

      <div className="amount">
        <h3>Subtotal: ₹{subTotal}</h3>
        <h3>Shipping: ₹{shipping}</h3>

        <h3>Total: ₹{total}</h3>
        <Button variant="contained" onClick={displayRazorpay}>
          Pay Now
        </Button>
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

  .main {
    /* flex: 5; */
    padding: 1rem;
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
      h3 {
      margin: 1rem;
      font: 50 1.8rem "Roboto";
      letter-spacing: 2px;

      &:last-of-type {
        font-weight: 600;
      }
    }
    }
  }
`;
