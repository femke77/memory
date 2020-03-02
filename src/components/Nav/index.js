import React from "react";
import "./style.css";

function Nav(props) {
  return (
    <nav className="navbar navbar-expand-lg fixed-top text">
      <i class="fa fa-paw fa-2x" aria-hidden="true"></i>
      <span className="navbar-brand text">
        &nbsp; Kitty-Kat Memory Game
      </span>
      <span className="navbar-text mx-auto reg">
        <span className={(props.message === "You guessed incorrectly!") ? 'wrong' : ''} >
          {props.message}
        </span>
      </span>

      <span className="navbar-text ml-auto reg">
        Score: {props.score} &nbsp; | &nbsp; Top Score: {props.topScore}
      </span>
    </nav>


  );
}

export default Nav;
