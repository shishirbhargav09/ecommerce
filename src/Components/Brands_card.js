import React from "react";
import styled from "styled-components";

function Brands_card(props) {
  return (
    <Container>
      <img src={props.image} alt="" />
    </Container>
  );
}

export default Brands_card;

const Container = styled.div`
  width: 12rem;
  height: 12rem;
  @media only screen and (max-width: 740px) {
    width: 7.2rem;
  height: 7.2rem;
  }
  box-shadow: 3px 4px 10px 1px rgba(0, 0, 0, 0.52);
  -webkit-box-shadow: 3px 4px 10px 1px rgba(0, 0, 0, 0.52);
  -moz-box-shadow: 3px 4px 10px 1px rgba(0, 0, 0, 0.52);
  border-radius: 7px;
  margin: 1rem;
  overflow: hidden;
  &:hover{
    transition: 2s ease;
    transform: scale(1.2);
  }
   
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  
`;
