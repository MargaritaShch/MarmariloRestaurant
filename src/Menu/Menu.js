import React from "react";
import './Menu.css'

function Menu({
  scrollToSalads,
  scrollToStarter,
  scrollToDrinks,
  scrollToSauce,
  scrollToBurger,
}) {
  return (
    <div className="menu-container">
      <ul className="scroll-menu">
        <li onClick={scrollToBurger}>BURGERS </li>
        <li onClick={scrollToSalads}>SALADS </li>
        <li onClick={scrollToStarter}>STARTERS</li>
        <li onClick={scrollToDrinks}>DRINKS</li>
        <li onClick={scrollToSauce}>SAUCES</li>
      </ul>
    </div>
  );
}

export default Menu;