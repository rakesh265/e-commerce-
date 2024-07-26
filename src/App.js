import React from "react"
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./Components/NavBar"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home"
import Cart from "./Components/Cart"
import Category from "./Components/Category";
import Profile from "./Components/Profile";
import Fashion from "./Components/Fashion";
import SportsAndVehicles from "./Components/SportsAndVehicles";
import HomeEssentials from "./Components/HomeEssentials";
import Gadgets from "./Components/Gadgets";

export const searchContext = React.createContext("")

function App() {
  const [searchTerm, setSearchTerm] = React.useState("")
  return(
    <searchContext.Provider value={{searchTerm, setSearchTerm}}>
       <BrowserRouter>
    <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/fashion" element={<Fashion/>}/>
        <Route path="/sportsandvehicles" element={<SportsAndVehicles/>}/>
        <Route path="/homeessentials" element={<HomeEssentials/>}/>
        <Route path="/gadgets" element={<Gadgets/>}/>
        <Route path="/category" element={<Category/>}/>
        <Route path="/profile" element={<Profile/>}/>
      </Routes>
    </BrowserRouter>
    </searchContext.Provider>
   
  )
}

export default App;
