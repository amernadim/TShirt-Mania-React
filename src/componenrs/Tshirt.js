import React from "react";

const Tshirt = ({ ts , handleAddToCart}) => {
  const { price, picture, name } = ts;
  return (
    <div className="card w-full bg-base-100 shadow-xl">
      <figure className="px-5 pt-5 ">
        <img
          src={picture}
          alt="Tshirt"
          className="rounded-xl h-[200px]"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        <p>Price : {price}</p>
        <div className="card-actions">
          <button onClick={() => handleAddToCart(ts)}
           className="btn btn-sm btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default Tshirt;
