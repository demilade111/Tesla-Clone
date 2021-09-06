import React from "react";
import "./menuitem.css";

function MenuItem({ title, name }) {
  return (
    <div className="menuItem">
      <h4>{title}</h4>
      <h2>{name}</h2>
    </div>
  );
}
export default MenuItem;
