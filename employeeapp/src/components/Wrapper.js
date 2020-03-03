import React from 'react';
import "../styles/wrapper.css";
import "../components/"

function Wrapper({ children }) {
  return (
      <div className="wrapper">
        { children }
      </div>
  );
}

export default wrapper;