import { Button } from "@mui/material";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const history = useNavigate();
  const [passwordError, setPasswordError] = useState("");
  const [alert, setAlert] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (e.target["password"].value !== e.target["conformPassword"].value) {
      setPasswordError("password do not match");
    } else {
      localStorage.setItem("username", e.target["name"].value);
      localStorage.setItem("email", e.target["email"].value);
      localStorage.setItem("password", e.target["password"].value);
      setAlert("Register is  successfully");
      history("/login");
    }
  };
  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Enter userName: </label>
          <input
            type="text"
            placeholder="Enter your Name"
            name="name"
            id="name"
          />
          <br />
          <br />

          <label htmlFor="email">Enter userEmail </label>
          <input
            type="email"
            placeholder="Enter your Email"
            name="email"
            id="email"
          />
          <br />
          <br />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            placeholder="Enter your Password"
            name="password"
            id="password"
          />
          <br />
          <br />

          <label htmlFor="conformPassword">Conform Password</label>
          <input
            type="password"
            placeholder="Enter your conform password"
            name="conformPassword"
            id="conformPassword"
          />
          <br />
          <br />

          {passwordError && <p>{passwordError}</p>}

          <Button variant="contained" size="small" type="submit">
            submit
          </Button>
          <Link to="/login">
            <Button variant="contained" size="small">
              Login
            </Button>
          </Link>
        </form>
        <p>{alert}</p>
      </div>
    </>
  );
};
export default Register;
