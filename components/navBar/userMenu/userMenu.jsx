import React, { useContext, useState } from "react";
import { FaRegUserCircle } from "react-icons/fa";

export default function UserMenu(props) {
  const MenuInfo = props.menuData;
  return (
    <div className="dropdown user-menu">
      <button
        className="d-flex justify-content-center align-items-center"
        type="button"
        id="dropdownMenuButton1"
        data-bs-toggle="dropdown"
        style={{backgroundColor: "transparent"}}
      >
        <FaRegUserCircle size={24} color="var(--head-color)" />
      </button>
      <ul className="dropdown-menu">
        <li className="dropdown-item">
          {"name, email"}
        </li>
        <hr style={{margin: "0 !important"}}/>
        {MenuInfo?.map((item, index) => (
          <li key={index}>
            <a href={item.url} className="dropdown-item">
              {item.title}
            </a>
          </li>
        ))}
        <hr style={{margin: "0 !important"}}/>
        <li>
          <a href="/logout" className="dropdown-item">Logout</a>
        </li>
      </ul>
    </div>
  );
}
