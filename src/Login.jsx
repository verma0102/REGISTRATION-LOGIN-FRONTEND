import { useState } from "react";
import { Button } from "@mui/material";
import { useAuth } from "./AuthContext";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [passwordError, setPasswordError] = useState("");
  const [emailError, setEmailError] = useState("");
  const storeMail = localStorage.getItem("email");
  const stopPassword = localStorage.getItem("password");
  const { login } = useAuth();
  const history = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      e.target["email"].value == storeMail &&
      e.target["password"].value == stopPassword
    ) {
      console.log("login successfully");
      login("0123456789abcdefghijklmnopqrstuvwxyz");
      history("/");
    } else {
      if (e.target["email"].value !== storeMail) {
        console.log("email is incorrect");
        setEmailError("Email is a incorrect");
      }
      if (e.target["password"].value !== stopPassword) {
        console.log("password is incorrect");
        setPasswordError("password is incorrect");
      }
    }
  };
  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Enter userName:</label>
          <input
            type="text"
            placeholder="Enter Your name"
            id="name"
            name="name"
          />
          <br />
          <br />
          <label htmlFor="email">Enter userEmail:</label>
          <input
            type="email"
            id="email"
            placeholder="Enter Your Email"
            name="email"
          />
          <br />
          <br />
          {emailError && <p>{emailError}</p>}

          <label htmlFor="password">Password:</label>
          <input
            type="password"
            placeholder="Enter your password"
            id="password"
            name="password"
          />

          {passwordError && <p>{passwordError}</p>}
          <Button type="submit" variant="contained" size="small">
            Login
          </Button>
        </form>
        <Link to="/register">
          <Button variant="contained" size="small">
            Register Page
          </Button>
        </Link>
      </div>
    </>
  );
};
export default Login;
