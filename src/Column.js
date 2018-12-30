import React from 'react';
import Card from './Card';
import Form from './Components/Form';
import Button from './Components/Button';
class Column extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      cards: ['one', 'two']
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
          <ul>
          <Card key={idx} value={val}/>
          <Button value="del" handleClick={this.deleteCard}/>
          </ul>
        )
      })
    )
  }
  render() {
    return (
      <div>
      <div> {this.renderCards()} </div>
      <Form name="addCard" onSubmit={this.addCard}/>
      </div>
    )
  }
}

export default Column;
