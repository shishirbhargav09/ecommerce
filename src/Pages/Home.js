import React from "react";
import styled from "styled-components";
import main_banner from "../assets/0.jpg";
import Brands_card from "../Components/Brands_card";
import img1 from '../assets/1.jpg'
import img2 from '../assets/2.jpg'
import img3 from '../assets/3.jpg'
import img4 from '../assets/4.jpg'
import img5 from '../assets/5.jpg'

function Home() {
    return (
        <>
      <Container>
        <div className="home_1">
          <img src={main_banner} alt="main_banner" />
          <div className="home_1_quote">
            <h2>Watch Store</h2>
            <p>"ALL Great Achievements Requir Time!"</p>
            <button>Shop Now</button>
          </div>
        </div>
      </Container>
      <FeaturedBrands>
        <h2>Featured Brands</h2>
        <hr className="hr"/>
        <div className="brands">
            <Brands_card
              image={
                "https://media.designrush.com/inspiration_images/134802/conversions/_1511456315_653_apple-preview.jpghttps://media.designrush.com/inspiration_images/134802/conversions/_1511456315_653_apple-preview.jpg"
              }
            />
            <Brands_card
            image={"https://d3pbw4826yao71.cloudfront.net/ogimage.jpg"}
          />
          <Brands_card
            image={
                "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Xiaomi_logo.svg/2048px-Xiaomi_logo.svg.png"
            }
          />
          <Brands_card
            image={
              "https://sustainhealth.fit/wp-content/uploads/2019/09/fitbit-logo.jpg"
            }
          />
          <Brands_card image={"https://www.sheeko.in/media/Noise_logo.png"} />
          
          <Brands_card
            image={
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSe9RBPgdKPsr0z1uKN0vDLlBYppoNVV5Xxew&usqp=CAU"
            }
          />
        </div>
      </FeaturedBrands>
      <GridImages>
            <div className="row1 col1">
                <img src={img1} alt="" />
            </div>
            <div className="row1 col2"></div>
      </GridImages>
    </>
  );
}

export default Home;
const GridImages = styled.div`
height: 100vh;

padding: 2rem;
width: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
overflow: hidden;
`

const FeaturedBrands = styled.div`
  height: 100vh;

  padding: 2rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  h2 {
    font-size: 40px;
    font-weight: 500;
    
  }
  hr{
    background-color: black;
    /* border: solid black ; */
    height: 5px;
    width: 80%;
    margin-top: 50px;
    
  }
  .brands {
    display: flex;
    flex-wrap: wrap;
    margin-top: 50px;
    align-items: center;
    justify-content: center;
  }
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
      color: black;
      width: fit-content;
      height: 35px;
      font-size: large;
      font-weight: 500;
      border-radius: 7px;
      border: none;
    }
  }
`;
