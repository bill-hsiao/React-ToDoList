import React from 'react';
import PropTypes from 'prop-types';


function Card(props) {
  return (
    <li class=" mdl-list__item" key={props.key}>
      <span class="mdl-list__item-primary-content">{props.value}</span>
      <button type="button" class="mdl-chip__action" onClick={props.deleteCard}><i class="material-icons">cancel</i></button>
    </li>
  )
}

Card.propTypes = {
  key: PropTypes.number,
  value:PropTypes.string
}

export default Card;
