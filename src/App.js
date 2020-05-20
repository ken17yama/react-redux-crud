import React, { Component } from 'react';

const App = () => (<Counter></Counter>)

class Counter extends Component {
  constructor(props) {
    super(props)
    this.state = { count: 0 }
  }

  handlePlusButton = () => {
    this.setState({ count: this.state.count + 1 })
  }

  handlerMinusButton = () => {
    this.setState({ count: this.state.count - 1 })
  }

  render() {
    return (
      <React.Fragment>
        <div>Count: {this.state.count}</div>
        <button onClick={this.handlePlusButton}>+1</button>
        <button onClick={this.handlerMinusButton}>+1</button>
      </React.Fragment>
    )
  }
}

export default App;
