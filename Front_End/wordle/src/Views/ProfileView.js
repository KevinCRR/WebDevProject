import React from "react";
import Card from "react-bootstrap/Card";

function ProfileView() {
  var userInfo = localStorage.getItem("userInfo");

  if (userInfo) {
    userInfo = JSON.parse(userInfo);

    const WelcomeMessage = userInfo.map((score) => (
      <Card border="primary" style={{ width: "18rem" }}>
        {console.log(score)}
        <Card.Header>Date: {score.date}</Card.Header>
        <Card.Body>
          <Card.Title>Score: {score.score}</Card.Title>
        </Card.Body>
      </Card>
    ));

    return (
      <div className="register">
        User:{userInfo[0].username}
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
