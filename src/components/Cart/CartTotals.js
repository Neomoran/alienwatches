import React from "react";
import { Link } from "react-router-dom";
import PaypalButton from "./PaypalButton";

export default function CartTotals({ value, history }) {
  const { cartSubTotal, cartTax, cartTotal, clearCart } = value;
  return (
    <React-Fragment>
      <div className="container">
        <div className="row">
          <div className="col-10 mt-2 ml-sm-5 ml-md-auto text-capitalize text-right col-sm-8">
            <Link to="/">
              <button
                className="btn btn-outline-danger text-uppercase mb-3 px-5"
                type="button"
                onClick={() => clearCart()}
              >
                clear cart
              </button>
            </Link>
            <h5>
              <span className="textTitle">subtotal :</span>
              <strong> Kes {cartSubTotal}</strong>
            </h5>
            {/* //tax
            
            <h5>
              <span className="textTitle">Tax :</span>
              <strong> Kes {cartTax}</strong>
            </h5>
            
            */}

            <h5>
              <span className="textTitle">Amount payable :</span>
              <strong> Kes {cartTotal}</strong>
            </h5>
            <PaypalButton
              total={cartTotal}
              clearCart={clearCart}
              history={history}
            />
          </div>
        </div>
      </div>
    </React-Fragment>
  );
}
