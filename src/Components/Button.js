import React from 'react';

function Button(props) {
  return (
    <button class="mdl-button mdl-js-button mdl-button--fab mdl-button--mini-fab" value={props.value} onClick={props.handleClick}>
    <i class="material-icons">
    {props.value}
    </i>

    </button>
  )
}


export default Button;
