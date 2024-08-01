import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { searchContext, userContext } from "../App";

const DesktopNav = () => {
  const { searchTerm, setSearchTerm, setCategoryGroup } = React.useContext(searchContext);
  const { isAuth, userName } = React.useContext(userContext);
  const navigate = useNavigate();

  return (
    <div className="navbar">
      <div className="nav-left">
        <Link to="/">Kaliyug Bazaar</Link>
        <Link
          to="/category"
          onClick={() => {
            setCategoryGroup("Fashion & Accessories");
            setSearchTerm("");
          }}
        >
          Fashion
        </Link>
        <Link
          to="/category"
          onClick={() => {
            setCategoryGroup("Electronics & Gadgets");
          }}
        >
          Gadgets
        </Link>
        <Link
          to="/category"
          onClick={() => {
            setCategoryGroup("Home & Living");
          }}
        >
          Home Essentials
        </Link>
        <Link
          to="/category"
          onClick={() => {
            setCategoryGroup("Sports & Vehicles");
          }}
        >
          Sports & Vehicles
        </Link>
      </div>
      <div className="nav-right">
        <input
          type="search"
          className="search-box"
          placeholder="Search"
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            navigate("/category");
          }}
        />
        <Link to="/cart">Cart</Link>
        <Link to="/login">Login</Link>
        <div className="profile">
          <span>{userName}</span>
          <div className="dropdown">
            {isAuth ? (
              <>
                <Link to="/profile">My Profile</Link>
                <Link to="/logout">Logout</Link>
              </>
            ) : (
              <Link to="/login">Login</Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesktopNav;
