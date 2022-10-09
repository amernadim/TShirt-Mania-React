import React from 'react';
import Special from './Special';

const Myself = ({house}) => {
  return (
    <div>
      <h2>MySelf</h2>
      <p>house : {house}</p>
      <section className='flex'>
        <Special house={house}/>
      </section>
    </div>
  );
};

export default Myself;