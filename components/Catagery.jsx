import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function Catagery() {
  const [mensDivActive, setMensDiveActive] = useState(false);
  const [womensDivActive, setWoMensDiveActive] = useState(false);
  const [kidsDivActive, setKidsDiveActive] = useState(false);

  return (
    <div className="w-[80%] flex justify-evenly  gap-5">
      <button onClick={() => setMensDiveActive(!mensDivActive)}>Mens</button>
      <button onClick={() => setWoMensDiveActive(!womensDivActive)}>
        Womens
      </button>
      <button onClick={() => setKidsDiveActive(!kidsDivActive)}>Kids</button>
    </div>
  );
}

export default Catagery;
