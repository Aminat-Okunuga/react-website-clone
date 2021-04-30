import React from "react";

const Header = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        backgroundColor: "#20232A",
        padding: "15px",
        color: "#ffffff",
      }}
    >
      <div>logo</div>
      <div
        style={{
          width: "300px",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            margin: "0px 0px 0px 0px",
          }}
        >
          Docs
        </div>
        <div
          style={{
            margin: "0px 5px 0px 5px",
          }}
        >
          Tutorials
        </div>
        <div
          style={{
            margin: "0px 5px 0px 5px",
          }}
        >
          Blog
        </div>
        <div
          style={{
            margin: "0px 5px 0px 5px",
          }}
        >
          Community
        </div>
      </div>
      <div>search</div>
      <div
        style={{
          width: "300px",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
        }}
      >
        <div>v17.02</div>
        <div>Languages</div>
        <div>GitHub</div>
      </div>
    </div>
  );
};

export default Header;
