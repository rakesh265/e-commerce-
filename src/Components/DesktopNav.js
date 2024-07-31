import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { searchContext } from "../App";

const DesktopNav = () => {
  const { searchTerm, setSearchTerm, setCategoryGroup } = React.useContext(searchContext);
  const navigate = useNavigate();
  return (
    <div className="navbar">
      <div className="nav-left">
        <Link to="/">Kaliyug Bazaar</Link>
        <Link to="/filter" onClick={() => {
          setCategoryGroup("Fashion & Accessories")
        }} >Fashion</Link>
        <Link to="/filter"  onClick={() => {
          setCategoryGroup("Electronics & Gadgets")
        }} >Gadgets</Link>
        <Link to="/filter"  onClick={() => {
          setCategoryGroup("Home & Living")
        }} >Home Essentials</Link>
        <Link to="/filter"  onClick={() => {
          setCategoryGroup("Sports & Vehicles")
        }} >Sports & Vehicles</Link>
        <Link to= "/filter" >Filter</Link>
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
        <Link to="/profile">Profile</Link>
      </div>
    </div>
  );
};

export default DesktopNav;
