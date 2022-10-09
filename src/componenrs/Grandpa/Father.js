import React from 'react';
import Brother from './Brother';
import Myself from './Myself';
import Sister from './Sister';

const Father = ({house}) => {
  return (
    <div>
      <h2>Father</h2>
      <p>House : {house}</p>
      <section className='flex'> 
        <Myself house={house}/>
        <Brother/>
        <Sister/>
      </section>
    </div>
  );
};

export default Father;