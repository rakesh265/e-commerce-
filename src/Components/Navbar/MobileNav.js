import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { searchContext } from "../../App";

const MobileNav = () => {
  const { setSearchTerm } = React.useContext(searchContext);
  const navigate = useNavigate();

  return (
    <div className="mobile-nav-container">
      <div className="mobile-nav-top">
        <Link to="/" className="mobile-nav-brand">
          ShopNow
        </Link>
        <input
          type="search"
          className="mobile-nav-search-box"
          placeholder="search"
          onChange={(e) => {
            setSearchTerm(e.target.value);
            navigate("/category");
          }}
        />
        <Link to="/cart" className="mobile-nav-cart">
          Cart
        </Link>
      </div>
      <div className="mobile-nav-bottom">
        <Link to="/">Home</Link>
        <Link to="/category">Mens</Link>
        <Link to="/category">Womens</Link>
        <Link to="/category">Jewelry</Link>
        <Link to="/profile">Profile</Link>
      </div>
    </div>
  );
};

export default MobileNav;
