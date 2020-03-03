import React from 'react';
import "../styles/wrapper.css";
import "../components/"

function Wrapper({ children }) {
  return (
      <div className="Wrapper">
        { children }
      </div>
  );
}

export default Wrapper;