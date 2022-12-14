import React from "react";
import "./sidebar.css";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import LogoutIcon from "@mui/icons-material/Logout";
import AssessmentIcon from "@mui/icons-material/Assessment";
import ShowChartIcon from "@mui/icons-material/ShowChart";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="top">
        <span className="logo">Admin</span>
      </div>
      <hr />
      <div className="center">
        <ul>
          <div className="title">Main</div>
          <li>
            <DashboardIcon className="icon" />
            <span>Dashboard</span>
          </li>
          <div className="title">List</div>
          <li>
            <AccountBoxIcon className="icon" />
            <span>User</span>
          </li>
          <li>
            <AssessmentIcon className="icon" />
            <span>Products</span>
          </li>
          <div className="title">Useful</div>
          <li>
            <ShowChartIcon className="icon" />
            <span>Orders</span>
          </li>
          <div className="title">User</div>
          <li>
            <LogoutIcon className="icon" />
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div className="colorOption"></div>
        <div className="colorOption"></div>
      </div>
    </div>
  );
}

export default Sidebar;
