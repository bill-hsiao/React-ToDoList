import React from 'react';

class Form extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({value: event.target.value})
  }
  handleSubmit(event) {
    this.props.onSubmit(this.state.value)
    event.preventDefault();
    //clears the input field
    this.setState({value: ''})
  }


        // <form onSubmit={this.handleSubmit}>
        // <div class="mdl-textfield mdl-js-textfield">
        // <input class="mdl-textfield__input" type="text" value={this.state.value} onChange={this.handleChange} />
        //   </div>
        // <input class="mdl-chip__action" type="submit" value={this.props.name}> <i class="material-icons">cancel</i></input>
        //   </form>
  render () {
    return (


        <form onSubmit={this.handleSubmit}>
        <span class="mdl-list__item-primary-content">
        <input type="text" value={this.state.value} onChange={this.handleChange} placeHolder="new task..."/>
        </span>
        <button class="mdl-chip__action"><i class="material-icons">add</i></button>
        </form>


    )
  }

}

export default Form;
