import { useState, useEffect } from "react";
import { Route, Link } from "react-router-dom";
import "./App.css";
import About from "./components/About";
import NavHeader from "./components/NavHeader";
import ListItems from "./components/ListItems";
import ItemDetails from "./components/ItemDetails";

function App() {
  return (
    <div className="App">
      <About />
      <NavHeader />
      <ListItems />
      <ItemDetails />
    </div>
  );
}

export default App;
