import React from "react";
import Navigation from "../../menu-items";
import { NavLink } from "react-router-dom";

const layout = ({ children }) => {
  return (
    <div>
      <nav>
        {Navigation.menuItem.map((item, index) => {
          return <NavLink key={index}>{item.name}</NavLink>;
        })}
      </nav>
      <nain>{children}</nain>
    </div>
  );
};

export default layout;
