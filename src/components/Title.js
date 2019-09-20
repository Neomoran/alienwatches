import React from "react";
export default function Title({ name, title }) {
  return (
    <div className="row">
      <div className="col-md mx-auto my-2 text-center textTitle">
        <h1 className="text-capitalize font-weight-bold">
          {name}
          <strong className="textBlue">{title}</strong>
        </h1>
      </div>
    </div>
  );
}
