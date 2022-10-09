import React, { useContext } from 'react';
import { MoneyContext } from './Grandpa';

const Friend = () => {
  const [money,setMoney] = useContext(MoneyContext)
  return (
    <div>
      <h2>Friend</h2>
      <p>{money}</p>
      <button onClick={() => setMoney(money + 1)} className='btn btn-sm mt-2'>Increase</button>
    </div>
  );
};

export default Friend;