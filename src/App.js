import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./components/Homepage/HomePage";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import { useState } from "react";
import ForgotPassword from "./components/ForgotPassword/ForgotPassword";
import ResetPassword from "./components/ResetPassword/ResetPassword";

const App = () => {
  const [loginUser, setLoginUser] = useState(localStorage.getItem("jwt-token"));
  // console.log(loginUser);

  return (
    <Router>
      <Routes>
        {/* <Route path="/"   element={ loginUser && loginUser._id ? <Homepage setLoginUser={setLoginUser}/>:<Login setLoginUser={setLoginUser}/>}/> */}
        <Route
          path="/"
          element={
            <Homepage loginUser={loginUser} setLoginUser={setLoginUser} />
          }
        />
        <Route
          path="/login"
          element={<Login setLoginUser={setLoginUser} loginUser={loginUser} />}
        />
        <Route path="/register" element={<Register />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/resetpassword/:token" element={<ResetPassword />} />
      </Routes>
    </Router>
  );
};

export default App;
