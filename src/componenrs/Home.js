import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Cart from "./Cart";
import Tshirt from "./Tshirt";
import Swal from 'sweetalert2'

const Home = () => {
  const tshirt = useLoaderData(); 

  const [cart ,setCart] = useState([])

  const handleAddToCart = tshirt => {
    const exists = cart.find(ts => ts._id === tshirt._id);
    if(exists) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Already Added!',
      })
    } else {
      const newCart = [...cart,tshirt]
      setCart(newCart)
    }
  }

  const handleRemoveItem = tshirt => {
    const remaining = cart.filter(ts => ts._id !== tshirt._id);
    setCart(remaining);
  }

  return (
    <div className="grid grid-cols-4">
      <div className="grid md:grid-cols-3 gap-3 col-span-3 mx-7">
        {
        tshirt.map((ts) => (
          <Tshirt key={ts._id} 
          ts={ts} 
          handleAddToCart={handleAddToCart}
          ></Tshirt>
        ))
        }
      </div>
      <div className="col-span-1 mt-3">
       <Cart 
       cart={cart} 
       handleRemoveItem={handleRemoveItem}/>
      </div>
    </div>
  );
};

export default Home;
