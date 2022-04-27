import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";
import "../Styles/login.css";
import { useNavigate } from "react-router-dom";

function RegisterView() {
  // states for error handling and login flags
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [userName, setuserName] = useState("User");
  let navigate = useNavigate();
  // const [isLoggedIn, setLoggedFlag] = useState(false);
  var username = "User";

  const errors = {
    uname: "invalid username!",
    pass: "invalid password!",
    passConf: "Password and Confirm Password doesn't match!",
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

  const delay = (millis) =>
    new Promise((resolve, reject) => {
      setTimeout((_) => resolve(), millis);
    });

  const redirect = async () => {
    console.log("here");
    await delay(10000);
    navigate("/");
  };

  // this will become an axios call
  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();
    console.log(document.forms[0]);
    var { uname, pass, passConf } = document.forms[0];
    console.log(uname.value);
    console.log(pass);
    console.log(passConf);

    var config = {
      method: "get",
      url: "http://127.0.0.1:5000/register/" + uname.value + "/" + pass.value,
      headers: {},
    };

    if (!(pass.value === passConf.value)) {
      setErrorMessages({ name: "passConf", message: errors.passConf });
    } else {
      axios(config)
        .then(function (response) {
          var data = JSON.stringify(response.data);
          if (data.includes("[")) {
            localStorage.setItem("userInfo", data);
            data = JSON.parse(data);
            setuserName(data[0].username);
            console.log(data);
            // setter
          } else {
            setuserName(uname.value);
          }
          setIsSubmitted(true);
        })
        .catch(function (error) {
          console.log(error);
        });
    }

    // // Will change to call backend api, right not just a place holder.
    // const userData = database.find((user) => user.username === uname.value);

    // Compare user info (this will be moved to backedn)

    // if (userData) {
    //   if (userData.password !== pass.value) {
    //     setErrorMessages({ name: "pass", message: errors.pass });
    //   } else {
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

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control
          type="password"
          name="passConf"
          placeholder="Password"
          required
        />
        {renderErrorMessage("passConf")}
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );

  return (
    <div className="app">
      <div className="login-form">
        <div className="sign-title">Register</div>
        {isSubmitted ? (
          <div>
            {userName} You're registered {redirect}
          </div>
        ) : (
          renderForm
        )}
      </div>
    </div>
  );
}

export default RegisterView;
