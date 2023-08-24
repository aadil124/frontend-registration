import axios from "axios";
import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    reEnteredPassword: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((users) => ({
      ...users,
      [name]: value,
    }));
  };
  const handleRegister = async () => {
    const { name, email, password, reEnteredPassword } = user;
    if (name && email && password === reEnteredPassword) {
      await axios
        .post("http://localhost:9000/register", user)
        .then(({ data }) => {
          console.log(data.message);
          alert(data.message);
          setUser(user);
        })
        .catch((err) => console.log(err));
      navigate("/login");
    } else {
      alert("Something went wrong! Please Try Again");
    }
  };
  return (
    <div>
      <h1>Register</h1>
      <div className="main">
        <input
          type="text"
          name="name"
          value={user.name}
          placeholder="Enter your name"
          onChange={handleChange}
        />
        <br />
        <br />
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
        <input
          type="password"
          name="reEnteredPassword"
          value={user.reEnteredPassword}
          placeholder="Enter your confirm password"
          onChange={handleChange}
        />
        <br />
        <br />
      </div>
      <div>
        <Button className="m-4" onClick={handleRegister}>
          Register
        </Button>

        <Button onClick={() => navigate("/login")}>Login</Button>
      </div>
    </div>
  );
};

export default Register;
