import React from "react";
import "./style.css";

function Nav(props) {
  return (
    <nav className="navbar navbar-expand-lg bg-primary fixed-top text">
      <span className="navbar-brand text">
        Kitty-Kat Memory Game
      </span>
      <span className="navbar-text mx-auto">
       {props.message}
     </span>
     
      <span className="navbar-text ml-auto">
      Score: {props.score} | Top Score: {props.topScore}
     </span>
     
     
    </nav>
  );
}

export default Nav;
