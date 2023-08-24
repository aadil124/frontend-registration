import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from "./components/Homepage/HomePage";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import { Route, Routes } from "react-router-dom";

const App = () => {
  const [userLogin, setUserLogin] = useState({
    email: "",
    password: "",
  });
  return (
    <Routes>
      <Route
        path="/"
        element={
          userLogin && userLogin._id ? (
            <HomePage setUserLogin={setUserLogin} />
          ) : (
            <Login setUserLogin={setUserLogin} />
          )
        }
      />
      <Route path="/login" element={<Login setUserLogin={setUserLogin} />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
};

export default App;
