import React from 'react';
import PropTypes from 'prop-types';


function Card(props) {
  return (
    <li key={props.key}>{props.value}</li>
  )
}

Card.propTypes = {
  key: PropTypes.number,
  value:PropTypes.string
}

export default Card;
