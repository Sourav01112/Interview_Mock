import React from "react";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div>
      <h1>This is Home</h1>
      <Link to="/upload">
        <button>GO to Upload</button>
      </Link>
      <Link to="/list">
        <button>Go to List</button>
      </Link>
    </div>
  );
};
