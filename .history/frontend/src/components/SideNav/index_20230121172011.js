import React from "react";
import "./index.css";
import appColor from "../../constants.js";
import { NavLink } from "react-router-dom";


const SideNav = () => {
    return (
        <div className="Header" style={{ backgroundColor: appColor.primary }}>
          <NavLink to="/" className="header-navbar--title">
            MODE
          </NavLink>
          <div className="header-navbar-navigation--buttons">
            <NavLink
              to="/"
              className={({ isActive }) =>
              isActive ? "header-navbar--navlink--active" : "header-navbar--navlink"
            }
            >
              {({ isActive }) =>
                isActive ? (
                  <div style={{
                    color: appColor.primaryDark,
                    fontWeight: 700,
                    paddingLeft: 80,
                  }}> Marketplace </div>
                ) : (
                    <div style={{
                        color: appColor.primaryLight,
                        paddingLeft: 80,
                    }}> Marketplace </div>
                )
              }
            </NavLink>
            <NavLink
              to="/profile"
              className={({ isActive }) =>
              isActive ? "header-navbar--navlink--active" : "header-navbar--navlink"
            }
            >
              {({ isActive }) =>
                isActive ? (
                  <div style={{
                    color: appColor.primaryDark,
                    fontWeight: 700,
                    paddingLeft: 80,
                  }}> Profile </div>
                ) : (
                    <div style={{
                        color: appColor.primaryLight,
                        paddingLeft: 80,
                    }}> Profile </div>
                )
              }
            </NavLink>
            <NavLink
              to="/upload"
              className={({ isActive }) =>
              isActive ? "header-navbar--navlink--active" : "header-navbar--navlink"
            }
            >
              {({ isActive }) =>
                isActive ? (
                  <div style={{
                    color: appColor.primaryDark,
                    fontWeight: 700,
                    paddingLeft: 80,
                  }}> Upload </div>
                ) : (
                    <div style={{
                        color: appColor.primaryLight,
                        paddingLeft: 80,
                    }}> Upload </div>
                )
              }
            </NavLink>
            <NavLink
              to="/test"
              className={({ isActive }) =>
              isActive ? "header-navbar--navlink--active" : "header-navbar--navlink"
            }
            >
              {({ isActive }) =>
                isActive ? (
                  <div style={{
                    color: appColor.primaryDark,
                    fontWeight: 700,
                    paddingLeft: 80,
                  }}> Test </div>
                ) : (
                    <div style={{
                        color: appColor.primaryLight,
                        paddingLeft: 80,
                    }}> Test </div>
                )
              }
            </NavLink>
        </div>
        </div>
      );
}

export default SideNav;