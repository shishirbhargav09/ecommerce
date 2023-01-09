import React from "react";
import styled from "styled-components";
import main_banner from "../assets/0.jpg";

function Home() {
  return (
    <>
      <Container>
        <div className="home_1">
          <img src={main_banner} alt="main_banner" />
          <div className="home_1_quote">
            <h1>Watch Store</h1>
            <p>"ALL Great Achievements Requir Time!"</p>
            <button>Shop Now</button>
          </div>
        </div>
      </Container>
      <FeaturedBrands>
        
      </FeaturedBrands>
    </>
  );
}

export default Home;
const FeaturedBrands = styled.div`
  height: 100vh;
  
  padding: 2rem;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  overflow: hidden;
  


`;
const Container = styled.div`
  /* background-color: salmon; */
  height: calc(100vh - 80px);
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .home_1 {
    height: 100%;
    width: 100%;
    overflow: hidden;
    position: relative;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .home_1_quote {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    background-color: aliceblue;
    max-width: 25rem;
    width: 80%;
    height: 15rem;
    border-radius: 7px;
    box-shadow: 3px 4px 10px 1px rgba(0, 0, 0, 0.52);
    -webkit-box-shadow: 3px 4px 10px 1px rgba(0, 0, 0, 0.52);
    -moz-box-shadow: 3px 4px 10px 1px rgba(0, 0, 0, 0.52);
    p {
      font-size: large;
      font-weight: 500;
    }
    button {
      background-color: #238ac5;
      cursor: pointer;
      /* color: aliceblue; */
      width: fit-content;
      font-size: large;
      font-weight: 500;
      border-radius: 7px;
    }
  }
  .featured_brands {
    height: 100vh;
    width: 100%;
  }
`;
