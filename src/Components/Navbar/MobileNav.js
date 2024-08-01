import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { searchContext } from "../App";

const MobileNav = () => {
  const { setSearchTerm } = React.useContext(searchContext);
  const navigate = useNavigate();

  return (
    <div>
      <div className="top-nav">
        <Link to="/" className="barnd-link">
          ShopNow
        </Link>
        <input
          type="search"
          className="search-box"
          placeholder="search"
          value={""}
          onChange={(e) => {
            setSearchTerm(e.target.name);
            navigate("/category");
          }}
        />
        <Link to="/cart" className="cart-link">
          Cart
        </Link>
      </div>
      <div className="bottom-Nav">
        <Link to="/">Home</Link>
        <Link to="/category">Mens</Link>
        <Link to="/category">Womens</Link>
        <Link to="/category">Jewelery</Link>
        <Link to="/profile">Profile</Link>
      </div>
    </div>
  );
};

export default MobileNav;
