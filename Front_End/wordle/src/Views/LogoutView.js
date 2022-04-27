import React from "react";

function LogoutView() {
  var userInfo = localStorage.getItem("userInfo");

  if (!userInfo) {
    return (
      <div className="register">
        <div> Not Logged in</div>
      </div>
    );
  }
  localStorage.removeItem("userInfo");
  return <div className="register">You are now logged out </div>;
}

export default LogoutView;
