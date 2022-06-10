import React from "react";

const Alert = ({ alert }) => {
  return (
    <div className="alert">
      <p className="text-danger">{alert}</p>
    </div>
  );
};

export default Alert;
