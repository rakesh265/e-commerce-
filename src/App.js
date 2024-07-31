import React from "react"
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./Components/NavBar"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home"
import Cart from "./Components/Cart"
import Category from "./Components/Category";
import Profile from "./Components/Profile";
import Filter from "./Components/Filter";

export const searchContext = React.createContext("")

function App() {
  const [searchTerm, setSearchTerm] = React.useState("")
  const [categoryGroup, setCategoryGroup] = React.useState("")
  return(
    <searchContext.Provider value={{searchTerm, setSearchTerm, categoryGroup, setCategoryGroup}}>
       <BrowserRouter>
    <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/category" element={<Category/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/filter" element={<Filter/>}/>
      </Routes>
    </BrowserRouter>
    </searchContext.Provider>
   
  )
}

export default App;
