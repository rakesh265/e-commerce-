import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./Components/Navbar/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Cart from "./Components/Cart";
import Category from "./Components/Category";
import Profile from "./Components/Authentication/Profile";
import Login from "./Components/Login";

export const searchContext = React.createContext("");
export const cartContext = React.createContext("");
export const userContext = React.createContext("");

function App() {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [categoryGroup, setCategoryGroup] = React.useState("");
  const [CartItems, setCartItems] = React.useState([]);
  const [isAuth, setIsAuth] = React.useState(false)
  const[userName, setUserName] = React.useState("")

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

  return (
    <userContext.Provider value={userContextValue}>
      <searchContext.Provider value={searchContextValue}>
        <cartContext.Provider value={cartContextValue}>
          <BrowserRouter>
            <NavBar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/category" element={<Category />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/login" element={<Login/>} />
            </Routes>
          </BrowserRouter>
        </cartContext.Provider>
      </searchContext.Provider>
    </userContext.Provider>
  );
}

export default App;
