import React, { Fragment } from 'react';
import Card from './Card';
import Button from './Components/Button';
import Form from './Components/Form';
import './column.css';


class Column extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      cards: ['Get Milk', 'Venmo Steven']
    }
    this.deleteCard = this.deleteCard.bind(this)
    this.addCard = this.addCard.bind(this)
  }
  deleteCard(idx) {
    const newCards = this.state.cards.slice();
    newCards.splice(idx, 1)
    this.setState({cards:newCards})
  }
  addCard(card) {
    const newCards = this.state.cards.slice();
    newCards.push(card)
    this.setState({cards:newCards})
  }
  renderCards() {
    return (
      this.state.cards.map((val, idx) => {
        return (
          <Card key={idx} value={val} deleteCard={this.deleteCard}/>
        )
      })
    )
  }
  render() {
    return (
      <div>
      <ul>
      {this.renderCards()}
      <li><Form name="addCard" onSubmit={this.addCard}/></li>
      </ul>

      </div>
    )
  }
}

export default Column;
