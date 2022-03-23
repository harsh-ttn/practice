import React from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <div
      style={{
        width: "100vw",
        backgroundColor: "lightblue",
        padding: "10px 20px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <h2>Header</h2>
      <ul
        style={{
          listStyle: "none",
          width: "60vw",
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <li onClick={() => navigate("/")}>Home</li>
        <li onClick={() => navigate("/about")}>About</li>
        <li onClick={() => navigate("/form")}>Form</li>
      </ul>
    </div>
  );
};

export default Header;
