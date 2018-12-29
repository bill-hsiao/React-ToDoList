import React from 'react';

function Card(props) {
  return (
    <li key={props.key}>{props.value}</li>
  )
}


export default Card;
