import React from "react";
import { Toaster } from "react-hot-toast";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Cart from "./Pages/Cart";
import Home from "./Pages/Home";
import Login from "./Pages/Login";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home/>}/>
        <Route path="/login" exact element={<Login/>}/>
        <Route path="/cart" exact element={<Cart/>}/>
      </Routes>
      <Footer/>
      <Toaster />
    </BrowserRouter>
  );
}

export default App;
