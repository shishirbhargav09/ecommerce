import React, {  useState } from "react";
import styled from "styled-components";
import PersonIcon from "@mui/icons-material/Person";
import HttpsIcon from "@mui/icons-material/Https";
import EmailIcon from "@mui/icons-material/Email";
import {  useNavigate } from "react-router-dom";

import { toast } from "react-hot-toast";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginHandler = (e) => {
    
    if (email === "test@gmail.com" && password === "test@gmail.com") {
      toast.success("Login Successfully")
      return navigate('/addproduct')
    }
    toast.error("Wrong Credentials");
  };
  return (
    <Container>
      <FormContainer>
        <h1>Login</h1>

        <PersonIcon
          style={{
            fontSize: "8rem",
          }}
        />
        <div className="email">
          <EmailIcon
            style={{
              fontSize: "2rem",
            }}
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div className="email">
          <HttpsIcon
            style={{
              fontSize: "2rem",
            }}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <Button
          onClick={() => {
            loginHandler()
          }}
        >
          LOGIN
        </Button>
      </FormContainer>
    </Container>
  );
}

export default Login;
const Button = styled.button`
  margin: 1rem;
  width: 60%;
  height: 40px;
  color: white;
  border-radius: 5px;

  background-color: #124c50;
  &:hover {
    cursor: pointer;
    background-color: #10aab3;
  }
`;
const FormContainer = styled.div`
  background-color: white;
  width: 90%;
  max-width: 30rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 0.5rem;
  border-radius: 10px;
  box-shadow: 6px 5px 18px 0px rgba(0, 0, 0, 0.73);
  -webkit-box-shadow: 6px 5px 18px 0px rgba(0, 0, 0, 0.73);
  -moz-box-shadow: 6px 5px 18px 0px rgba(0, 0, 0, 0.73);

  .email {
    padding-top: 1rem;
    display: flex;
    width: 90%;
    justify-content: space-around;

    input {
      width: 80%;
      border-radius: 5px;
      padding-left: 1rem;
    }
  }
`;

const Container = styled.div`
  height: calc(100vh - 190px);
  width: 100%;
  margin-top: 1rem;
  margin-bottom: 1rem;

  display: flex;
  justify-content: center;
  align-items: center;
`;
