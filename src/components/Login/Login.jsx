import axios from "axios";
import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Login = ({ setUserLogin }) => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((user) => ({ ...user, [name]: value }));
  };
  const handleLogin = async () => {
    await axios
      .post("http://localhost:9000/login", user)
      .then((res) => {
        alert(res.data.message);
        //   console.log(res.data.user);
        setUserLogin(res.data.user);
      })
      .catch((err) => console.log(err));
    navigate("/");
  };

  const handleRegister = () => {
    navigate("/register");
  };

  return (
    <>
      <div className="Form">
        <h1>Login</h1>
        <div className="content">
          <input
            type="email"
            name="email"
            value={user.email}
            placeholder="Enter your email"
            onChange={handleChange}
          />
          <br />
          <br />
          <input
            type="password"
            name="password"
            value={user.password}
            placeholder="Enter your password"
            onChange={handleChange}
          />
          <br />
          <br />
          <Button className="me-3" onClick={handleLogin}>
            Login
          </Button>

          <Button onClick={handleRegister}>Registration</Button>
        </div>
      </div>
    </>
  );
};

export default Login;
