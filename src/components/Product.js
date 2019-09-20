import React, { Component } from "react";
//import styled-component for css
import styled from "styled-components";
//Import Link from react-router-dom
import { Link } from "react-router-dom";
//import the productConsumer from the context
import { ProductConsumer } from "../context";
//Import propTypes from react prop-types
import PropTypes from "prop-types";

class Product extends Component {
  render() {
    const { id, title, img, price, inCart } = this.props.product;
    return (
      <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
        <div className="card">
          <ProductConsumer>
            {value => (
              <div
                className="imgContainer p-5"
                onClick={() => value.handleDetail(id)}
              >
                <Link to="/details">
                  <img src={img} alt="product" className="card-img-top" />
                </Link>
                <button
                  className="cartBtn"
                  disabled={inCart ? true : false}
                  onClick={() => {
                    value.addToCart(id);
                    value.openModal(id);
                  }}
                >
                  {inCart ? (
                    <p className="text-capitalize mb-0" disabled>
                      {""}
                      In Cart
                    </p>
                  ) : (
                    <i className="fas fa-cart-plus" />
                  )}
                </button>
              </div>
            )}
          </ProductConsumer>
          {/* outside image container, Card footer */}
          <div className="card-footer d-flex justify-content-between">
            <p className="align-self-center mb-0">{title}</p>
            <h5 className="font-italic mb-0 textBlue">
              <span className="mr-1">Kes.</span>
              {price}
            </h5>
          </div>
        </div>
      </ProductWrapper>
    );
  }
}

export default Product;

//setting up protypes
Product.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    img: PropTypes.string,
    title: PropTypes.string,
    inCart: PropTypes.bool,
    price: PropTypes.number
  }).isRequired
};

//styled component for the product div
const ProductWrapper = styled.div`
  .card {
    border-color: transparent;
    transition: all 1s linear;
  }
  .card-footer {
    border-top: transparent;
    background: transparent;
    transition: all 1s linear;
  }
  &:hover {
    .card {
      border: 0.04rem solid rgba(0, 0, 0, 0.2);
      box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.2);
    }
    .card-footer {
      background: rgba(247, 247, 247);
    }
  }
  .card-img-top {
    transition: all 1s linear;
  }
  .imgContainer {
    position: relative;
    overflow: hidden;
  }
  .imgContainer:hover .card-img-top {
    transform: scale(1.2);
  }
  .cartBtn {
    position: absolute;
    bottom: 0;
    right: 0;
    padding: 0.2rem 0.4rem;
    background: var(--lightBlue);
    border: none;
    color: var(--mainWhite);
    font-size: 1.4rem;
    border-radius: 0.5rem 0 0 0;
    transform: translate(100%, 100%);
    transition: all 1s linear;
  }
  .imgContainer:hover .cartBtn {
    transform: translate(0, 0);
  }
  .cartBtn:hover {
    color: var(--mainBlue);
    cursor: pointer;
  }
`;
