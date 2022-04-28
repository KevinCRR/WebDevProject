import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "react-bootstrap/Card";

function ProfileView() {
  const [scores, setScores] = useState();
  var userInfo = localStorage.getItem("userInfo");
  useEffect(() => {
    if (userInfo) {
      async function fetchData() {
        try {
          const response = await axios.get(
            "http://127.0.0.1:5000/scoreUser/" + userInfo
          );
          setScores(response.data);
        } catch (err) {
          console.log(err);
        }
      }
      fetchData();
    } else {
    }
  }, []);

  if (userInfo) {
    var WelcomeMessage = "";
    if (scores) {
      WelcomeMessage = scores.map((score) => (
        <Card border="primary" style={{ width: "18rem" }}>
          {console.log(score)}
          <Card.Header>Date: {score.date}</Card.Header>
          <Card.Body>
            <Card.Title>Score: {score.score}</Card.Title>
          </Card.Body>
        </Card>
      ));
    } else {
      WelcomeMessage = (
        <Card border="primary" style={{ width: "18rem" }}>
          <Card.Body>You don't have any scores</Card.Body>
        </Card>
      );
    }

    return (
      <div className="register">
        User:{userInfo}
        {WelcomeMessage}
      </div>
    );
  }
  return (
    <div className="register">
      <div> You must log in to access this! </div>
    </div>
  );
}

export default ProfileView;
