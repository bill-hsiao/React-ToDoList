import React from 'react';
import { Fragment } from 'react';
import Column from './Column';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super();
    this.state = {
      columns: [<Column />]
    }
  }

//        <div class="mdl-layout mdl-js-layout">
//        </div>

  render() {
    const columns = this.state.columns;
    return (
      <Fragment>
          <header class="mdl-layout__header mdl-layout__header--scroll">
          <span class="mdl-layout-title">Do These Things</span>

            <div class="mdl-layout-spacer"></div>

        </header>



        <main class="mdl-layout__content">

        <div class="page-content">
          <Column/>
        </div>
      </main>
        </Fragment>
      )
    }


}

export default App;
