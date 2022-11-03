import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assessts/logo4.png";
import SearchIcon from "@mui/icons-material/Search";
import Avatar from "../../components/Avatar/Avatar";
import Button from "../../components/Button/Button";
import './NavBar.css';

function NavBar() {
  var User = null;

  return (
    <nav>
      <div className="navbar">
        <Link to="/" className="nav-item ">
          <img src={logo} alt="logo"  className = "nav-logo"/>
        </Link>
        <Link to="/" className="nav-item nav-btn">About</Link>
        <Link to="/" className="nav-item nav-btn">Products</Link>
        <Link to="/" className="nav-item nav-btn">For Teams</Link>
        <form>
          <input type="text" placeholder="Search..." className="nav-search-bar" />
          <SearchIcon className="nav-search-icon" />
        </form>

        {User === null ? (
          <Link to="/auth" className="nav-item nav-links">
            Log In{" "}
          </Link>
        ) : (
          <>
            <Link to="/">
              {" "}
              <Avatar>S</Avatar>
            </Link>
            <Button>Log Out</Button>
          </>
        )}
      </div>
    </nav>
  );
}

export default NavBar;
