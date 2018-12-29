import React from 'react';
import Column from './Column';

class App extends React.Component {
  constructor(props) {
    super();
    this.state = {
      columns: [<Column />]
    }
  }
  render() {
    return (
      this.state.columns.map((column, idx) => {
        return (
          <div>
          {column}
          </div>
        )
      })
    )
  }
}

export default App;
