import React, { createContext, useState } from "react";
import Aunty from "./Aunty";
import Father from "./Father";
import "./Granpa.css";
import Uncle from "./Uncle";

export const RingContext = createContext("Ring");
export const MoneyContext = createContext(55);

const Grandpa = () => {
  const house = 7;
  const [money, setMoney] = useState(0);
  return (
    <RingContext.Provider value="Golden Ring">
      <MoneyContext.Provider value={[money, setMoney]}>
        <div className="grandpa">
          <h2>Grandpa</h2>
          <section className="flex">
            <Father />
            <Uncle />
            <Aunty />
          </section>
        </div>
      </MoneyContext.Provider>
    </RingContext.Provider>
  );
};

export default Grandpa;
