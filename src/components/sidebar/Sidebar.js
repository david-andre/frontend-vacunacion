import React, { useEffect } from "react";
import { NavLink, Link } from "react-router-dom";

import AccountCircle from "@mui/icons-material/AccountCircle";
import { useState } from "react";
//   className="d-flex flex-column vh-100 flex-shrink-0 p-3 text-white"
//   style={{ width: "250px", backgroundColor: "#202856" }}

const Sidebar = ({ routes, user }) => {
  const [style, setStyle] = useState({});

  useEffect(() => {
    if (user === "admin") {
      setStyle({
        className:
          "d-flex flex-column vh-100 flex-shrink-0 p-3 text-white bg-dark",
        bgStyle: "",
      });
    }
    if (user === "owner") {
      setStyle({
        className: "d-flex flex-column vh-100 flex-shrink-0 p-3 text-white",
        bgStyle: "#323E83",
      });
    }
  }, [user]);

  return (
    <div
      className={style.className}
      style={{ width: "250px", backgroundColor: style.bgStyle }}
    >
      <label className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
        <svg className="bi me-2" width="40" height="32"></svg>
        <span className="fs-4">Vacunación</span>
      </label>
      <hr />
      <ul className="nav nav-pills flex-column mb-auto">
        {routes.map((route, index) => {
          return (
            <li key={index}>
              <NavLink
                to={route.layout + route.path}
                key={route.name}
                className="nav-link text-white"
              >
                <i>{route.icon}</i>
                <span className="ms-3">{route.name}</span>
              </NavLink>
            </li>
          );
        })}
      </ul>

    </div>
  );
};
export default Sidebar;
