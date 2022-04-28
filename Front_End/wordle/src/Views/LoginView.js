import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";
import "../Styles/login.css";
import { useNavigate } from "react-router-dom";
function delay(millis) {
  new Promise((resolve, reject) => {
    setTimeout((_) => resolve(), millis);
  });
}

function redirect() {
  console.log("here");
  delay(10000);
  window.location.href = "profile";
}

function LoginView() {
  // states for error handling and login flags
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSignedIn, setIsSignedIn] = useState("Sign In");
  const [userName, setuserName] = useState();
  let navigate = useNavigate();
  var userInfo = localStorage.getItem("userInfo");

  if (!userInfo) {
    // const [isLoggedIn, setLoggedFlag] = useState(false);
    var username = "User";

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
      setIsSubmitted(true);
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
          var data = JSON.stringify(response.data);
          localStorage.setItem("userInfo", uname.value);
          redirect();
        })
        .catch(function (error) {
          console.log(error);
        });

      // // Will change to call backend api, right not just a place holder.
      // const userData = database.find((user) => user.username === uname.value);

      // // Compare user info (this will be moved to backedn)

      // if (userData) {
      //   if (userData.password !== pass.value) {
      //     setErrorMessages({ name: "pass", message: errors.pass });
      //   } else {
      //     // setLoggedFlag(true);
      //     setToken(true);
      //   }
      // } else {
      //   // Username not found
      //   setErrorMessages({ name: "uname", message: errors.uname });
      // }
    };

    // Error code jsx messahe
    const renderErrorMessage = (name) =>
      name === errorMessages.name && (
        <div className="error">{errorMessages.message}</div>
      );

    const renderLoading = <div>Loading Please wait..</div>;
    // Form login
    const renderForm = (
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Username</Form.Label>
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
          <div className="sign-title">{isSignedIn}</div>
          {isSubmitted ? (
            userName ? (
              <div>{userName} is successfully logged in</div>
            ) : (
              renderLoading
            )
          ) : (
            renderForm
          )}
        </div>
      </div>
    );
  }
  return (
    <div className="app">
      <div className="login-form">
        <div>Logged in</div>
      </div>
    </div>
  );
}

export default LoginView;
