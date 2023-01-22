import React from "react";
import "./index.css";
import appColor from "../../constants.js";
import { NavLink} from "react-router-dom";
import { GoogleAuthProvider } from "firebase/auth";


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
            <div
              className="header-navbar--navlink"
            >
              <a href="https://testnets.opensea.io/TangMartin" style={{
                textDecoration: "none",
              }}>
                  <div style={{
                      color: appColor.primaryLight,
                      paddingLeft: 80,
                      textDecoration: "none",
                  }}> Wallet </div>
              </a>
            </div>
            <NavLink
              to="/yourImpact"
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
                  }}> Your Impact </div>
                ) : (
                    <div style={{
                        color: appColor.primaryLight,
                        paddingLeft: 80,
                    }}> Your Impact </div>
                )
              }
            </NavLink>
            <NavLink
              to="/signIn"
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
                  }}> Sign In </div>
                ) : (
                    <div style={{
                        color: appColor.primaryLight,
                        paddingLeft: 80,
                    }}> Sign In </div>
                )
              }
            </NavLink>
        </div>
        </div>
      );
}

export default SideNav;