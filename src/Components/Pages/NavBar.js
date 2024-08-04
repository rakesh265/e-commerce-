import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { searchContext, userContext } from "../../App";
import "../../Styles/NavBar.css";

const NavBar = () => {
  const { searchTerm, setSearchTerm, setCategoryGroup } = React.useContext(searchContext);
  const { setIsAuth, userName, setUserName } = React.useContext(userContext);
  const navigate = useNavigate();

  const handleLogOut = () => {
    localStorage.removeItem("userName");
    setIsAuth(false);
    setUserName("");
  };

  return (
    <div className="nav-container">
      <div className="nav-brand">
        <Link to="/" className="nav-brand-link">
          Kaliyug
          <div className="nav-brand-subtext">Bazaar</div> 
        </Link>
      </div>
      <div className="nav-left">
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
          className="nav-search-box"
          placeholder="Search"
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            navigate("/category");
          }}
        />
        <Link to="/cart" className="nav-cart">
          Cart
        </Link>
        <div className="nav-profile">
          <span className="nav-username">{userName}</span>
          <div className="nav-dropdown">
            <span onClick={handleLogOut}>Logout</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
