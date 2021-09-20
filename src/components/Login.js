import React, { useState } from "react";
import { Navlink, useHistory } from "react-router-dom";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from "./Navbar";

const Login = () => {
  const history = useHistory();
  let name, value;
  
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  
  const handleInputs = (e) => {
    name = e.target.name;
    value = e.target.value;

    setUser({ ...user, [name]: value });
  };

  const Postdata = async (e) => {
    e.preventDefault();
    const { username, password } = user;

    const res = await fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    });

    const data = await res.json();
    console.log(data.JSON);

    if (data==="User not in DB" || !data) {
      window.alert("Invalid credentials");
      console.log("Login failed");
    } else {
      console.log("Login success");
      history.push('/Adminpage');
    }
  };
  return (
    <>
      <form method="POST" className="loginformgroup">
        {/* Enter Username */}
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            id="floatingInput"
            placeholder="name@example.com"
            value={user.username}
            onChange={handleInputs}
            name="username"
          />
          <label htmlFor="floatingInput">Username</label>
        </div>

        {/* Enter Password */}
        <div className="form-floating mb-3">
          <input
            type="[password]"
            className="form-control"
            id="floatingInput"
            placeholder="password"
            value={user.password}
            onChange={handleInputs}
            name="password"
          />
          <label htmlFor="floatingInput">Password</label>
        </div>

        <button
          type="button"
          name="submit"
          onClick={Postdata}
          className="btn btn-primary my-3"
        >
          Submit
        </button>
      </form>
    </>
  );
};

export default Login;
