import React from 'react';
import Button from './Button';

class Form extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: ''
    }
    this.handleChange = this.handleChange.bind(this);
    //this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({value: event.target.value})
  }
  handleSubmit(props) {
  //  let val = this.state.val;

  //  this.props.onSubmit()
    props.onSubmit(this.state.value)
    //event.preventDefault();
  }
  render () {
    return (
      <div name={this.props.name}>
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        <Button value={this.props.name} handleClick={this.handleSubmit(this.props)}/>
        </div>
    )
  }

}

export default Form;
