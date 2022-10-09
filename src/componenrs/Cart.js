import React from 'react';
import './Cart.css';

const Cart = ({cart,handleRemoveItem}) => {

  // conditional rendaring 
  // 1. if-else variable

 /*  let message ;
  if(cart.length === 0) {
    message = <p>Please Cart E Add Koren</p> 
  } else if (cart.length === 1){
    message = <p>Aro Add Koren</p>
  } else {
    message = <p>Thanks For Add </p>
  } */

  return (
    <div className='bg-purple-300 py-4'>
      {/* conditional css class */}
    <h1 className={`text-xl ${cart.length === 0 ? 'blue': 'orange'}`}>Orders Summary</h1>
      <h1 className={cart.length === 0 ? 'orange' : 'blue'}>Order Quantity : {cart.length}</h1>
      <div className='mt-2'>
        {
          cart.map(tshirt => <p className='mt-2' key={tshirt._id}>
            {tshirt.name}
            <button onClick={() => handleRemoveItem(tshirt)} className='bg-red-600 ml-3 px-2 text-white'>X</button>
          </p>)
        }

      {/*   {
          message
        } */}
     
      {/* 2. ternary operator */}
      {cart.length === 0 ? <p>Cart E Add koren</p> : <p>Thanks</p> }

      {/* 3. && operator
      {cart.length === 0 && <p>Cart E Kicu Nai</p>} */}

      {/* 4. || oparetor
      {cart.length === 0 || <p>Cart E Ase</p>} */}
      
      </div>
    </div>
  );
};

export default Cart;