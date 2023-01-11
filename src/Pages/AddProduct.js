import { Button } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";

import toast from "react-hot-toast";
import styled from "styled-components";
function AddProduct() {
  const [title, settitle] = useState("");
  const [brand, setBrand] = useState("");
  const [price, setprice] = useState();
  const [description, setdescription] = useState("");
  const [image, setimage] = useState("");
  const addHandle = (e) => {
    e.preventDefault();
    console.log("clicked");
    axios
      .post("http://localhost:3001/api/addproduct", {
        title: title,
        brand: brand,
        price: price,
        description: description,
        image: image,
      })
      .then(function (response) {
        toast.success("Added To Database");
        console.log(response);
        settitle("");
        setBrand("");
        setimage("");
        setdescription("");
        setprice("");
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <Container>
      <h1>Add Products</h1>
      <div className="form-container">
        <form onSubmit={addHandle}>
          <input
            type="text"
            name="title"
            value={title}
            placeholder="title"
            onChange={(e) => {
              settitle(e.target.value);
              console.log(title);
            }}
          />
          <input
            type="text"
            name="brand"
            value={brand}
            placeholder="brand"
            onChange={(e) => {
              setBrand(e.target.value);
              console.log(title);
            }}
          />
          <input
            type="text"
            name="price"
            value={price}
            placeholder="price"
            onChange={(e) => {
              setprice(e.target.value);
            }}
          />
          <input
            type="text"
            name="description"
            value={description}
            placeholder="description"
            onChange={(e) => {
              setdescription(e.target.value);
            }}
          />
          <input
            type="text"
            name="image"
            value={image}
            placeholder="image url"
            onChange={(e) => {
              setimage(e.target.value);
            }}
          />
          <Button variant="contained" onSubmit={addHandle}>
            Submit
          </Button>
        </form>
      </div>
    </Container>
  );
}

export default AddProduct;

const Container = styled.div`
  height: calc(100vh - 190px);
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .form-container {
    background-color: aliceblue;
    width: 90%;
    max-width: 40rem;
    form {
      margin: 2rem;

      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 0.5rem;
      input {
        width: 80%;
        padding: 0.5rem;
        border: none;
        border-radius: 8px;
      }
    }
  }
`;
