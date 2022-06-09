import React from "react";

const Alert = ({ alert }) => {
  return (
    <div className="alert">
      <p class="text-danger">{alert}</p>
    </div>
  );
};

export default Alert;
