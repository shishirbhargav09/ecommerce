import React from "react";
import styled from "styled-components";
import Button from '@mui/material/Button';

function ItemCard({ title, brand, price, image, description, handler, id }) {
  return (
    <Container>
      <img src={image} alt={title}/>
      <h3>{title}</h3>
      <h4>₹{price}</h4>
      <p>{description.slice(0,50)}...</p>
      <Button variant="contained" onClick={() => {
        handler({ title, price, id, quantity: 1, image })
       
      }}>Add to Cart</Button>
    </Container>
  );
}

export default ItemCard;

// const Button = styled.button`
// width: fit-content;
// height: 35px;
// background-color: #238AC5;
// border-radius: 7px;
// cursor: pointer;
// padding: 0.5rem;
// margin: 0.5rem;
// border: none;
// display: flex;
// justify-content: center;
// align-items: center;
// &:hover{
//   background-color: #203AC5;
// }
// ;

// `
const Container = styled.div`
  
  width: 15rem;
  height: 25rem;
  display: flex;
  padding: 5px;
  align-items: center;
  text-align: center;
  justify-content: center;
  flex-direction: column;
  z-index: 5;
  h3{
    padding: 0;
    margin: 0;
  }
  /* @media only screen and (max-width: 740px) {
    width: 7.2rem;
  height: 7.2rem;
 
  } */
  box-shadow: 3px 4px 10px 1px rgba(0, 0, 0, 0.52);
  -webkit-box-shadow: 3px 4px 10px 1px rgba(0, 0, 0, 0.52);
  -moz-box-shadow: 3px 4px 10px 1px rgba(0, 0, 0, 0.52);
  border-radius: 7px;
  margin: 1rem;
  overflow: hidden;
  /* &:hover{
    transition: 2s ease;
    transform: scale(1.1);
  } */
   
    img {
      width: 60%;
      margin: 0.2rem;
      /* height: 100%; */
      object-fit: cover;
    }
`;
