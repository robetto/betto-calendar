import React from "react";
import { useDispatch } from "react-redux";
import { login } from "../redux/auth-slice";

const Login = () => {
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    // dispatch
    dispatch(login());
  };
  
  return (
    <div className="loginForm">
      <form onSubmit={handleSubmit}>
        <input type="text" name="id" id="id" />
        <input type="password" name="password" id="password" />
        <button className="login-btn" type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
