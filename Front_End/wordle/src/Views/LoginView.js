import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";
import "../Styles/login.css";
function LoginView({ setToken }) {
  // states for error handling and login flags
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  // const [isLoggedIn, setLoggedFlag] = useState(false);

  const errors = {
    uname: "invalid username!",
    pass: "invalid password",
  };

  // place holder for db will change to match api call
  const database = [
    {
      username: "peter",
      password: "Peter1",
    },
    {
      username: "billy",
      password: "Test1",
    },
  ];

  // this will become an axios call
  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();
    console.log(document.forms[0]);
    var { uname, pass } = document.forms[0];
    console.log(uname.value);
    console.log(pass);

    var config = {
      method: "get",
      url: "http://127.0.0.1:5000/login/" + uname.value + "/" + pass.value,
      headers: {},
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });

    // Will change to call backend api, right not just a place holder.
    const userData = database.find((user) => user.username === uname.value);

    // Compare user info (this will be moved to backedn)
    if (userData) {
      if (userData.password !== pass.value) {
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
        // setLoggedFlag(true);
        setToken(true);
      }
    } else {
      // Username not found
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

  // Error code jsx messahe
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  // Form login
  const renderForm = (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="text"
          name="uname"
          placeholder="Enter username"
          required
        />
        {renderErrorMessage("uname")}
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          name="pass"
          placeholder="Password"
          required
        />
        {renderErrorMessage("pass")}
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );

  return (
    <div className="app">
      <div className="login-form">
        <div className="title">Sign In</div>
        {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
      </div>
    </div>
  );
}

export default LoginView;
