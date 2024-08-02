import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./Components/Navbar/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Pages/Home";
import Cart from "./Components/Pages/Cart";
import Category from "./Components/Pages/Category";
import Login from "./Components/Authentication/Login";
import ProductPreview from "./Components/ProductFilters/ProductPreview";

export const searchContext = React.createContext("");
export const cartContext = React.createContext("");
export const userContext = React.createContext("");
export const productContext = React.createContext("");

function App() {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [categoryGroup, setCategoryGroup] = React.useState("");
  const [CartItems, setCartItems] = React.useState([]);
  const [isAuth, setIsAuth] = React.useState(false);
  const [userName, setUserName] = React.useState("");
  const [productDetails, setProductDetails] = React.useState("");

  const removeFromCart = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const searchContextValue = {
    searchTerm,
    setSearchTerm,
    categoryGroup,
    setCategoryGroup,
  };

  const cartContextValue = {
    CartItems,
    setCartItems,
    removeFromCart,
  };

  const userContextValue = {
    isAuth,
    setIsAuth,
    userName,
    setUserName,
  };

  const productContextValue = {
    productDetails,
    setProductDetails,
  };

  return (
    <userContext.Provider value={userContextValue}>
      <searchContext.Provider value={searchContextValue}>
        <cartContext.Provider value={cartContextValue}>
          <productContext.Provider value={productContextValue}>
            <BrowserRouter>
              <NavBar />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/category" element={<Category />} />
                <Route path="/product" element={<ProductPreview />} />
                <Route path="/login" element={<Login />} />
              </Routes>
            </BrowserRouter>
          </productContext.Provider>
        </cartContext.Provider>
      </searchContext.Provider>
    </userContext.Provider>
  );
}

export default App;
