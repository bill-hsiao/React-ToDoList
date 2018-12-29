import React from 'react';

function Button(props) {
  return (
    <button value={props.value} onClick={props.handleClick}>{props.value}</button>
  )
}


export default Button;
