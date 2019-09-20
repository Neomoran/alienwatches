import React, { Component } from "react";
//Import Link router
import { Link } from "react-router-dom";
//import logo from src folder
import logo from "../logo.svg";
//import styled-components
import styled from "styled-components";
//import the Button.js component
import { ButtonContainer } from "./Button";

class Navbar extends Component {
  render() {
    return (
      <NavContainer className="navbar navbar-expand-sm navbar-dark px-sm-5">
        <Link to="/">
          <img
            src={logo}
            alt="store"
            className="navbar-brand"
            width="60px"
            height="60px"
          />
          <span className="logoWord">Alienwatches</span>
        </Link>

        <ul className="align-items-center navbar-nav">
          <li className="nav-item ml-5">
            <Link to="/" className="nav-link">
              products
            </Link>
          </li>
        </ul>
        <Link to="/cart" className="ml-auto">
          <ButtonContainer>
            <span className="mr-2">
              <i className="fas fa-cart-plus" />
            </span>
            my cart
          </ButtonContainer>
        </Link>
      </NavContainer>
    );
  }
}

const NavContainer = styled.nav`
  background: var(--mainBlue);
  .nav-link {
    color: var(--mainWhite) !important;
    font-size: 1.3rem;
    text-transform: capitalize;
  }
  .logoWord {
    text-decoration: none;
    color: var(--mainWhite);
  }
  .logoWord:hover {
    text-decoration: none;
    border-bottom: none;
  }
`;
export default Navbar;
