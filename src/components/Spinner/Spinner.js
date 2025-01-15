import React from "react";
import { FaSpinner } from "react-icons/fa";
import "./Spinner.css"; 

const Spinner = () => {
  return (
    <div className="spinner">
      <FaSpinner className="spinner-icon" />
    </div>
  );
};

export default Spinner;
