import React, { Component } from "react";

export default function CartItem({ item, value }) {
  const { id, title, img, price, total, count } = item;
  const { increment, decrement, removeItem } = value;
  return (
    <div className="row my-2 text-capitalize text-center">
      {/* product image */}
      <div className="col-10 mx-auto col-lg-2">
        <img
          src={img}
          style={{ width: "4rem", height: "4rem" }}
          className="img-fluid"
          alt="product"
        />
      </div>
      {/* product name */}
      <div className="col-10 mx-auto col-lg-2">
        <span className="d-lg-none">product : </span>
        {title}
      </div>
      {/* price */}
      <div className="col-10 mx-auto col-lg-2">
        <span className="d-lg-none">price : </span>
        {price}
      </div>
      <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
        {/* cart buttons */}
        <div className="d-flex justify-content-center">
          <div>
            <span className="btn btnBlack mx-1" onClick={() => decrement(id)}>
              -
            </span>
            <span className="btn btnBlack mx-1">{count}</span>
            <span className="btn btnBlack mx-1" onClick={() => increment(id)}>
              +
            </span>
          </div>
        </div>
      </div>
      {/* remove item */}
      <div className="col-10 mx-auto col-lg-2">
        <div className="cartIcon" onClick={() => removeItem(id)}>
          <i className="fas fa-trash"></i>
        </div>
      </div>
      {/* cart item total */}
      <div className="col-10 mx-auto col-lg-2">
        <strong>item total : Kes. {total}</strong>
      </div>
    </div>
  );
}
