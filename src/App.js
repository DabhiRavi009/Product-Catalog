import React from "react";
import "./App.css";
import ProductCatalog from "./components/ProductCatalog";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <ProductCatalog />
    </div>
  );
}

export default App;
