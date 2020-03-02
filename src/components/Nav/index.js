import React from "react";
import "./style.css";

function Nav(props) {
  return (
    <nav className="navbar navbar-expand-lg bg-primary fixed-top text">
      <span className="navbar-brand text">
        Kitty-Kat Memory Game
      </span>
      <span className="navbar-text mx-auto reg">
       <span className={(props.message === "You guessed incorrectly!") ? 'wrong' : ''}>
         {props.message}
         </span>
     </span>
     
      <span className="navbar-text ml-auto reg">
      Score: {props.score} | Top Score: {props.topScore}
     </span>
    </nav>

  
  );
}

export default Nav;
