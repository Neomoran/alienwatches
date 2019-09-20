import React, { Component } from "react";
// import ProductConsumer from the context.
import { ProductConsumer } from "../context";
//import Link
import { Link } from "react-router-dom";
//import buttons from ButtonContainer
import { ButtonContainer } from "./Button";

class Details extends Component {
  render() {
    return (
      <ProductConsumer>
        {value => {
          const {
            id,
            company,
            img,
            info,
            price,
            title,
            inCart
          } = value.detailProduct;
          return (
            <div className="container py-5">
              {/* title */}
              <div className="row">
                <div className="col-10 mx-auto my-5 text-center text-slanted textBlue">
                  <h1>{title}</h1>
                </div>
              </div>
              {/* end of title */}
              {/* product info */}
              <div className="row">
                {/* product image */}
                <div className="col-10 col-md-6 mx-auto my-3">
                  <img src={img} className="img-fluid" alt="product" />
                </div>
                {/* product text */}
                <div className="col-10 col-md-6 mx-auto my-3">
                  <strong>
                    <h4 className="textBlue font-weight-bold">
                      Design: {title}
                    </h4>
                  </strong>
                  <h4 className="  mb-2 mt-3 textBlue">
                    <strong>
                      Sold by: <span className="">{company}</span>
                    </strong>
                  </h4>
                  <h4 className="textBlue">
                    <strong>
                      Price: <span>Kes.</span>
                      {price}
                    </strong>
                  </h4>
                  <p className="font-weight-bold  mt-3 mb-0 text-center">
                    Product review
                  </p>
                  <p className="lead">{info}</p>
                  {/* buttons */}
                  <div>
                    <Link to="/">
                      <ButtonContainer>Back to products</ButtonContainer>
                    </Link>
                    <ButtonContainer
                      cart
                      disabled={inCart ? true : false}
                      onClick={() => {
                        value.addToCart(id);
                        value.openModal(id);
                      }}
                    >
                      {inCart ? "in cart" : "add to cart"}
                    </ButtonContainer>
                  </div>
                </div>
              </div>
            </div>
          );
        }}
      </ProductConsumer>
    );
  }
}

export default Details;
