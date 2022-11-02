import React from "react";

import "./NavBar.css";
import { Link } from "react-router-dom";
import logo from "../../assessts/logo4.png";
import SearchIcon from "@mui/icons-material/Search";
import Avatar from "../../components/Avatar/Avatar";
import "./NavBar.css";

function NavBar() {
  var User = null;

  return (
    <nav>
      <div className="navbar">
        <Link to="/" className="nav-item nav-logo">
          <img src={logo} alt="logo" />
        </Link>
        <Link to="/" className="nav-item nav-btn">
          About
        </Link>
        <Link to="/" className="nav-item nav-btn">
          Products
        </Link>
        <Link to="/" className="nav-item nav-btn">
          For Teams
        </Link>
        <form>
          <input
            type="text"
            placeholder="Search..."
            className="nav-search-bar"
          />
          <SearchIcon className="nav-search-icon" />
        </form>

        {User === null ? (
          <Link to="/auth" className="nav-item nav-links">
            Log In{" "}
          </Link>
        ) : (
          <>
            {" "}
            <Avatar
              backgroundColor="#009dff"
              px="14px"
              py="17px"
              borderRadius="50%"
              color="white"
              textDecoration
            >
              <Link to="/User" style={{ color: "white", textDecoration: "none" }}>
                S{" "}
              </Link>
            </Avatar>
            <button className="nav-item nav-links" >Log Out</button>
          </>
        )}
      </div>
    </nav>
  );
}

export default NavBar;
