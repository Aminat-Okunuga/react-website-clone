import React from "react";

const Body = () => {
  return (
    <div
      style={{
        justifyContent: "center",
        flexWrap: "wrap",
        padding: "80px",
        textAlign: "center",
      }}
    >
      <div
        style={{
          color: "#61DAFB",
          fontWeight: "bold",
          fontSize: "40px",
          margin: "0px 0px 10px 0px"
        }}
      >
        React
      </div>
      <div
        style={{
          justifyContent: "center",
          color: "#ffffff",
        }}
      >
        A JavaScript library for building user interfaces
      </div>
      <div>
        <div
          style={{
            margin: "40px 0px 0px 25px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <button
            style={{
              backgroundColor: "rgb(97, 218, 251)",
              padding: "15px",
              border: "none",
            }}
          >
            Get Started
          </button>
          <div style={{
              marginLeft: "10px",
              color: "#61DAFB"
          }}>Take the Tutorial</div>
        </div>
      </div>
    </div>
  );
};

export default Body;
