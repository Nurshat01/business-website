import React from "react";
import "./App.css";
import "tachyons";
import Footer from "../src/components/footer";
import Header from "../src/components/header";
import Home from "../src/pages/Home";

const App = () => {
  return (
    <div>
      <Header />
      <Home />
      <Footer />
    </div>
  );
};

export default App;
