import React from "react";
//Router importation
import { Switch, Route } from "react-router-dom";
import "./App.css";
// import bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

// Import components
import Navbar from "./components/Navbar";
import Cart from "./components/Cart";
import Default from "./components/Default";
import Product from "./components/Product";
import ProductList from "./components/ProductList";
import Details from "./components/Details";
import Modal from "./components/Modal";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Switch>
        <Route exact path="/" component={ProductList} />
        <Route path="/details" component={Details} />
        <Route path="/cart" component={Cart} />
        <Route component={Default} />
      </Switch>
      <Modal />
    </React.Fragment>
  );
}

export default App;
